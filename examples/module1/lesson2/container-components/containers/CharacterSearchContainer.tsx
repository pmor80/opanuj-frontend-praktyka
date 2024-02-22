import { useState } from 'react';
import CharacterList from '../components/CharacterList';
import SearchForm from '../components/SearchForm';
import SearchTitle from '../components/SearchTitle';
import { useCharacterSearch } from '../hooks/useCharacterSearch';
import { sortCharacters } from '../utils/sortCharacters';

function CharacterSearchContainer() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [sortOption, setSortOption] = useState('');

  const characters = useCharacterSearch(name, gender);
  const sortedCharacters = sortCharacters(characters, sortOption);

  return (
    <>
      <div className="pt-24" />
      <SearchTitle/>
      <SearchForm
        name={name}
        setName={setName}
        gender={gender}
        setGender={setGender}
        sortOption={sortOption}
        setSortOption={setSortOption}
      />
      <div className="pt-12" />
      <CharacterList characters={sortedCharacters} /> </>
  );
}

export default CharacterSearchContainer;
