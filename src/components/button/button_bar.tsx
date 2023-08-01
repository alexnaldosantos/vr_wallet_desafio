import React from 'react';
import styled from 'styled-components/native';
import { ViewStyled } from "../view/styles";
import { ViewProps, Image, TouchableOpacity } from 'react-native';
import { Colors } from "../../theme/colors";

interface ButtonBarProps extends ViewProps {
    color?: keyof Colors | string;
    imageColor?: keyof Colors | string;
    image: any
    onPress?: () => void;
}

export const ButtonBar: React.FC<ButtonBarProps> = ({ children, image, color, imageColor, onPress, ...props }) => {

    return (
        <TouchableOpacity onPress={onPress} disabled={!onPress}>
            <ButtonContainer color={color} {...props}>
                {image ? <Image source={image} tintColor={imageColor} /> : null}
                {children}
            </ButtonContainer>
        </TouchableOpacity>
    );
};

/* local style */

const ButtonContainer = styled(ViewStyled)`
    width: 39px;
    height: 39px;
    align-items: center;
    justify-content: center;
`;