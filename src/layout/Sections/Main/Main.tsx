import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/photo.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi There</span>
                    <h2>I am Mikhail Horlenka</h2>
                    <MainTitle>A Web Developer</MainTitle>
                </div>
                <Photo src={photo} alt="Photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`
const StyledMain = styled.div`
 min-height: 100vh;
    background-color: rgba(120,79,20,0.83);
`
const MainTitle = styled.h1`

`
const Name = styled.h2`

`

