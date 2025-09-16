import React from "react";

const Pokemon = (props) => {
    const {pokemon} = props
    return(
        <div>
            {pokemon.name}
            {/* <h1> Pokemon </h1> */}
        </div>
    )
};

export default Pokemon;