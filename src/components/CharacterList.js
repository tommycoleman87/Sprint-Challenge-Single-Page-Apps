import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [characters, setCharacters] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(data => {
      console.log(data.data.results);
      setCharacters(data.data.results);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

  return <section className='character-list grid-view'>
    {characters.map(character => {
      return <CharacterCard character={character} key={character.url}/>
    })}
    </section>

}
