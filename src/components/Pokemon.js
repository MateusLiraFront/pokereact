import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props
    return(
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <div className="card-body">
                <div clalssName="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div clalssName="card-bot">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                    </div>
                </div>
            </div>
            {pokemon.name}
            {/* <h1> Pokemon </h1> */}
        </div>
    )
};

export default Pokemon;