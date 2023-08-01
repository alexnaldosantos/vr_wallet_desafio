import React from 'react';
import { ViewStyled } from './styles';
import { ViewProps } from 'react-native';
import { Colors } from "../../theme/colors";

interface SubViewProps extends ViewProps {
    color?: keyof Colors | string;
}

export const View: React.FC<SubViewProps> = ({ children, color, ...props }) => {
    return <ViewStyled color={color} {...props}>{children}</ViewStyled>;
};