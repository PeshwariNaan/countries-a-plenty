import styled from 'styled-components';
import ReactSelect from 'react-select';

export const CustomSelect = styled(ReactSelect)`
  width: 30rem;
  box-shadow: 0 0.5rem 1rem var(--shadow);
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    width: 25rem;
  }

  & .Select__control {
    height: 6rem;
    border: none;
    font-family: 'Nunito Sans';
    font-size: 1.5rem;
    font-weight: 600;
    background-color: var(--ele);
  }

  & .Select__menu {
    font-family: 'Nunito Sans';
    background-color: var(--ele);
  }

  & .Select__placeholder {
    font-size: 1.5rem;
    color: var(--text);
  }

  & .Select__inputValue {
    color: var(--text);
  }

  & .Select__ValueContainer {
    color: var(--text);
  }

  & .Select__singleValue {
    font-size: 5rem;
    color: var(--text);
  }
`;
