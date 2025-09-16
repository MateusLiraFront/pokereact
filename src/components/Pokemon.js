import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props
    return(
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            {pokemon.name}
            {/* <h1> Pokemon </h1> */}
        </div>
    )
};

export default Pokemon;