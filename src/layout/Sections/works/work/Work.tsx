import React from "react";
import { Link } from "../../../../components/Link";
import { S } from "../Works_styles";
import { useTranslation } from "../../../../hooks/useTranslation";

type WorkPropsType = {
    titleKey: string;
    descriptionKey: string;
    src: string;
    demoLink?: string;
    codeLink?: string;
};

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
  const { t } = useTranslation();

  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={props.src} alt="" />
        <S.ShowProjectButton onClick={() => window.open(props.demoLink || "#", '_blank')}>
          {t("sections:works.viewProject")}
        </S.ShowProjectButton>
      </S.ImageWrapper>
      <S.Description>
          <S.Title>{t(props.titleKey)}</S.Title>
          <S.Text>{t(props.descriptionKey)}</S.Text>
        <Link active href={props.demoLink || "#"} target="_blank" rel="noopener noreferrer">
          {t("sections:works.demo")}
        </Link>
        <Link href={props.codeLink || "#"} target="_blank" rel="noopener noreferrer">{t("sections:works.code")}</Link>
      </S.Description>
    </S.Work>
  );
};
