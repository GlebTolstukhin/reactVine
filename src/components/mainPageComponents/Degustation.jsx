import React from "react";
import s from "../../styles/degustation.module.css"

const Degustation = ({name, adress}) => {
    return (
        <div className={s.degustation}>
            <div className={s.wrapper}>
                Здравствуйте, {name.toUpperCase()}! Благодарим вас за запись на винную негустацию по адресу: {adress},
                для уточнения даты и формата мероприятия, пожалйста, свяжитесь с нами по телефону: {"8 (812) 123-45-67"}. <br />
                С уважением, Ваш LE-CORTE.
            </div>
        </div>
    )
}
export default Degustation