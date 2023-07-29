import React, { useState } from "react";
import s from "../../styles/thirdSection.module.css"
import UButton from "../universalComponents/UButton";
import redVine from "../../img/redVine.png"
import leftBottles from "../../img/leftBottles.png"
import rightBottles from "../../img/rightBottles.png"
import LearnMore from "./LearnMore";

const ThirdSection = React.forwardRef((props, ref) => {

    let [learnCount, setLearnCount] = useState(0)
    const learnMore = () => {
        if (learnCount === 0){
            setLearnCount(1)
        }
        else {
            setLearnCount(0)
        }
        
        
    }

    return(
        <section className={s.section}>
            <div className="container">
                <div ref={ref} className={s.sectionWrapper}>
                    <div className={s.leftColumn}>
                        <h3 className={s.newes}>Новинки коллекций</h3>
                        <h2 className={s.vineName}>Март 1980 Урожай Марселя</h2>
                        <div className={s.line}></div>
                        <div className={s.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum.
                            Felis adipiscing morbi sodales ac. 
                        </div>
                        <div className={s.vineWrapper}>
                            <div className={s.date}>1980</div>
                            <div>
                                <div className={s.vineText}>Colli Euganei Bianco Ca' Lustra 1980</div>
                                <div className={s.vineSameText}>Красочная бутылка вина из Марселя</div>
                            </div>
                        </div>
                        <div className={s.wrapperSplitter}></div>
                        <div className={s.vineWrapper}>
                            <div className={s.date}>1980</div>
                            <div>
                                <div className={s.vineText}>Colli Euganei Bianco Ca' Lustra 1980</div>
                                <div className={s.vineSameText}>Красочная бутылка вина из Марселя</div>
                            </div>
                        </div>
                        <div className={s.wrapperSplitter}></div>
                        <div className={s.vineWrapper}>
                            <div className={s.date}>1980</div>
                            <div>
                                <div className={s.vineText}>Colli Euganei Bianco Ca' Lustra 1980</div>
                                <div className={s.vineSameText}>Красочная бутылка вина из Марселя</div>
                            </div>
                        </div>
                        <div className={s.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum.
                            Felis adipiscing morbi sodales ac. 
                        </div>
                        <UButton doAny={learnMore} style={s.button}>узнать подробнее</UButton>
                    </div>
                    <div className={s.rightColumn}>
                        <img style={{marginBottom: "30px"}} src={redVine} alt="" />
                        <div className={s.imgFlex}>
                            <img style={{marginRight: "30px"}} src={leftBottles} alt="" />
                            <img src={rightBottles} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {learnCount === 1 ?
            <LearnMore></LearnMore>
            : ""}

        </section>
    )
})
export default ThirdSection