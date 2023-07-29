import React from "react";
import s from "../styles/catalog.module.css"
import whiteVine from "../img/whiteVine.png"
import redVines from "../img/redVines.png"
import pinkVine from "../img/pinkVine.png"


const Catalog = () => {
    return (
        <div className={s.catalog}>
            <div className="container">
                <h2 className={s.title}>Лучшие вина со всех концеов света</h2>
                <div className={s.wrapper}>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={whiteVine}  alt="" />
                        </div>
                        <div className={s.text}>Белые вина</div>
                    </div>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={redVines}  alt="" />
                        </div>
                        <div className={s.text}>Красные вина</div>
                    </div>
                    <div className={s.vineType}>
                        <div className={s.vine}>
                            <img className={s.img} src={pinkVine}  alt="" />
                        </div>
                        <div className={s.text}>Розовые вина</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Catalog