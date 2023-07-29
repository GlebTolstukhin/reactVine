import React from "react";
import s from "../styles/collections.module.css"
import spain from "../img/spane.png"
import france from "../img/france.png"
import latin from "../img/latin.png"
import kavkaz from "../img/kavkaz.png"


const Collections = () => {
    return (
        <div className={s.collections}>
            <div className="container">
                <div className={s.title}>Наши сомелье составили для Вас коллекции лучих вин из каждого региона.</div>
                <div className={s.wrapper}>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={spain}  alt="" />
                        </div>
                        <div className={s.text}>Вина Испании</div>
                    </div>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={france}  alt="" />
                        </div>
                        <div className={s.text}>Вина Франции</div>
                    </div>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={latin}  alt="" />
                        </div>
                        <div className={s.text}>Вина Литинской Америки</div>
                    </div>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={kavkaz}  alt="" />
                        </div>
                        <div className={s.text}>Вина Кавказа</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Collections