import React from 'react';
import {S} from "../HeaderMenu_Styles"
import Menu from "../menu/Menu";

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopap isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu menuItems={props.menuItems} />
            </S.MobileMenuPopap>
        </S.MobileMenu>
    );
}

