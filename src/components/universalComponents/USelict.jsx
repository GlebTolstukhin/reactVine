import React from "react";

const USelect = ({style, getValue, type, options, optionStyle}) => {
    return (
        <select type={type}  onChange={ (e)=> {if(getValue){getValue(e.target.value)}}} 
            className={style}>Выберите бутик
                <option disabled selected style={{display: "none"}}>Выберите бутик</option>
                {options.map(option => <option value={option.value} className={optionStyle}>{option.text}</option>)}
        </select>
    )
}
export default USelect