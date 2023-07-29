import React from "react";

const UInput = ({style, children, value, getValue, type}) => {

    
    return (
        <input type={type} value={value} onChange={ (e)=> {if(getValue){getValue(e.target.value)}}} 
            className={style} placeholder={children}/>
    )
}

export default UInput