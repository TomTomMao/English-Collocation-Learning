import React, { createContext, useContext, useMemo, useState } from 'react';
import { collocations as mockCollocations } from '../data/collocations';

export type Collocation = {
  id: string;
  text: string;
  pattern: 'verb+noun' | 'adj+noun' | 'verb+prep' | 'adv+adj';
  topics: string[];
  definition: string;
  example: string;
};

export type SavedCollocation = Collocation & {
  mastery: 'New' | 'Learning' | 'Known';
};

export type DailyQuestion = {
  prompt: string;
  options: string[];
  answer: string;
  helper?: string;
};

export type GapReview = {
  id: string;
  sentence: string;
  options: string[];
  answer: string;
};

interface CollocationContextValue {
  saved: SavedCollocation[];
  addToSaved: (collocation: Collocation) => void;
  removeSaved: (id: string) => void;
  collocations: Collocation[];
}

const CollocationContext = createContext<CollocationContextValue | undefined>(undefined);

export const CollocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [saved, setSaved] = useState<SavedCollocation[]>([]);

  const addToSaved = (collocation: Collocation) => {
    setSaved((prev) => {
      if (prev.find((item) => item.id === collocation.id)) return prev;
      return [...prev, { ...collocation, mastery: 'New' }];
    });
  };

  const removeSaved = (id: string) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  const value = useMemo(
    () => ({ saved, addToSaved, removeSaved, collocations: mockCollocations }),
    [saved],
  );

  return <CollocationContext.Provider value={value}>{children}</CollocationContext.Provider>;
};

export const useCollocations = (): CollocationContextValue => {
  const context = useContext(CollocationContext);
  if (!context) {
    throw new Error('useCollocations must be used within CollocationProvider');
  }
  return context;
};
