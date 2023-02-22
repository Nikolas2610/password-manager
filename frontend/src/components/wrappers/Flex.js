import React from 'react';

function Flex({ children, items, justify, gap }) {
  const getFlexClass = (prop, value) => {
    if (!value) return '';
    if (prop === 'gap') return `gap-${value}`;
    return Object.entries(value)
      .map(([key, value]) => `${key}:${prop}-${value}`)
      .join(' ');
  };

  const flexClasses = [
    getFlexClass('items', items),
    getFlexClass('justify', justify),
    getFlexClass('gap', gap),
  ].filter(Boolean).join(' ');

  return (
    <div className={`flex ${flexClasses}`}>
      {children}
    </div>
  );
}

export default Flex;