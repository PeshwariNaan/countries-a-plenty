import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100vh;
    background-color: ${props => props.isDark? 'hsl(207, 26%, 17%)': 'hsl(0, 0%, 98%)'};
    transition: all .5s linear;
`


export const SearchFilterContainer = styled.div`
  display: flex;
  width: 85vw;
  height: 15rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 775px) {
    flex-direction: column;
    justify-content: space-around;
    height: 20rem;
    align-items: flex-start;
  }
`;

export const CountryContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: auto;
  justify-items: center;
  grid-row-gap: 10rem;

  @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: auto;
    grid-gap: 5rem;
  }
`;
