import React from "react";
import s from "../styles/delivery.module.css"

const Delivery = () => {
    return (
        <div className={s.delivery}>
            <div className="container">
                <h2 className={s.title}>Наша сулжба доставки</h2>
                <div className={s.wrapper}>
                    Наша служба доставки доставит любое вино из нашего ассортимената в любой район г. Санкт-Петербург.
                    Для выбора и оформления заказа позвоните на наш номер отдела доставки 8-800-555-35-55.
                    Оплата производится только при получени. <br /> <br />
                    Важно: для получения заказа Вам необходимо будет предьявить документ, подтверждающий Ваш возраст.
                </div>
            </div>
        </div>
    )
}
export default Delivery