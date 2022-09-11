import { Fragment, useState, useContext } from 'react';
import { CountriesContext } from '../../store/countries.context';
import { ThemeContext } from '../../store/theme.context';
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
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  const { countryData, isLoading } = useContext(CountriesContext);
  const [filter, setFilter] = useState('');
  const [searchField, setSearchField] = useState('');
  const [searchedCountries, setSearchedCountries] = useState([]);

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

  const searchItems = (e) => {
    const searchFieldItems = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldItems);
    const searchedData = filteredCountries.filter((c) => {
      return c.name.common.toLocaleLowerCase().includes(searchFieldItems);
    });
    setSearchedCountries(searchedData);
  };

  const onFilterChange = (e) => {
    setFilter(e.value);
    setSearchField('')
  };

  return (
    <Fragment>
      <MainContainer>
        <SearchFilterContainer>
          <SearchBox
            onChangeHandler={searchItems}
            placeholder={'Search for a country...'}
            value={searchField}
          />
          <Filters
            isDark={darkMode}
            options={options}
            onChange={onFilterChange}
          />
        </SearchFilterContainer>
        <CountryContainer>
          {isLoading ? (
            <Spinner />
          ) : searchField.length === 0 ? (
            filteredCountries.map((country, idx) => {
              return <Card key={idx} country={country}/>;
            })
          ) : (
            searchedCountries.map((country, idx) => {
              return <Card key={idx} country={country}/>;
            })
          )}
        </CountryContainer>
      </MainContainer>
    </Fragment>
  );
};

export default HomePage;
