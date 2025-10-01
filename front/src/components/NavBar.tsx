import React from 'react';
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className={"NavBar"}>
            <Link to={"/"}>
                <img src="" alt="Logo"/>
            </Link>
        </div>
    );
};

export default NavBar;