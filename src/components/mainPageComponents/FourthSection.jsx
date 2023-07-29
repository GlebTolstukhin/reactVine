import React, { useState } from "react";
import s from "../../styles/fourthSection.module.css"
import UInput from "../universalComponents/UInput";
import UButton from "../universalComponents/UButton";
import grape from "../../img/grape.png"
import tank from "../../img/tank.png"
import USelect from "../universalComponents/USelict";
import Degustation from "./Degustation";




const FourthSection = React.forwardRef((props, ref) => {
    
    const [name, setName] = useState("")
    const [tel, setTel] = useState("")
    const [adress, setAdress] = useState("")
    const [regTo, setRegTo] = useState("записаться")
    const [isDisabled, setIsDisabled] = useState(true)

    
    let options = [{value: "Невыский пр-т, д. 9", text: "Бутик на Невском"}, {value: "Марата, д. 17", text: "Бутик на Марата"}]

    const setCreate = (value) => {
        setIsDisabled(false)
        setAdress(value)
    }
    
    

    const createClient = ()=> {
        if (regTo === "записаться" ) {
            setRegTo("отменить запись")
        }
        else {
            setRegTo("записаться")
        }
    }
   


    return (
        <section ref={ref} className={s.section}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s.line}></div>
                    <div className={s.text}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Feugiat enim tortor in hac id imperdiet adipiscing.
                        Pellentesque nisi, mi sit non sit sed fermentum. 
                    </div>
                    <div className={s.inputWrapper}>
                        <UInput type={"text"} value={name} getValue={setName} style={s.upInput}>Имя</UInput>
                        <UInput type={"tel"} value={tel} getValue={setTel} style={s.upInput}>Телефон</UInput>
                    </div>
                    <USelect style={s.dawnInput} options={options} optionStyle={s.option} getValue={setCreate} value={adress}></USelect>
                    <UButton disabled={isDisabled} doAny={createClient} style={s.button}>{regTo}</UButton>
                    <h2 className={s.title}>Запись на дегустацию</h2>
                    <img className={s.grape} src={grape} alt="" />
                    <img className={s.tank} src={tank} alt="" />
                </div>
                { regTo === "отменить запись" ?
                    <Degustation name={name} adress={adress}></Degustation>
                    : ""}
            </div>
        </section>
    )
})
export default FourthSection