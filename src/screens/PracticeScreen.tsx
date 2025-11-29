import { useMemo, useState } from 'react';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';

const patternOptions = ['verb+noun', 'adj+noun', 'verb+prep'] as const;

const patternQuestions = {
  'verb+noun': [
    { prompt: 'Choose the correct verb for this noun: ___ an effort.', options: ['do', 'make', 'have'], answer: 'make' },
    { prompt: 'Choose the correct verb for this noun: ___ a record.', options: ['break', 'beat', 'do'], answer: 'break' },
  ],
  'adj+noun': [
    { prompt: 'Pick the best adjective: ___ rain.', options: ['strong', 'heavy', 'hard'], answer: 'heavy' },
    { prompt: 'Pick the best adjective: ___ coffee.', options: ['strong', 'powerful', 'thick'], answer: 'strong' },
  ],
  'verb+prep': [
    { prompt: 'Complete the phrase: rely ___ support.', options: ['in', 'on', 'with'], answer: 'on' },
    { prompt: 'Complete the phrase: burst ___ tears.', options: ['in', 'into', 'to'], answer: 'into' },
  ],
};

const errorHuntingItems = [
  {
    id: 'e1',
    incorrect: 'He did a big mistake yesterday.',
    options: ['made a big mistake', 'did a large mistake', 'took a big mistake'],
    answer: 'made a big mistake',
  },
  {
    id: 'e2',
    incorrect: 'They performed a decision quickly.',
    options: ['made a decision', 'took a decision', 'built a decision'],
    answer: 'made a decision',
  },
  {
    id: 'e3',
    incorrect: 'She payed attention on the teacher.',
    options: ['paid attention to the teacher', 'payed attention for the teacher', 'gave attention on the teacher'],
    answer: 'paid attention to the teacher',
  },
];

const PracticeScreen = () => {
  const [mode, setMode] = useState<'pattern' | 'error'>('pattern');
  const [pattern, setPattern] = useState<(typeof patternOptions)[number]>('verb+noun');
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const patternSet = useMemo(() => patternQuestions[pattern], [pattern]);

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
              {patternOptions.map((p) => (
                <button key={p} className={`chip ${pattern === p ? 'active' : ''}`} onClick={() => setPattern(p)}>
                  {p.replace('+', ' + ')}
                </button>
              ))}
            </div>
          }
        >
          <div className="stack-sm">
            {patternSet.map((item, idx) => (
              <MultipleChoiceQuestion
                key={item.prompt}
                prompt={`${idx + 1}. ${item.prompt}`}
                options={item.options}
                answer={item.answer}
                helper="Tap an option to check instantly"
                onAnswered={handleAnswer}
              />
            ))}
          </div>
        </SectionCard>
      )}

      {mode === 'error' && (
        <SectionCard title="Error Hunting" subtitle="Fix the awkward collocation">
          <div className="stack-sm">
            {errorHuntingItems.map((item, idx) => (
              <MultipleChoiceQuestion
                key={item.id}
                prompt={`${idx + 1}. ${item.incorrect}`}
                options={item.options}
                answer={item.answer}
                onAnswered={handleAnswer}
              />
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
};

export default PracticeScreen;
