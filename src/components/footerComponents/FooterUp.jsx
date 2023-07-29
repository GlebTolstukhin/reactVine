import React from "react";
import s from "../../styles/footer.module.css"
import ULink from "../universalComponents/ULink";

const FooterUp = () => {
    return (
        <div className="container">
            <div className={s.upWrapper}>
                <ULink style={s.link}>Главная</ULink>
                <ULink style={s.link}>Каталог</ULink>
                <ULink style={s.link}>Поставщики</ULink>
                <ULink style={s.link}>Коллекции</ULink>
                <ULink style={s.link}>Дегустация</ULink>
                <ULink style={s.link}>Коллекция 2020</ULink>
                <ULink style={s.link}>Контакты</ULink>
            </div>
        </div>
    )
}
export default FooterUp