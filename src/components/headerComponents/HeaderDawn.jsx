import React from "react";
import { NavLink } from "react-router-dom";
import s from "../../styles/header.module.css"


const Header = () => {
    return (
        <div className={s.headerDawn}>
                <div  className={s.headerButton}>
                    <NavLink  to="/catalog" >Каталог</NavLink>
                </div>
                <div className={s.splitter}></div>
                <div  className={s.headerButton}>
                    <NavLink  to="/delivery" >Доствака</NavLink>
                </div>
                <div className={s.splitter}></div>
                <div  className={s.headerButton}>
                    <NavLink  to="/collections" >Коллекции</NavLink>
                </div>
                <div className={s.splitter}></div>
                <div  className={s.headerButton}>
                    <NavLink  to="/main" >Главная</NavLink>
                </div>
            </div>
    )
}
export default Header