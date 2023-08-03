import 'react-native';
import React from 'react'
import { render } from '@testing-library/react-native';
import 'jest-styled-components'
import { View } from '../src/components';
import { describe, test, expect } from '@jest/globals';
import { WalletTheme } from "../src/theme";
import { ThemeProvider } from "styled-components/native";

describe('Test View components', () => {
    test('View should render with the correct properties', () => {
        const { queryByTestId } = render(
            <ThemeProvider theme={WalletTheme}>
                <View testID="view"></View>
            </ThemeProvider>
        );
        const text = queryByTestId("view");
        expect(text?.props.style.backgroundColor).toBe(WalletTheme.view.backgroundColor);
    });
}
);