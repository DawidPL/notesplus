import React from "react";
import Nav from "./Nav";


const Header = () =>{

    return(
        <header className="header">
            <div className="header-title">
                <h2>Notes +</h2>
            </div>
            <Nav />
            
        </header>
    )
}

export default Header