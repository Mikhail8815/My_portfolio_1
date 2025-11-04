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
    href: "https://www.linkedin.com/in/%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB-%D0%B3%D0%BE%D1%80%D0%BB%D0%B5%D0%BD%D0%BA%D0%BE-73569b35a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    ariaLabel: "LinkedIn",
  },
  {
    iconId: "github",
    href: "https://github.com/Mikhail8815",
    ariaLabel: "GitHub",
  },
];

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.Footer>
      <FlexWrapper direction={"column"} align={"center"}>
        <S.Name>Mikhail</S.Name>
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
