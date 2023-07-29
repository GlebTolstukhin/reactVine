import React from "react";

const ULink = ({style, children}) => {
    return(
        <a className={style} href="#">{children}</a>
    )
}
export default ULink