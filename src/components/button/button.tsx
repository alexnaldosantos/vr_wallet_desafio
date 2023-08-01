import React from 'react';
import styled from 'styled-components/native';
import { ViewProps, Image, TouchableOpacity } from 'react-native';
import { Colors } from "../../theme/colors";
import { H5 } from "../text/text";
import { useTheme } from '../../theme';


interface ButtonProps extends ViewProps {
    color?: keyof Colors | string;
    text: any;
    textColor?: keyof Colors | string;
    onPress?: () => void;
    enabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, color, text, textColor, enabled, onPress, ...props }) => {
    const theme = useTheme();
    const isStringText = typeof text == 'string';
    const isEnabled = onPress && (enabled || enabled == undefined);
    return (
        <TouchableOpacity onPress={onPress} disabled={!isEnabled}>
            <ButtonContainer color={color} {...props} enabled={isEnabled}>
                {isStringText ? <H5 color={isEnabled ? textColor || theme.button.textColor : theme.button.disabledTextColor}>{(text)}</H5> : null}
                {children}
            </ButtonContainer>
        </TouchableOpacity>
    );
};

/* local style */

const ButtonContainer = styled.View<{ color?: keyof Colors | string, enabled?: boolean }>`
    background-color: ${props => props.enabled ? props.color || props.theme.button.color : props.theme.button.disabledColor};
    padding: 10px 20px 10px 20px;
    height: 55px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
`;