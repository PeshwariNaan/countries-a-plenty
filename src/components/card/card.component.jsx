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

const Card = ({ country }) => {
  const { name, altSpellings, flags, population, region, capital } = country;
  return (
    <CardContainer key={name.common}>
      <FlagImageContainer>
        <FlagImg src={flags.png} alt={`flag of ${name.common}`} />
      </FlagImageContainer>
      <TextContainer>
        <CountryTitle>{name.common}</CountryTitle>
        <StatContainer>
          <StatsTitle>Population: </StatsTitle>
          <Stats>{new Intl.NumberFormat('en-EN').format(population)}</Stats>
        </StatContainer>
        <StatContainer>
          <StatsTitle>Region: </StatsTitle>
          <Stats>{region}</Stats>
        </StatContainer>
        <StatContainer>
          <StatsTitle>Capital: </StatsTitle>
          <Stats>{capital}</Stats>
        </StatContainer>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
