import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.isDark? 'hsl(207, 26%, 17%)': 'hsl(0, 0%, 98%)'};
`


export const SearchFilterContainer = styled.div`
  display: flex;
`;

export const CountryContainer = styled.div`
  width: 85vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10rem;
  //background-color: hsl(0, 0%, 98%);
`;
