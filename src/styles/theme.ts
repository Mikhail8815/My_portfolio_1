export const darkTheme = {
    colors: {
        primaryBg: "#1F1F20",
        secondaryBg: "#252527",
        accent: "#7572D5",
        font: "#FFFFFF",
        borderColor: "#4a4a4a",
        placeholder: "#495057",
        particles: "#FFFFFF"
    },
    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)",
        desktop: "screen and (min-width: 1140px)",
    },
    animations: {
        transition: ".2s ease-in-out",
    }
}

export const lightTheme = {
    colors: {
        primaryBg: "#FFFFFF",
        secondaryBg: "#F8F9FA",
        accent: "#7572D5", 
        font: "#1F1F20", 
        borderColor: "#dee2e6",
        placeholder: "#6c757d",
        particles: "#1F1F20" 
    },
    media: {
        tablet: "screen and (max-width: 768px)",
        mobile: "screen and (max-width: 576px)", 
        desktop: "screen and (min-width: 1140px)",
    },
    animations: {
        transition: ".2s ease-in-out",
    }
}

export const theme = darkTheme;
export type ThemeType = typeof darkTheme;
