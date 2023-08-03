import 'react-native';
import React from 'react'
import { render } from '@testing-library/react-native';
import 'jest-styled-components'
import { Window } from '../src/components';
import { describe, test, expect } from '@jest/globals';
import { WalletTheme } from "../src/theme";
import { ThemeProvider } from "styled-components/native";

describe('Window View components', () => {
    test('Window should render with the correct properties', () => {
        const { queryByTestId } = render(
            <ThemeProvider theme={WalletTheme}>
                <Window testID="window"></Window>
            </ThemeProvider>
        );
        const text = queryByTestId("window");
        expect(text?.props.style.backgroundColor).toBe(WalletTheme.view.backgroundColor);
    });
}
);