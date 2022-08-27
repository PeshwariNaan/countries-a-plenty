import { Fragment, useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../store/theme.context';
import { CountriesContext } from '../../store/countries.context';
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
 
  const [filter, setFilter] = useState('');
  const [searchField, setSearchField] = useState('');
  const [searchedCountries, setSearchedCountries] = useState([]);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const { countryData, isLoading } = useContext(CountriesContext);


  const options = [
    { value: '', label: 'All' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Americas', label: 'Americas' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
  ];


  const filteredCountries = !filter
    ? countryData
    : countryData.filter((country) => {
        return filter === country.region;
      });


  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onFilterChange = (e) => {
    setFilter(e.value);
    console.log(filter);
  };

  return (
    <Fragment>
      <MainContainer isDark={darkMode}>
        <SearchFilterContainer isDark={darkMode}>
          <SearchBox
            isDark={darkMode}
            onChangeHandler={onSearchChange}
            placeholder={'Search for a country...'}
          />
          <Filters
            options={options}
            isDark={darkMode}
            onChange={onFilterChange}
          />
        </SearchFilterContainer>
        <CountryContainer>
          {isLoading ? (
            <Spinner />
          ) : (
            filteredCountries.map((country, idx) => {
              return <Card key={idx} country={country} isDark={darkMode} />;
            })
          )}
        </CountryContainer>
      </MainContainer>
    </Fragment>
  );
};

export default HomePage;
