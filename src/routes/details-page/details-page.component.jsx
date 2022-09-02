import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../store/theme.context';
import { CountriesContext } from '../../store/countries.context';
import Button from '../../components/button/button.component';
import {
  MainContainer,
  FlagImage,
  InfoContainer,
  CountryTitle,
  StatContainer,
  Stats,
  StatsTitle,
  DetailsContainer,
  DetailsLeftContainer,
  DetailsLRightContainer,
  BorderButtonsContainer
} from './details-page.styles';

const DetailsPage = () => {
  //const [borderCountryData, setBorderCountryData] = useState([])
  const { state } = useLocation();
  const { country } = state || {};
  const theme = useContext(ThemeContext);
  const { countryData } = useContext(CountriesContext)
  const darkMode = theme.state.darkMode;
  const borderCountriesCodes = Object.values(country.borders)
  

  const getBorderCountryData = () => {
    let borderCountries = []
    let borders = borderCountriesCodes    
    for(let i=0; i < borders.length; i++) {     
      const result = countryData.find(b => b.cca3 === borders[i])
      borderCountries.push(result)      
    }     
    return borderCountries    
  }
  useEffect(() => {
  }, [])
  
  const borderCountryData = getBorderCountryData()
  console.log("borderCountryData: ", borderCountryData)
  //setBorderCountryData(borderCountryData)   

  

  return (
    <MainContainer isDark={darkMode}>
      <DetailsContainer>
        <FlagImage src={country.flags.png} />
        <InfoContainer>
          <CountryTitle>{country.name.common}</CountryTitle>
          <DetailsLeftContainer>
            <StatContainer>
              <StatsTitle isDark={darkMode}>Native Name:</StatsTitle>
              <Stats>{Object.values(country.name.nativeName)[0].official}</Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Population:</StatsTitle>
              <Stats>
                {new Intl.NumberFormat('en-EN').format(country.population)}
              </Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Region:</StatsTitle>
              <Stats>{country.region}</Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Sub Region:</StatsTitle>
              <Stats>{country.subregion}</Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Capital:</StatsTitle>
              <Stats>{country.capital}</Stats>
            </StatContainer>
          </DetailsLeftContainer>
          <DetailsLRightContainer>
            <StatContainer>
              <StatsTitle>Top level Domain:</StatsTitle>
              <Stats>{country.tld[0]}</Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Currencies:</StatsTitle>
              <Stats>
                {Object.values(country.currencies).map((obj) => obj.name).join(", ")}
              </Stats>
            </StatContainer>
            <StatContainer>
              <StatsTitle>Languages:</StatsTitle>
              <Stats>
                {country.languages
                  ? Object.values(country.languages).join(', ')
                  : ''}
              </Stats>
            </StatContainer>
          </DetailsLRightContainer>
          <BorderButtonsContainer>   
            <h2>Border Countries:</h2>       
            {borderCountryData.map((data, idx) => {
              return <Button key={idx} country={data} />
            })}
          </BorderButtonsContainer>
        </InfoContainer>
      </DetailsContainer>
    </MainContainer>
  );
};

export default DetailsPage;
