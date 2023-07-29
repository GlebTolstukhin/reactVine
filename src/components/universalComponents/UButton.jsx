import React from "react";

const UButton = ({disabled, doAny, children, style}) => {
    

    return (
        <button disabled={disabled} className={style} onClick={()=>{if(doAny){doAny()}}}>
            {children}
        </button>
    )
}
export default UButton