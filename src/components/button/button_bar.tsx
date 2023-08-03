import React from 'react';
import styled from 'styled-components/native';
import { ViewProps, Image, TouchableOpacity } from 'react-native';
import { Colors } from "../../theme/colors";
import { ButtonStyled } from './styles';

interface ButtonBarProps extends ViewProps {
    color?: keyof Colors | string;
    icon: any;
    iconColor?: keyof Colors | string;
    onPress?: () => void;
}

export const ButtonBar: React.FC<ButtonBarProps> = ({ children, icon, color, iconColor, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} disabled={!onPress}>
            <ButtonContainer color={color} {...props}>
                {icon ? <Image source={icon} tintColor={iconColor} /> : null}
                {children}
            </ButtonContainer>
        </TouchableOpacity>
    );
};

/* local style */

const ButtonContainer = styled(ButtonStyled)`
    background-color: ${props => props.color || 'transparent'};
    width: 39px;
    height: 39px;
    align-items: center;
    justify-content: center;
`;