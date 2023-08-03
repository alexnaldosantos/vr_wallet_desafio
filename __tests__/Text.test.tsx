import 'react-native';
import React from 'react'
import { render } from '@testing-library/react-native';
import 'jest-styled-components'
import { Text, H1, H2, H3, H4, H5, P, SMALL } from '../src/components';
import { describe, test, expect } from '@jest/globals';
import { WalletTheme } from "../src/theme";
import { ThemeProvider } from "styled-components/native";

describe('Test Text components', () => {
    test('Text should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <Text>Wallet Test</Text>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe(WalletTheme.text.defaultColor);
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.defaultFont);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.defaultFontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.defaultLineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.defaultFontWeight);
    });
    test('H1 should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <H1 color='black'>Wallet Test</H1>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('black');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.h1.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.h1.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.h1.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.h1.fontWeight);
    });
    test('H2 should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <H2 color='red'>Wallet Test</H2>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('red');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.h2.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.h2.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.h2.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.h2.fontWeight);
    });
    test('H3 should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <H3 color='green'>Wallet Test</H3>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('green');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.h3.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.h3.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.h3.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.h3.fontWeight);
    });
    test('H4 should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <H4 color='blue'>Wallet Test</H4>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('blue');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.h4.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.h4.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.h4.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.h4.fontWeight);
    });
    test('H5 should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <H5 color='olive'>Wallet Test</H5>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('olive');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.h5.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.h5.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.h5.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.h5.fontWeight);
    });
    test('P should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <P color='white'>Wallet Test</P>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('white');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.p.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.p.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.p.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.p.fontWeight);
    });
    test('SMALL should render with the correct properties', () => {
        const { getByText } = render(
            <ThemeProvider theme={WalletTheme}>
                <SMALL color='brown'>Wallet Test</SMALL>
            </ThemeProvider>
        );
        const text = getByText('Wallet Test');
        expect(text.props.style.color).toBe('brown');
        expect(text.props.style.fontFamily).toBe(WalletTheme.text.small.fontFamily);
        expect(text.props.style.fontSize).toBe(Number(WalletTheme.text.small.fontSize.replaceAll("px", "")));
        expect(text.props.style.lineHeight).toBe(Number(WalletTheme.text.small.lineHeight.replaceAll("px", "")));
        expect(text.props.style.fontWeight).toBe(WalletTheme.text.small.fontWeight);
    });
});
