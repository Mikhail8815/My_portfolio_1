import React from "react";
import { S } from "../HeaderMenu_Styles";
import { useTranslation } from "react-i18next";

const menuItems = [
  {
    titleKey: "header.home",
    href: "home",
  },
  {
    titleKey: "header.about",
    href: "about",
  },
  {
    titleKey: "header.skills",
    href: "skills",
  },
  {
    titleKey: "header.works",
    href: "works",
  },
  {
    titleKey: "header.contact",
    href: "contact",
  },
];

export const Menu: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ul>
      {menuItems.map((item, index) => {
        const title = t(item.titleKey);

        return (
          <S.MenuItem key={index}>
            <S.NavLink
              to={item.href}
              smooth={true}
              activeClass="active"
              spy={true}
              offset={15}
            >
              {title}
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
              <S.Mask>
                <span>{title}</span>
              </S.Mask>
            </S.NavLink>
          </S.MenuItem>
        );
      })}
    </ul>
  );
};

export default Menu;
