interface FilterBarProps {
  topic: string;
  pattern: string;
  onTopicChange: (value: string) => void;
  onPatternChange: (value: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ topic, pattern, onPatternChange, onTopicChange }) => {
  return (
    <div className="filter-bar card">
      <div className="field">
        <label>Topic</label>
        <select value={topic} onChange={(e) => onTopicChange(e.target.value)}>
          {['All', 'Travel', 'Work', 'Study', 'Daily life', 'Weather', 'Emotions', 'Food'].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label>Pattern</label>
        <select value={pattern} onChange={(e) => onPatternChange(e.target.value)}>
          {['All', 'verb+noun', 'adj+noun', 'verb+prep', 'adv+adj'].map((p) => (
            <option key={p} value={p}>
              {p.replace('+', ' + ')}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
