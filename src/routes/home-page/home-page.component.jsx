import { Fragment, useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../store/theme.context';
import axios from 'axios';
import {
  CountryContainer,
  SearchFilterContainer,
  MainContainer,
} from './home-page.styles';
import Card from '../../components/card/card.component';

const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,altSpellings,capital,population,region,flags,subregion,tld,currencies,languages,borders,cca3`
      );
      console.log(response.data);
      setCountryData(response.data);
    } catch (error) {
      throw new Error('There is a problem in getting the data');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <MainContainer isDark={darkMode}>
        <SearchFilterContainer isDark={darkMode}>Home page</SearchFilterContainer>
        <CountryContainer>
          {countryData.map((country, idx) => {
            return <Card key={idx} country={country} isDark={darkMode} />;
          })}
        </CountryContainer>
      </MainContainer>
    </Fragment>
  );
};

export default HomePage;
