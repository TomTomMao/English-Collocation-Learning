import { useEffect, useMemo, useState } from 'react';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';
import { useCollocations, type Collocation } from '../context/CollocationContext';

type QuizItem = {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  helper?: string;
};

const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

const pickRandom = <T,>(items: T[], count: number): T[] => {
  if (!items.length) return [];
  if (items.length <= count) return [...items];
  return shuffle(items).slice(0, count);
};

const buildDefinitionQuestions = (all: Collocation[], pattern: Collocation['pattern'], count = 3): QuizItem[] => {
  const pool = all.filter((item) => item.pattern === pattern);
  if (!pool.length) return [];

  return pickRandom(pool, count).map((target, idx) => {
    const distractors = pickRandom(all.filter((item) => item.id !== target.id), 2).map((item) => item.text);
    const options = shuffle([target.text, ...distractors]);

    return {
      id: `pattern-${pattern}-${idx}-${target.id}`,
      prompt: `Which collocation matches this definition? ${target.definition}`,
      options,
      answer: target.text,
      helper: 'Match the natural collocation to the meaning.',
    };
  });
};

const createCorruptedSentence = (target: Collocation, replacement?: Collocation) => {
  const targetWords = target.text.split(' ');
  let wrongCollocation: string;

  if (!replacement) {
    wrongCollocation = `${targetWords[0]} ???`;
  } else {
    const replacementWords = replacement.text.split(' ');
    const mutated = [...targetWords];
    mutated[0] = replacementWords[0] ?? mutated[0];
    if (mutated.join(' ') === target.text && replacementWords.length > 1) {
      mutated[mutated.length - 1] = replacementWords[replacementWords.length - 1];
    }
    wrongCollocation = mutated.join(' ');
  }

  const sentence = target.example.includes(target.text)
    ? target.example.replace(target.text, wrongCollocation)
    : `Fix this collocation: ${wrongCollocation}`;

  return { wrongCollocation, sentence };
};

const buildErrorQuestions = (all: Collocation[], count = 3): QuizItem[] => {
  if (!all.length) return [];
  return pickRandom(all, count).map((target, idx) => {
    const replacement = pickRandom(all.filter((item) => item.id !== target.id && item.pattern === target.pattern), 1)[0]
      ?? pickRandom(all.filter((item) => item.id !== target.id), 1)[0];
    const { wrongCollocation, sentence } = createCorruptedSentence(target, replacement);
    const distractors = pickRandom(all.filter((item) => item.id !== target.id), 1).map((item) => item.text);
    const options = Array.from(new Set([target.text, wrongCollocation, ...distractors]));

    return {
      id: `error-${idx}-${target.id}`,
      prompt: `Fix the sentence: ${sentence}`,
      options: shuffle(options),
      answer: target.text,
      helper: 'Choose the collocation that sounds natural.',
    };
  });
};

const PracticeScreen = () => {
  const { collocations } = useCollocations();
  const [mode, setMode] = useState<'pattern' | 'error'>('pattern');
  const [pattern, setPattern] = useState<string>('verb+noun');
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const patternValues = useMemo(() => {
    const unique = Array.from(new Set(collocations.map((item) => item.pattern)));
    return unique.length ? unique : ['verb+noun'];
  }, [collocations]);

  useEffect(() => {
    if (!patternValues.includes(pattern)) {
      setPattern(patternValues[0]);
    }
  }, [patternValues, pattern]);

  const patternSet = useMemo(() => buildDefinitionQuestions(collocations, pattern as Collocation['pattern']), [collocations, pattern]);
  const errorSet = useMemo(() => buildErrorQuestions(collocations), [collocations]);

  const handleAnswer = (isCorrect: boolean) => {
    setScore((prev) => ({ correct: prev.correct + (isCorrect ? 1 : 0), total: prev.total + 1 }));
  };

  return (
    <div className="stack-lg">
      <div className="mode-switch card">
        <button className={`chip ${mode === 'pattern' ? 'active' : ''}`} onClick={() => setMode('pattern')}>
          Pattern Trainer
        </button>
        <button className={`chip ${mode === 'error' ? 'active' : ''}`} onClick={() => setMode('error')}>
          Error Hunting
        </button>
        <div className="score">Session Score: {score.correct} / {score.total}</div>
      </div>

      {mode === 'pattern' && (
        <SectionCard
          title="Pattern Trainer"
          subtitle="Focus on collocation building blocks"
          actions={
            <div className="chips">
              {patternValues.map((p) => (
                <button key={p} className={`chip ${pattern === p ? 'active' : ''}`} onClick={() => setPattern(p)}>
                  {p.replace('+', ' + ')}
                </button>
              ))}
            </div>
          }
        >
          {patternSet.length === 0 ? (
            <p className="muted">No collocations available for this pattern yet.</p>
          ) : (
            <div className="stack-sm">
              {patternSet.map((item, idx) => (
                <MultipleChoiceQuestion
                  key={item.id}
                  prompt={`${idx + 1}. ${item.prompt}`}
                  options={item.options}
                  answer={item.answer}
                  helper={item.helper}
                  onAnswered={handleAnswer}
                />
              ))}
            </div>
          )}
        </SectionCard>
      )}

      {mode === 'error' && (
        <SectionCard title="Error Hunting" subtitle="Fix the awkward collocation">
          {errorSet.length === 0 ? (
            <p className="muted">Add more collocations to practice error fixes.</p>
          ) : (
            <div className="stack-sm">
              {errorSet.map((item, idx) => (
                <MultipleChoiceQuestion
                  key={item.id}
                  prompt={`${idx + 1}. ${item.prompt}`}
                  options={item.options}
                  answer={item.answer}
                  helper={item.helper}
                  onAnswered={handleAnswer}
                />
              ))}
            </div>
          )}
        </SectionCard>
      )}
    </div>
  );
};

export default PracticeScreen;
