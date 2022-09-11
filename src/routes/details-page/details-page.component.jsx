import { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CountriesContext } from '../../store/countries.context';
import Button from '../../components/button/button.component';
import Stat from '../../components/country-stats/country-stat.component';
import Spinner from '../../components/spinner/spinner.component';
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
  const [borderCountryData, setBorderCountryData] = useState([]);
  const { state } = useLocation();
  const { country } = state || {};
  const { countryData, isLoading } = useContext(CountriesContext);
  const borderCountriesCodes = Object.values(country.borders);
  const navigate = useNavigate();

  const getBorderCountryData = () => {
    let borderCountries = [];
    let borders = borderCountriesCodes;
    for (let i = 0; i < borders.length; i++) {
      const result = countryData.find((b) => b.cca3 === borders[i]);
      borderCountries.push(result);
    }
    setBorderCountryData(borderCountries);
  };

  useEffect(() => {
    if (isLoading) {
      navigate('/');
    } else {
      getBorderCountryData();
    }
  }, [country, isLoading]);

  return (
    <MainContainer>
      <BackButtonContainer>
        <BackButton onClick={() => navigate(-1)}>
          <span style={{ marginRight: '2rem' }}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </span>
          Back
        </BackButton>
      </BackButtonContainer>
      <DetailsContainer>
        <FlagImage src={country.flags.png} />
        <InfoContainer>
          <CountryTitle>{country.name.common}</CountryTitle>
          <DetailsLeftContainer>
            <Stat title="Native Name:" bGap>
              {Object.values(country.name.nativeName)[0].official}
            </Stat>
            <Stat title="Population:" bGap>
              {new Intl.NumberFormat('en-EN').format(country.population)}
            </Stat>
            <Stat title="Region:" bGap>
              {country.region}
            </Stat>
            <Stat title="Sub Region:" bGap>
              {country.subregion}
            </Stat>
            <Stat title="Capital:" bGap>
              {country.capital}
            </Stat>
          </DetailsLeftContainer>
          <DetailsLRightContainer>
            <Stat title="Top level domain:" bGap>
              {country.tld[0]}
            </Stat>
            <Stat title="Currencies:" bGap>
              {Object.values(country.currencies)
                .map((obj) => obj.name)
                .join(', ')}
            </Stat>
            <Stat title="Languages:" bGap>
              {country.languages
                ? Object.values(country.languages).join(', ')
                : ''}
            </Stat>
          </DetailsLRightContainer>
          <BorderButtonsContainer>
            <h2>Border Countries:</h2>
            {isLoading ? (
              <Spinner />
            ) : borderCountryData && borderCountryData.length > 0 ? (
              borderCountryData.map((data, idx) => {
                return <Button key={idx} country={data} />;
              })
            ) : (
              <h2>No border countries</h2>
            )}
          </BorderButtonsContainer>
        </InfoContainer>
      </DetailsContainer>
    </MainContainer>
  );
};

export default DetailsPage;
