import CollocationCard from '../components/CollocationCard';
import MultipleChoiceQuestion from '../components/MultipleChoiceQuestion';
import SectionCard from '../components/SectionCard';
import { useCollocations } from '../context/CollocationContext';

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

const todayCollocationIds = ['c4', 'c8', 'c10', 'c12', 'c17'];

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

const TodayScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const todaysCollocations = collocations.filter((c) => todayCollocationIds.includes(c.id));

  return (
    <div className="grid">
      <SectionCard title="Daily Warm-Up" subtitle="3 quick checks to start your day">
        <div className="stack-sm">
          {warmUpQuestions.map((q, index) => (
            <MultipleChoiceQuestion key={q.prompt} prompt={`${index + 1}. ${q.prompt}`} options={q.options} answer={q.answer} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="New Collocations" subtitle="Fresh drops for today">
        <div className="grid two-cols">
          {todaysCollocations.map((collocation) => (
            <CollocationCard key={collocation.id} collocation={collocation} onAction={addToSaved} actionLabel="Save" />
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
