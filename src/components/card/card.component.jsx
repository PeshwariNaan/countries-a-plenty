import React from 'react';
import {
  CardContainer,
  FlagImageContainer,
  StatsTitle,
  Stats,
  CountryTitle,
  TextContainer,
  FlagImg,
  StatContainer,
} from './card.styles';

const Card = ({ country, isDark }) => {
  const { name, altSpellings, flags, population, region, capital } = country;
  return (
    <CardContainer key={name.common} isDark={isDark}>
      <FlagImageContainer>
        <FlagImg src={flags.png} alt={`flag of ${name.common}`} />
      </FlagImageContainer>
      <TextContainer>
        <CountryTitle isDark={isDark}>{name.common}</CountryTitle>
        <StatContainer>
          <StatsTitle isDark={isDark}>Population: </StatsTitle>
          <Stats isDark={isDark}>{new Intl.NumberFormat('en-EN').format(population)}</Stats>
        </StatContainer>
        <StatContainer>
          <StatsTitle isDark={isDark}>Region: </StatsTitle>
          <Stats isDark={isDark}>{region}</Stats>
        </StatContainer>
        <StatContainer>
          <StatsTitle isDark={isDark}>Capital: </StatsTitle>
          <Stats isDark={isDark}>{capital}</Stats>
        </StatContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
