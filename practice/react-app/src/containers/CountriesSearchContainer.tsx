import { useState } from 'react';
import { useCountrySearch } from '../hooks/useCountrySearch';
import { sortCountries } from '../utils/sortCountries';

import CountryList from '../components/CountryList';
import { NameField } from '../components/NameField';
import SortSelect from '../components/SortSelect';
import SearchTitle from '../components/SearchTitle';

export function CountriesSearchContainer() {
  const [name, setName] = useState('');
  const countries = useCountrySearch(name);
  const [sortOption, setSortOption] = useState('');
  const sortedCountries = sortCountries(countries, sortOption);

  console.log(countries);

  return (
    <div>
      <SearchTitle />
      <form className="space-x-4 flex items-end justify-center">
        <NameField name={name} setName={setName} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <CountryList countries={sortedCountries} />
    </div>
  );
}

export default CountriesSearchContainer;
