import React from 'react';
import styled from 'styled-components';
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./HeaderMenu/HeaderMenu";

const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"];
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={menuItems}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: rgba(31, 31, 31, 0.9);
    padding: 20px 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99999;
`
