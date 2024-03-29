import 'styled-components/native'
import { Colors } from "./colors";

declare module 'styled-components/native' {
    export interface DefaultTheme {
        colors: Colors,
        view: {
            backgroundColor: string,
            animatedColor: string,
        },
        toolbar: {
            color: string,
            titleColor: string
        },
        button: {
            color: string,
            textColor: string,
            disabledColor: string,
            disabledTextColor: string
        },
        input: {
            fontFamily: string,
            fontSize: string,
            lineHeight: string,
            fontWeight: string
            backgroundColor: string,
            textColor: string,
            placeHolderColor: string
        },
        text: {
            defaultColor: string,
            defaultFont: string,
            defaultFontWeight: string,
            defaultFontSize: string,
            defaultLineHeight: string,
            h1: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            h2: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            h3: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            h4: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            h5: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            p: {
                fontFamily: string,
                fontSize: string,
                lineHeight: string,
                fontWeight: string
            },
            small: {
                fontFamily: string;
                fontSize: string;
                lineHeight: string,
                fontWeight: string
            }
        }
    }
}