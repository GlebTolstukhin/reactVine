import React from "react";
import HeaderUp from "./headerComponents/HeaderUp.jsx"
import HeaderDawn from "./headerComponents/HeaderDawn.jsx"

const Header = () => {
    return (
        <header>
            <div className="container">
                <HeaderUp/>
                <HeaderDawn/>
            </div>
        </header>
    )
}
export default Header