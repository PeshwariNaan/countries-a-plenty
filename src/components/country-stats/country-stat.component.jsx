import React from 'react';
import { StatContainer, StatsTitle, Stats } from './country-stat.styles';

const Stat = ({ title, children, bGap }) => {
  return (
    <StatContainer bGap={bGap}>
      <StatsTitle>{title}</StatsTitle>
      <Stats>{children}</Stats>
    </StatContainer>
  );
};

export default Stat;
