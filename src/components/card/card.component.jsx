import React from 'react';
import { Link } from 'react-router-dom';
import Stat from '../country-stats/country-stat.component';
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

const Card = ({ country, isDark, onClick }) => {
  return (
    <CardContainer key={country.name.common} isDark={isDark} onClick={onClick}>
      <Link to={`/details/${country.name.common}`} state={{ country }}>
        <FlagImageContainer>
          <FlagImg
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
          />
        </FlagImageContainer>
      </Link>
      <TextContainer>
        <CountryTitle isDark={isDark}>{country.name.common}</CountryTitle>
        <Stat title="Population:" isDark={isDark}>
          {new Intl.NumberFormat('en-EN').format(country.population)}
        </Stat>
        <Stat title="Region:" isDark={isDark}>
          {country.region}
        </Stat>
        <Stat title="Capital:" isDark={isDark}>
          {country.capital}
        </Stat>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;


