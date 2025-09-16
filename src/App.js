import React from 'react';
import { searchPokemon } from './api';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/Searchbar';


function App() {

    // const onSearchHandler = async (pokemon) =>{
    //   const result = await searchPokemon(pokemon)
    //   console.log("Pokemon:", result)
    // }
  return (
    <div>
      <NavBar/>
      <SearchBar
        // onSearch={onSearchHandler}
      />
      <div className="App">
      
    </div>
    </div>
    
  );
}

export default App;
