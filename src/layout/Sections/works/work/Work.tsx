import React from "react";
import { Link } from "../../../../components/Link";
import { S } from "../Works_styles";
import { useTranslation } from "../../../../hooks/useTranslation";

type WorkPropsType = {
  title: string;
  text: string;
  src: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  const { t } = useTranslation();

  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <S.ShowProjectButton>
          {t("sections:works.viewProject")}
        </S.ShowProjectButton>
      </S.ImageWrapper>
      <S.Description>
        <S.Title>{props.title}</S.Title>
        <S.Text>{props.text}</S.Text>
        <Link active href={"#"}>
          {t("sections:works.demo")}
        </Link>
        <Link href={"#"}>{t("sections:works.code")}</Link>
      </S.Description>
    </S.Work>
  );
};
