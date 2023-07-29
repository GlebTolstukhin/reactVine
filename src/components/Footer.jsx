import React from "react";
import FooterUp from "./footerComponents/FooterUp";
import s from "../styles/footer.module.css"
import FooterDawn from "./footerComponents/FooterDawn";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <FooterUp></FooterUp>
            <FooterDawn></FooterDawn>
        </footer>
    )
}
export default Footer