import React from "react";
import Nav from "./Nav";
import headerTabs from "./headerTabs"

const Header = () =>{

    return(
        <header className="header">
            <div className="header-title">
                <h2>Notes +</h2>
            </div>
            <Nav />
            <headerTabs />
        </header>
    )
}

export default Header