import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CountriesContext = createContext([]);

export const CountriesProvider = ({ children }) => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

   const getData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,altSpellings,capital,population,region,flags,subregion,tld,currencies,languages,borders,cca3`
      );
      console.log("data from context", response.data);
      setCountryData(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error('There is a problem getting the data');
    }
  };

  useEffect(() => {    
    getData();
    
  }, []);

  const value = { countryData, isLoading };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
