import { useMemo, useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import FilterBar from '../components/FilterBar';
import { useCollocations, type Collocation } from '../context/CollocationContext';
import { useToast } from '../components/ui/toast';

const ExploreScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const toast = useToast();
  const [topic, setTopic] = useState('All');
  const [pattern, setPattern] = useState('All');
  const patternOptions = useMemo(() => {
    const unique = new Set(collocations.map((c) => c.pattern));
    return ['All', ...Array.from(unique)];
  }, [collocations]);

  const handleSave = (collocation: Collocation) => {
    const added = addToSaved(collocation);
    toast({
      title: added ? 'Added to library' : 'Already saved',
      description: added
        ? `${collocation.text} was added to your personal list.`
        : `${collocation.text} is already in your library.`,
      variant: added ? 'success' : 'info',
    });
  };

  const filtered = collocations.filter((c) => {
    const topicMatch = topic === 'All' || c.topics.includes(topic);
    const patternMatch = pattern === 'All' || c.pattern === pattern;
    return topicMatch && patternMatch;
  });

  return (
    <div className="stack-lg">
      <FilterBar
        topic={topic}
        pattern={pattern}
        patternOptions={patternOptions}
        onTopicChange={setTopic}
        onPatternChange={setPattern}
      />
      <div className="grid two-cols">
        {filtered.map((collocation) => (
          <CollocationCard
            key={collocation.id}
            collocation={collocation}
            onAction={handleSave}
            actionLabel="Add to My List"
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
