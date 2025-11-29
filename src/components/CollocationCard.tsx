import React from 'react';
import { Collocation } from '../context/CollocationContext';

interface CollocationCardProps {
  collocation: Collocation;
  onAction?: (collocation: Collocation) => void;
  actionLabel?: string;
  subtle?: boolean;
}

const CollocationCard: React.FC<CollocationCardProps> = ({ collocation, onAction, actionLabel, subtle }) => {
  return (
    <div className={`card collocation-card ${subtle ? 'subtle' : ''}`}>
      <div className="card-header">
        <div>
          <p className="eyebrow">{collocation.pattern.replace('+', ' + ')}</p>
          <h3>{collocation.text}</h3>
        </div>
        {onAction && (
          <button className="ghost" onClick={() => onAction(collocation)}>
            {actionLabel ?? 'Save'}
          </button>
        )}
      </div>
      <p className="muted">Topics: {collocation.topics.join(', ')}</p>
      <p className="definition">{collocation.definition}</p>
      <p className="example">Example: {collocation.example}</p>
    </div>
  );
};

export default CollocationCard;
