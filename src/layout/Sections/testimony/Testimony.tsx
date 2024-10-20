import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../Skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <IconWrapper>
                    <Icon iconId={"quote"}/>
                </IconWrapper>
                <Slider />
            </FlexWrapper>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
   min-height: 100vh;
    background-color: rgba(106,232,130,0.83);
    
    ${IconWrapper} {
        margin: 40px 0 52px;
    }
`
