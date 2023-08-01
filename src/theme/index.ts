import { useTheme } from "styled-components";

export type Colors = {
    greenLight: string;
    blueDark: string;
    blueLight: string;
    greyLight: string;
    black: string;
    greyDark: string;
    grey: string;
    red: string;
    yellow: string;
    green: string;
    white: string;
    default: string;
};

interface Theme {
    colors: Colors, text: {
        defaultColor: string,
        defaultFont: string,
        defaultFontWeight: number,
        defaultFontSize: string
    }
}

export const DefaultTheme: Theme = {
    colors: {
        greenLight: '#A5FF32',
        blueDark: '#142995',
        blueLight: '#12C2E9',
        greyLight: '#EEEEEE',
        black: '#111111',
        greyDark: '#3F3F3F',
        grey: '#BBBBBB',
        red: '#FF0000',
        yellow: '#FFB800',
        green: '#1E9400',
        white: '#FFFFFF',
        default: '#FFFFFF',
    },
    text: {
        defaultColor: '#FFFFFF',
        defaultFont: 'PTSans-Regular',
        defaultFontWeight: 400,
        defaultFontSize: '14px'
    }
};

/* only for centralized imports */
export { useTheme };