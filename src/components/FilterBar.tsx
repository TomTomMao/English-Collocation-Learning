type FilterOption = {
  value: string;
  count: number;
};

interface FilterBarProps {
  topic: string;
  pattern: string;
  topicOptions: FilterOption[];
  patternOptions: FilterOption[];
  onTopicChange: (value: string) => void;
  onPatternChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ topic, pattern, topicOptions, patternOptions, onPatternChange, onTopicChange }) => {
  return (
    <div className="filter-bar card">
      <div className="field">
        <label>Topic</label>
        <select value={topic} onChange={(e) => onTopicChange(e.target.value)}>
          {topicOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {`${option.value} (${option.count})`}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Pattern</label>
        <select value={pattern} onChange={(e) => onPatternChange(e.target.value)}>
          {patternOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {`${option.value === 'All' ? 'All' : option.value.split('+').join(' + ')} (${option.count})`}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
