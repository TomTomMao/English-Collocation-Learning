import { useMemo, useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';
import { useCollocations } from '../context/CollocationContext';

const LibraryScreen = () => {
  const { saved, removeSaved } = useCollocations();
  const [quizIndex, setQuizIndex] = useState(0);
  const quickQuiz = useMemo(() => saved.map((c) => ({
    prompt: `Fill in the blank: ${c.example.replace(c.text, '___')}`,
    options: [c.text, c.text.replace(' ', ' the '), c.text.replace(/\s[a-z]+$/, ' something')],
    answer: c.text,
  })), [saved]);

  const hasQuiz = quickQuiz.length > 0;

  return (
    <div className="stack-lg">
      <SectionCard title="My Collocations" subtitle="Your personal bank">
        {saved.length === 0 ? (
          <p className="muted">No saved collocations yet. Explore and tap "Save" to build your bank.</p>
        ) : (
          <div className="grid two-cols">
            {saved.map((item) => (
              <CollocationCard
                key={item.id}
                collocation={item}
                onAction={() => removeSaved(item.id)}
                actionLabel="Remove"
                subtle
              />
            ))}
          </div>
        )}
      </SectionCard>

      {hasQuiz && (
        <SectionCard
          title="Quick Practice"
          subtitle="A mini drill with your saved items"
          actions={
            <div className="chips">
              {quickQuiz.map((_, idx) => (
                <button key={idx} className={`chip ${quizIndex === idx ? 'active' : ''}`} onClick={() => setQuizIndex(idx)}>
                  Q{idx + 1}
                </button>
              ))}
            </div>
          }
        >
          <MultipleChoiceQuestion
            prompt={quickQuiz[quizIndex].prompt}
            options={quickQuiz[quizIndex].options}
            answer={quickQuiz[quizIndex].answer}
            helper="Practice with your own collocations"
          />
        </SectionCard>
      )}
    </div>
  );
};

export default LibraryScreen;
