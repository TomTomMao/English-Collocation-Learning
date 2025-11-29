interface NavigationBarProps<T extends readonly string[]> {
  active: T[number];
  tabs: T;
  onChange: (tab: T[number]) => void;
}

const NavigationBar = <T extends readonly string[]>({ active, tabs, onChange }: NavigationBarProps<T>) => {
  return (
    <header className="nav">
      <div className="logo">ColloFlow</div>
      <nav className="nav-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${active === tab ? 'active' : ''}`}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default NavigationBar;
