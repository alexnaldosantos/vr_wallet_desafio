import { DefaultTheme, useTheme } from 'styled-components/native';

export const WalletFonts = {
    caption: 'PTSans-Caption',
    regular: 'PTSans-Regular'
}

const defaultFontWeight = '400';

export const WalletTheme: DefaultTheme = {
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
        defaultFont: WalletFonts.regular,
        defaultFontWeight: defaultFontWeight,
        defaultFontSize: '14px',
        defaultLineHeight: '16px',
        h1: {
            fontFamily: WalletFonts.caption,
            fontSize: '28px',
            lineHeight: '32px',
            fontWeight: defaultFontWeight
        },
        h2: {
            fontFamily: WalletFonts.caption,
            fontSize: '26px',
            lineHeight: '28px',
            fontWeight: defaultFontWeight
        },
        h3: {
            fontFamily: WalletFonts.caption,
            fontSize: '22px',
            lineHeight: '24px',
            fontWeight: defaultFontWeight
        },
        h4: {
            fontFamily: WalletFonts.regular,
            fontSize: '20px',
            lineHeight: '22px',
            fontWeight: defaultFontWeight
        },
        h5: {
            fontFamily: WalletFonts.regular,
            fontSize: '18px',
            lineHeight: '20px',
            fontWeight: defaultFontWeight
        },
        p: {
            fontFamily: WalletFonts.regular,
            fontSize: '16px',
            lineHeight: '18px',
            fontWeight: defaultFontWeight
        },
        small: {
            fontFamily: WalletFonts.regular,
            fontSize: '14px',
            lineHeight: '16px',
            fontWeight: defaultFontWeight
        }
    }
};

/* only for centralized imports */
export { useTheme };