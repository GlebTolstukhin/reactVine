import React from "react";
import s from "../../styles/header.module.css"

const Header = () => {
    return (
        <div className={s.headerUp}>
            <div>Новокузнечный переулок 4/1</div>
            <div>{"8 (812) 123-45-67"}</div>
        </div>
    )
}
export default Header