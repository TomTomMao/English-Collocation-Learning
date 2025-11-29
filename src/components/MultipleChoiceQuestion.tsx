import React, { useState } from 'react';

interface MultipleChoiceQuestionProps {
  prompt: string;
  options: string[];
  answer: string;
  helper?: string;
  onAnswered?: (isCorrect: boolean) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
  prompt,
  options,
  answer,
  helper,
  onAnswered,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    if (selected) return;
    const correct = option === answer;
    setSelected(option);
    onAnswered?.(correct);
  };

  return (
    <div className="question">
      <p className="prompt">{prompt}</p>
      {helper && <p className="muted tiny">{helper}</p>}
      <div className="options">
        {options.map((option) => {
          const isCorrect = option === answer;
          const isSelected = selected === option;
          return (
            <button
              key={option}
              className={`option ${isSelected ? 'selected' : ''} ${selected && isCorrect ? 'correct' : ''} ${
                selected && isSelected && !isCorrect ? 'incorrect' : ''
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className={`feedback ${selected === answer ? 'correct' : 'incorrect'}`}>
          {selected === answer ? 'Correct!' : `Try again: ${answer}`}
        </p>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;
