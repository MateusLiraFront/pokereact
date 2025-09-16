import React, {useEffect, useState} from 'react';
import { getPokemons, getPokemonData } from './api';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/Searchbar';
import Pokedex from './components/Pokedex';


function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map( async (pokemon) => {
        return await getPokemonData(pokemon.url)
      } );
      // const result = await getPokemons()
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    }catch(error){
      console.log("fetch Error: ", error)
    }
  }

  useEffect(() => {
    console.log("Carregou")
    fetchPokemons();
  }, [])
   
  return (
    <div>
      <NavBar/>
      <SearchBar/>
      <Pokedex pokemons = {pokemons} loading = {loading}/>

      <div className="App">
      </div>
    </div>
  );
}

export default App;
