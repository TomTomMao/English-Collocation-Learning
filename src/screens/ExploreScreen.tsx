import { useState } from 'react';
import CollocationCard from '../components/CollocationCard';
import FilterBar from '../components/FilterBar';
import { useCollocations } from '../context/CollocationContext';

const ExploreScreen = () => {
  const { collocations, addToSaved } = useCollocations();
  const [topic, setTopic] = useState('All');
  const [pattern, setPattern] = useState('All');

  const filtered = collocations.filter((c) => {
    const topicMatch = topic === 'All' || c.topics.includes(topic);
    const patternMatch = pattern === 'All' || c.pattern === pattern;
    return topicMatch && patternMatch;
  });

  return (
    <div className="stack-lg">
      <FilterBar topic={topic} pattern={pattern} onTopicChange={setTopic} onPatternChange={setPattern} />
      <div className="grid two-cols">
        {filtered.map((collocation) => (
          <CollocationCard
            key={collocation.id}
            collocation={collocation}
            onAction={addToSaved}
            actionLabel="Add to My List"
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreScreen;
