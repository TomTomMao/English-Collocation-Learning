import { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import TodayScreen from './screens/TodayScreen';
import ExploreScreen from './screens/ExploreScreen';
import PracticeScreen from './screens/PracticeScreen';
import LibraryScreen from './screens/LibraryScreen';

const tabs = ['Today', 'Explore', 'Practice', 'Library'] as const;

const App = () => {
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('Today');

  return (
    <div className="app-shell">
      <NavigationBar active={activeTab} onChange={setActiveTab} tabs={tabs} />
      <main className="page">
        {activeTab === 'Today' && <TodayScreen />}
        {activeTab === 'Explore' && <ExploreScreen />}
        {activeTab === 'Practice' && <PracticeScreen />}
        {activeTab === 'Library' && <LibraryScreen />}
      </main>
    </div>
  );
};

export default App;
