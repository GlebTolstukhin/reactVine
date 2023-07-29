import React from "react";
import background from "../../img/introBG.png"
import UButton from "../universalComponents/UButton";
import s from "../../styles/introSection.module.css"

const IntroSection = ({scrollCard, scrollDegustation}) => {
    return (
        <div className={s.introSection} style={{backgroundImage: `url(${background})`}}>
            <div className="container">
                <div className={s.buttonFlex}>
                    <UButton style={s.introButton} doAny={scrollCard}>Винная карта</UButton>
                    <UButton style={s.introButton} doAny={scrollDegustation}>Дегустация</UButton>
                </div>
            </div>
        </div>
    )
}

export default IntroSection