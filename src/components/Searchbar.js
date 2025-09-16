import React, {useState} from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
    const [search, setSearch] = useState("Metacross")
    const [pokemon, setPokemon] = useState()
   
    const onChangeHandler = (e) => {
        console.log("pokemon", e.target.value)
        setSearch(e.target.value)
    }
    
    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    
    return(
       
        <div className="searchbar-container">
            <div className="column">
                <div className="searchbar campo row">
                    <div className="searchbar">
                        <input placeholder="Buscar Pokemon" onChange={onChangeHandler}></input>
                        
                    </div>
                    <div className="search-btn">
                        <button onClick={onButtonClickHandler}> Buscar </button>
                    </div>
                </div>
           
           
            {pokemon ? (
                <div>
                    <h1>Pokemon: </h1>
                    <div> <strong> Nome: </strong> {pokemon.name}</div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div> <strong> Peso: </strong>{pokemon.weight}</div>
                    <div> <strong>Tipos:</strong>
                        <ul>
                            {pokemon.types.map((typeObj, index) => (
                                <li key={index}>{typeObj.type.name}</li>
                            ))}
                        </ul></div>
                    <div><strong>Status:</strong>
                        <ul>
                            {pokemon.stats.map((statObj, index) => (
                                <li key={index}>
                                    {statObj.stat.name}: {statObj.base_stat}
                                </li>
                            ))}
                        </ul></div>
                </div>
            ) : null}
           
            </div>
        </div>
    )
};

export default SearchBar;