import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { S } from "../footer/Footer_Styles";
import { useTranslation } from "react-i18next";

const socialItemsData = [
  {
    iconId: "instagram",
  },
  {
    iconId: "telegram",
  },
  {
    iconId: "vk",
  },
  {
    iconId: "linkedin",
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
              <S.SocialItem>
                <S.SocialLink>
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
