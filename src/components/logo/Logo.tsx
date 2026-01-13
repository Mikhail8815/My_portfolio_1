import React from 'react';
import {Icon} from "../icon/Icon";
import logoImg from "../../assets/images/logo_1.png"
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={()=> {scroll.scrollToTop()}}>
            <img src={logoImg} alt="" width={60} height={30}/>
            {/*<Icon iconId={'logo'} width={"50"} height={"50"} />*/}
        </a>
    );
};
