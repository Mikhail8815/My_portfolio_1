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
        primaryBg: "#FDFDF6",          
        secondaryBg: "#F5F5ED",         
        accent: "#7572D5",
        font: "#2C2C2C",               
        borderColor: "#D6D6C2",
        placeholder: "#7A7A6A",         
        particles: "#2C2C2C"
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

export type ThemeType = typeof darkTheme;
