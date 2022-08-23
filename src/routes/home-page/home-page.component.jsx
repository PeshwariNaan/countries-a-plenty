import { Fragment, useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../store/theme.context';
import axios from 'axios';
import Select from 'react-select';
import SearchBox from '../../components/search-box/search-box.component';
import Filters from '../../components/filter-dropdown/filter-dropdown.component';
import Card from '../../components/card/card.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  CountryContainer,
  SearchFilterContainer,
  MainContainer,
} from './home-page.styles';



const HomePage = () => {
  const [countryData, setCountryData] = useState([]);
  const [filter, setFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,altSpellings,capital,population,region,flags,subregion,tld,currencies,languages,borders,cca3`
      );
      console.log(response.data);
      setCountryData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('There is a problem in getting the data');
    }
  };

  const options = [
    { value: 'all', label: 'All' },
    { value: 'africa', label: 'Africa' },
    { value: 'asia', label: 'Asia' },
    { value: 'americas', label: 'Americas' },
    { value: 'europe', label: 'Europe' },
    { value: 'oceana', label: 'Oceana' },
  ];

  useEffect(() => {
    getData();
  }, []);

  const onSearchChange = () => {};

  return (
    <Fragment>
      <MainContainer isDark={darkMode}>
        <SearchFilterContainer isDark={darkMode}>
          <SearchBox
            isDark={darkMode}
            onChangeHandler={onSearchChange}
            placeholder={'Search for a country...'}
          />
          <Filters options={options} isDark={darkMode} />
        </SearchFilterContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          <CountryContainer>
            {countryData.map((country, idx) => {
              return <Card key={idx} country={country} isDark={darkMode} />;
            })}
          </CountryContainer>
        )}
      </MainContainer>
    </Fragment>
  );
};

export default HomePage;
