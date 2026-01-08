import React from 'react';
import {Icon} from "../icon/Icon";
import logoImg from "./../../../src/assets/images/logo1.png"
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={()=> {scroll.scrollToTop()}}>
            {/*<img src={logoImg} alt="" width={150} height={100}/>*/}
            <Icon iconId={'react'} width={"50"} height={"50"} />
        </a>
    );
};
