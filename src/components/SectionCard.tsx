import React from 'react';

interface SectionCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, subtitle, children, actions }) => {
  return (
    <section className="card section-card">
      <header className="section-header">
        <div>
          <p className="eyebrow">{subtitle}</p>
          <h2>{title}</h2>
        </div>
        {actions}
      </header>
      {children}
    </section>
  );
};

export default SectionCard;
