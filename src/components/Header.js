import React from "react";
import Nav from "./Nav";
import HeaderTabs from "./HeaderTabs";

const Header = () =>{

    return(
        <header className="header">
            <div className="header-title">
                <h2>Notes +</h2>
            </div>
            <Nav />
            <HeaderTabs />
        </header>
    )
}

export default Header