import React, {useRef} from "react";
import IntroSection from "./mainPageComponents/IntroSection";
import SecondSection from "./mainPageComponents/SecondSection";
import ThirdSection from "./mainPageComponents/ThirdSection";
import FourthSection from "./mainPageComponents/FourthSection";

const MainPage = () => {
    const degustation = useRef()
    const card = useRef()

    const scrollDegustation = () => {  
            degustation.current.scrollIntoView({behavior: "smooth"})
    }
    const scrollCard = () => {  
        card.current.scrollIntoView({behavior: "smooth"})
    }
    

    return (
        <div>
            <IntroSection scrollCard={scrollCard} scrollDegustation={scrollDegustation}/>
            <SecondSection />
            <ThirdSection ref={card}/>
            <FourthSection  ref={degustation}/>
        </div>
    )
}
export default MainPage