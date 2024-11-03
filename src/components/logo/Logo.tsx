import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo = () => {
    return (
        <a onClick={()=> {scroll.scrollToTop()}}>
            <Icon iconId={'react'} width={"70"} height={"70"} />
        </a>
    );
};
