import styled from 'styled-components';
import ReactSelect from 'react-select';

export const CustomSelect = styled(ReactSelect)`
  width: 30rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  & .Select__control {
    height: 6rem;
    border: none;
    font-family: 'Nunito Sans';
    font-size: 1.5rem;
    font-weight: 600;
    background-color: ${(props) =>
      props.isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  }

  /* & .Select__option {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
    &:hover {
      background-color: grey;
    }    
  } */

  & .Select__menu {
    font-family: 'Nunito Sans';
    background-color: ${(props) =>
      props.isDark ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)'};
  }

  & .Select__placeholder {
    font-size: 1.5rem;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  }

  & .Select__inputValue {
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  }

  & .Select__ValueContainer {
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  }

  & .Select__singleValue {
    font-size: 5rem;
    color: ${(props) =>
      props.isDark ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'};
  }
`;
