import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu";
import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu";
import { S } from "./Header_Styles";
import { ThemeToggle } from "../../components/ThemeToggle/ThemeToggle";
import { LanguageToggle } from "../../components/LanguageToggle/LanguageToggle";

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 800;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <FlexWrapper justify="space-between" align={"center"}>
          <S.LeftGroup>
            <Logo />
            <S.ControlsWrapper>
              <LanguageToggle />
              <ThemeToggle />
            </S.ControlsWrapper>
          </S.LeftGroup>

          <S.RightGroup>
            {width >= breakpoint ? <DesktopMenu /> : <MobileMenu />}
          </S.RightGroup>
        </FlexWrapper>
      </Container>
    </S.Header>
  );
};
