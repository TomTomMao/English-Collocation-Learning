import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { collocations as mockCollocations } from '../data/collocations';

export type Collocation = {
  id: string;
  text: string;
  pattern: 'verb+noun' | 'adj+noun' | 'verb+prep' | 'adv+adj' | 'adv+vpp' | 'noun+noun' | 'verb+adv' | 'verb+adj' | 'adv+verb';
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

interface CollocationState {
  saved: SavedCollocation[];
  collocations: Collocation[];
  addToSaved: (collocation: Collocation) => void;
  removeSaved: (id: string) => void;
}

export const useCollocations = create<CollocationState>()(
  persist(
    (set) => ({
      saved: [],
      collocations: mockCollocations,
      addToSaved: (collocation: Collocation) =>
        set((state) => {
          if (state.saved.some((item) => item.id === collocation.id)) return state;
          return { ...state, saved: [...state.saved, { ...collocation, mastery: 'New' }] };
        }),
      removeSaved: (id: string) =>
        set((state) => ({
          ...state,
          saved: state.saved.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'collocation-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ saved: state.saved }),
    },
  ),
);
