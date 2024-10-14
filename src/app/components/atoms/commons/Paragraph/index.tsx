import React from 'react';

interface ParagraphProps {
  className?: string; // Optional className prop
  children: React.ReactNode; // To allow any content inside the paragraph
}

const Paragraph: React.FC<ParagraphProps> = ({ className = '', children }) => {
  return <p className={`${className}`}>{children}</p>;
};

export default Paragraph;
