import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './button.styles';

const Button = ({ country }) => {
  return (
    <Link
      to={`/countries-a-plenty/details/${country.cca3}`}
      state={{ country }}
    >
      <StyledButton>{country.name.common}</StyledButton>
    </Link>
  );
};

export default Button;
