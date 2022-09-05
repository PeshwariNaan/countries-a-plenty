import { useContext, useEffect, useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../store/theme.context';
import { CountriesContext } from '../../store/countries.context';
import Button from '../../components/button/button.component';
import Stat from '../../components/country-stats/country-stat.component';
import {
  MainContainer,
  BackButtonContainer,
  FlagImage,
  InfoContainer,
  CountryTitle,
  DetailsContainer,
  DetailsLeftContainer,
  DetailsLRightContainer,
  BorderButtonsContainer,
  BackButton,
} from './details-page.styles';

const DetailsPage = () => {
  //const [borderCountryData, setBorderCountryData] = useState([])
  const { state } = useLocation();
  const { country } = state || {};
  const theme = useContext(ThemeContext);
  const { countryData } = useContext(CountriesContext);
  const darkMode = theme.state.darkMode;
  const borderCountriesCodes = Object.values(country.borders);
  const navigate = useNavigate();

  const getBorderCountryData = () => {
    let borderCountries = [];
    let borders = borderCountriesCodes;
    for (let i = 0; i < borders.length; i++) {
      const result = countryData.find((b) => b.cca3 === borders[i]);
      borderCountries.push(result);
    }
    return borderCountries;
    // setBorderCountryData(borderCountries)
  };
  // useEffect(() => {
  //   getBorderCountryData()
  //   console.log("Re-rendered")
  // }, []);

  const borderCountryData = getBorderCountryData();
  console.log(borderCountryData);
  //console.log('borderCountryData: ', borderCountryData);
  //setBorderCountryData(borderCountryData)

  return (
    <MainContainer isDark={darkMode}>
      <BackButtonContainer>
        <BackButton onClick={() => navigate(-1)} isDark={darkMode}>
          <span style={{ marginRight: '2rem' }}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
          Back
        </BackButton>
      </BackButtonContainer>
      <DetailsContainer>
        <FlagImage src={country.flags.png} />
        <InfoContainer isDark={darkMode}>
          <CountryTitle isDark={darkMode}>{country.name.common}</CountryTitle>
          <DetailsLeftContainer>
            <Stat title="Native Name:" isDark={darkMode} bGap>
              {Object.values(country.name.nativeName)[0].official}
            </Stat>
            <Stat title="Population:" isDark={darkMode} bGap>
              {new Intl.NumberFormat('en-EN').format(country.population)}
            </Stat>
            <Stat title="Region:" isDark={darkMode} bGap>
              {country.region}
            </Stat>
            <Stat title="Sub Region:" isDark={darkMode} bGap>
              {country.subregion}
            </Stat>
            <Stat title="Capital:" isDark={darkMode} bGap>
              {country.capital}
            </Stat>
          </DetailsLeftContainer>
          <DetailsLRightContainer>
            <Stat title="Top level domain:" isDark={darkMode} bGap>
              {country.tld[0]}
            </Stat>
            <Stat title="Currencies:" isDark={darkMode} bGap>
              {Object.values(country.currencies)
                .map((obj) => obj.name)
                .join(', ')}
            </Stat>
            <Stat title="Languages:" isDark={darkMode} bGap>
              {country.languages
                ? Object.values(country.languages).join(', ')
                : ''}
            </Stat>
          </DetailsLRightContainer>
          <BorderButtonsContainer isDark={darkMode}>
            <h2>Border Countries:</h2>
            {borderCountryData.length > 0 ? (
              borderCountryData.map((data, idx) => {
                return <Button key={idx} country={data} isDark={darkMode} />;
              })
            ) : (
              <h2>None</h2>
            )}
          </BorderButtonsContainer>
        </InfoContainer>
      </DetailsContainer>
    </MainContainer>
  );
};

export default DetailsPage;
