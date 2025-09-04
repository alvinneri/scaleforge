import * as React from 'react';

interface EmptySectionProps {
  title: string;
  description: string;
}

export const EmptySection: React.FC<EmptySectionProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full p-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}; 