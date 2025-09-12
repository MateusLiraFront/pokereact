import React, {useState} from "react";


const SearchBar = () => {
    const [search, setSearch] = useState("Metacross")

    const onChangeHandler = (e) => {
        console.log("pokemon", e.target.value)
        setSearch(e.target.value)
    }

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar Pokemon" onChange={onChangeHandler}></input>
                <h1>Pokemon: </h1>{search}
            </div>
        </div>
    )
};

export default SearchBar;