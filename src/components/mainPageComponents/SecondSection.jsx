import React from "react";
import s from "../../styles/secondSection.module.css"
import glass from "../../img/glass.png"
const SecondSection = ()=> {
    return (
        <div className={s.secondSection}>
            <div className="container">
                <div className={s.sectonWrapper}>
                    <h2 className={s.title}>Лучший вкус, это вкус долголетнего вина</h2>
                    <div className={s.line}></div>
                    <div className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Feugiat enim tortor in hac id imperdiet adipiscing.
                        Pellentesque nisi, mi sit non sit sed fermentum.
                        Felis adipiscing morbi sodales ac. Mauris dictumst risus pulvinar blandit elit.
                        Vestibulum quam ultrices nascetur et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum.
                        Lectus auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci ultrices sed.
                        Viverra cras sapien, pellentesque viverra malesuada. Tellus dolor, eget vitae dignissim molestie eget sit duis.
                        Vitae dui vel pretium euismod diam. Pellentesque amet, lacus, amet, quis risus.
                        Pellentesque scelerisque nunc, orci aliquam quis.
                    </div>
                    <img className={s.img} src={glass} alt="" />
                </div>
            </div>
        </div>
    )
}
export default SecondSection