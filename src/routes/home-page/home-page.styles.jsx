import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.isDark? 'hsl(207, 26%, 17%)': 'hsl(0, 0%, 98%)'};
`


export const SearchFilterContainer = styled.div`
  display: flex;
  width: 75vw;
  height: 15rem;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const CountryContainer = styled.div`
  width: 75vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 10rem;
`;
