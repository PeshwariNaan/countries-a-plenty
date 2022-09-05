import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from './button.styles';

const Button = ({ country, isDark }) => {
  return (
    <Link to={`/details/${country.name.common}`} state={{country}} >
      <StyledButton isDark={isDark}>{country.name.common}</StyledButton>
    </Link>
  );
};

export default Button;
