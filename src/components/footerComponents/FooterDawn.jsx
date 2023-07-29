import React from "react";
import s from "../../styles/footer.module.css"
import ULink from "../universalComponents/ULink";
import youTube from "../../img/youTube.svg"
import facebook from "../../img/facebook.svg"
import VK from "../../img/VK.svg"

const FooterDawn = () => {
    return(
        <div className="container">
            <div className={s.dawnWrapper}>
                <ULink style={s.name}>ВИННЫЙ БУТИК LE CORTE</ULink>
                <div className={s.telNum}>{"8 (812) 123-45-67"}</div>
                <div className={s.iconsWrapper}>
                    <a href="#">
                        <img src={youTube} alt="" />
                    </a>
                    <a href="#">
                        <img src={VK} alt="" />
                    </a>
                    <a href="#">
                        <img src={facebook} alt="" />
                    </a>
                </div>
                <ULink style={s.logo}>© LE-CORTE.RU</ULink>
            </div>
        </div>
    )
}
export default FooterDawn