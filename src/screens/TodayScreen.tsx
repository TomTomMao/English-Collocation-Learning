import { useEffect, useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';
import { useCollocations, type Collocation } from '../context/CollocationContext';
import { useToast } from '../components/ui/toast';

const warmUpQuestions = [
  {
    prompt: 'We need to ___ a decision soon.',
    options: ['do', 'make', 'take'],
    answer: 'make',
  },
  {
    prompt: 'Please ___ attention to the road signs.',
    options: ['pay', 'take', 'do'],
    answer: 'pay',
  },
  {
    prompt: 'She hopes to ___ a record this season.',
    options: ['set', 'break', 'build'],
    answer: 'break',
  },
];

const reviewItems = [
  {
    id: 'r1',
    sentence: 'He finally decided to ___ responsibility for the mistake.',
    options: ['take', 'do', 'make'],
    answer: 'take',
  },
  {
    id: 'r2',
    sentence: 'It was ___ recommended by my teacher.',
    options: ['highly', 'strongly', 'heavily'],
    answer: 'highly',
  },
  {
    id: 'r3',
    sentence: 'She ___ into tears after the call.',
    options: ['burst', 'broke', 'went'],
    answer: 'burst',
  },
];

const selectRandomCollocations = (items: Collocation[], count = 5) => {
  if (!items.length) return [];

  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, items.length));
};

const TodayScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const toast = useToast();
  const [todaysCollocations, setTodaysCollocations] = useState<Collocation[]>([]);

  useEffect(() => {
    setTodaysCollocations(selectRandomCollocations(collocations));
  }, [collocations]);

  const refreshDaily = () => {
    setTodaysCollocations(selectRandomCollocations(collocations));
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
          {reviewItems.map((item) => (
            <MultipleChoiceQuestion key={item.id} prompt={item.sentence} options={item.options} answer={item.answer} />
          ))}
        </div>
      </SectionCard>
    </div>
  );
};

export default TodayScreen;
