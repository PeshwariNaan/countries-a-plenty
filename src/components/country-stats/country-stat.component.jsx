import React from 'react';
import { StatContainer, StatsTitle, Stats } from './country-stat.styles';

const Stat = ({ title, children, isDark ,bGap }) => {
  return (
    <StatContainer bGap={bGap}>
      <StatsTitle isDark={isDark}>{title}</StatsTitle>
      <Stats isDark={isDark}>{children}</Stats>
    </StatContainer>
  );
};

export default Stat;
