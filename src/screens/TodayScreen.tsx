import { useEffect, useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';
import { useCollocations, type Collocation, type DailyQuestion } from '../context/CollocationContext';
import { useToast } from '../components/ui/toast';

const blankWithCollocation = (collocation: Collocation) => {
  if (collocation.example.includes(collocation.text)) {
    return collocation.example.replace(collocation.text, '___');
  }
  return `Fill in the blank: ${collocation.text.replace(' ', ' ___ ')}`;
};

const shuffleStrings = (values: string[]) => [...values].sort(() => Math.random() - 0.5);

const createBlankQuestions = (items: Collocation[], count = 3, helper?: string): DailyQuestion[] => {
  if (!items.length) return [];

  const targets = selectRandomCollocations(items, count);
  return targets.map((collocation) => {
    const distractors = selectRandomCollocations(
      items.filter((item) => item.id !== collocation.id),
      2,
    ).map((item) => item.text);

    const options = shuffleStrings([collocation.text, ...distractors]);

    return {
      prompt: blankWithCollocation(collocation),
      options,
      answer: collocation.text,
      helper,
    };
  });
};

const selectRandomCollocations = (items: Collocation[], count = 5) => {
  if (!items.length) return [];

  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, items.length));
};

const TodayScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const toast = useToast();
  const [warmUpQuestions, setWarmUpQuestions] = useState<DailyQuestion[]>([]);
  const [reviewQuestions, setReviewQuestions] = useState<DailyQuestion[]>([]);
  const [todaysCollocations, setTodaysCollocations] = useState<Collocation[]>([]);

  useEffect(() => {
    setTodaysCollocations(selectRandomCollocations(collocations));
    setWarmUpQuestions(createBlankQuestions(collocations));
    setReviewQuestions(createBlankQuestions(collocations, 3, 'Recall the best-fit collocation'));
  }, [collocations]);

  const refreshDaily = () => {
    setTodaysCollocations(selectRandomCollocations(collocations));
    setWarmUpQuestions(createBlankQuestions(collocations));
    setReviewQuestions(createBlankQuestions(collocations, 3, 'Recall the best-fit collocation'));
    toast({
      title: 'Daily collocations refreshed',
      description: 'Here are some new pairs to explore today.',
      variant: 'info',
    });
  };

  const handleSave = (collocation: Collocation) => {
    const added = addToSaved(collocation);
    toast({
      title: added ? 'Saved to library' : 'Already saved',
      description: added
        ? `${collocation.text} was added to your practice list.`
        : `${collocation.text} is already in your library.`,
      variant: added ? 'success' : 'default',
    });
  };

  return (
    <div className="grid">
      <SectionCard title="Daily Warm-Up" subtitle="3 quick checks to start your day">
        <div className="stack-sm">
          {warmUpQuestions.map((q, index) => (
            <MultipleChoiceQuestion key={q.prompt} prompt={`${index + 1}. ${q.prompt}`} options={q.options} answer={q.answer} />
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="New Collocations"
        subtitle="Fresh drops for today"
        actions={
          <button className="ghost refresh" onClick={refreshDaily} type="button">
            Refresh
          </button>
        }
      >
        <div className="grid two-cols">
          {todaysCollocations.map((collocation) => (
            <CollocationCard key={collocation.id} collocation={collocation} onAction={handleSave} actionLabel="Save" />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Review" subtitle="Keep your streak alive">
        <div className="stack-sm">
          {reviewQuestions.map((item, idx) => (
            <MultipleChoiceQuestion
              key={`${item.answer}-${idx}`}
              prompt={`${idx + 1}. ${item.prompt}`}
              options={item.options}
              answer={item.answer}
              helper={item.helper}
            />
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default TodayScreen;
