import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primaryBg: string;
      secondaryBg: string;
      accent: string;
      font: string;
      borderColor: string;
      placeholder: string;
      particles: string;
    };
    media: {
      tablet: string;
      mobile: string;
      desktop: string;
    };
    animations: {
      transition: string;
    };
  }
}