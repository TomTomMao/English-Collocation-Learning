import { useCallback, useMemo, useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import FilterBar from '../components/FilterBar';
import { useCollocations, type Collocation } from '../context/CollocationContext';
import { useToast } from '../components/ui/toast';

const ExploreScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const toast = useToast();
  const [topic, setTopic] = useState('All');
  const [pattern, setPattern] = useState('All');
  const topicValues = useMemo(() => {
    const uniqueTopics = new Set<string>();
    collocations.forEach((c) => c.topics.forEach((t) => uniqueTopics.add(t)));
    return ['All', ...Array.from(uniqueTopics)];
  }, [collocations]);

  const patternValues = useMemo(() => {
    const uniquePatterns = new Set(collocations.map((c) => c.pattern));
    return ['All', ...Array.from(uniquePatterns)];
  }, [collocations]);

  const countMatches = useCallback(
    (topicValue: string, patternValue: string) =>
      collocations.filter((c) => {
        const topicMatch = topicValue === 'All' || c.topics.includes(topicValue);
        const patternMatch = patternValue === 'All' || c.pattern === patternValue;
        return topicMatch && patternMatch;
      }).length,
    [collocations],
  );

  const topicOptions = useMemo(
    () => topicValues.map((value) => ({ value, count: countMatches(value, pattern) })),
    [topicValues, countMatches, pattern],
  );

  const patternOptions = useMemo(
    () => patternValues.map((value) => ({ value, count: countMatches(topic, value) })),
    [patternValues, countMatches, topic],
  );
  const filtered = useMemo(() => {
    return collocations.filter((c) => {
      const topicMatch = topic === 'All' || c.topics.includes(topic);
      const patternMatch = pattern === 'All' || c.pattern === pattern;
      return topicMatch && patternMatch;
    });
  }, [collocations, topic, pattern]);

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

  return (
    <div className="stack-lg">
      <FilterBar
        topic={topic}
        pattern={pattern}
        topicOptions={topicOptions}
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
