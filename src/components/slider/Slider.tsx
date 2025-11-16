import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./../../styles/slider.css";
import { S } from "../slider/Slider_Styles";
import { useTranslation } from "../../hooks/useTranslation";
import { Icon } from "../icon/Icon";

type SlidePropsType = {
  title: string;
  text: string;
  iconId: string;
};

const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
      <Icon iconId={props.iconId} />
      <S.Title>{props.title}</S.Title>
      <S.Text>{props.text}</S.Text>
    </S.Slide>
  );
};

export const Slider = () => {
  const { t } = useTranslation();

  const items = [
    <Slide
      iconId="clean-code"
      title={t("sections:principles.cleanCode.title")}
      text={t("sections:principles.cleanCode.text")}
    />,
    <Slide
      iconId="responsive"
      title={t("sections:principles.responsive.title")}
      text={t("sections:principles.responsive.text")}
    />,
    <Slide
      iconId="tech-stack"
      title={t("sections:principles.techStack.title")}
      text={t("sections:principles.techStack.text")}
    />,
  ];

  return (
    <S.Slider >
      <AliceCarousel mouseTracking items={items} />
    </S.Slider>
  );
};
