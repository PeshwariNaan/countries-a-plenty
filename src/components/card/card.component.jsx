import React from 'react';
import { Link } from 'react-router-dom';
import Stat from '../country-stats/country-stat.component';
import {
  CardContainer,
  FlagImageContainer,
  CountryTitle,
  TextContainer,
  FlagImg,
} from './card.styles';

const Card = ({ country, onClick }) => {
  return (
    <CardContainer key={country.name.common} onClick={onClick}>
      <Link
        to={`/countries-a-plenty/details/${country.cca3}`}
        state={{ country }}
      >
        <FlagImageContainer>
          <FlagImg
            src={country.flags.png}
            alt={`flag of ${country.name.common}`}
          />
        </FlagImageContainer>
      </Link>
      <TextContainer>
        <CountryTitle>{country.name.common}</CountryTitle>
        <Stat title="Population:">
          {new Intl.NumberFormat('en-EN').format(country.population)}
        </Stat>
        <Stat title="Region:">{country.region}</Stat>
        <Stat title="Capital:">{country.capital}</Stat>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
