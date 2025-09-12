import React from "react";

const NavBar = () =>{
        const logo = "https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png"
    return(
        <nav>
            <div>
                <img alt="Pokedex-logo"
                    src = {logo}
                    className="navbar-img"  >
                </img>
            </div>
        </nav>
        
    )
}

export default NavBar;