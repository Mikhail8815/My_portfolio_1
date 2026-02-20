import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "../footer/Footer_Styles";
import { useTranslation } from "react-i18next";

const socialItemsData = [
  {
    iconId: "instagram",
    href: "https://instagram.com/mgorlenko?igsh=MXg0dXA2Mmx4Ymphbg==",
    ariaLabel: "Instagram",
  },
  {
    iconId: "telegram",
    href: "https://t.me/mikhail8815",
    ariaLabel: "Telegram",
  },
  {
    iconId: "vk",
    href: "https://vk.com/energizer1505",
    ariaLabel: "VKontakte",
  },
  {
    iconId: "linkedin",
    href: "https://www.linkedin.com/in/mihail-gorlenko-3039093b0/",
    ariaLabel: "LinkedIn",
  },
  {
    iconId: "githubmini",
    href: "https://github.com/Mikhail8815",
    ariaLabel: "GitHub",
  },
];

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.ContactInfo>
          <a href="mailto:gorlenko.mikhail@gmail.com">
            <Icon iconId="email" width="16" height="16" />
            gorlenko.mikhail@gmail.com
          </a>
          <a href="tel:+375296820881">
            <Icon iconId="phone" width="16" height="16" />
            +375 (29) 328-72-48
          </a>
        </S.ContactInfo>
        <S.SocialList>
          {socialItemsData.map((item, i) => {
            return (
              <S.SocialItem key={i}>
                <S.SocialLink
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                >
                  <Icon
                    iconId={item.iconId}
                    width={"21"}
                    height={"21"}
                    viewBox={"0 0 21 21"}
                    key={i}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>{t("footer.copyright")}</S.Copyright>
      </FlexWrapper>
    </S.Footer>
  );
};
