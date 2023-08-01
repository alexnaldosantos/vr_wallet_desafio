import React from 'react';
import { TextStyled, H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, PStyled, SMALLStyled } from './styles';
import { TextProps } from 'react-native';
import { Colors } from "../../theme/colors";

interface SubTextProps extends TextProps {
  color?: keyof Colors | string;
}

export const Text: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <TextStyled color={color} {...props}>{children}</TextStyled>;
};

export const H1: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <H1Styled color={color} {...props}>{children}</H1Styled>;
};
export const H2: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <H2Styled color={color} {...props}>{children}</H2Styled>;
};
export const H3: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <H3Styled color={color} {...props}>{children}</H3Styled>;
};
export const H4: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <H4Styled color={color} {...props}>{children}</H4Styled>;
};
export const H5: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <H5Styled color={color} {...props}>{children}</H5Styled>;
};
export const P: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <PStyled color={color} {...props}>{children}</PStyled>;
};
export const SMALL: React.FC<SubTextProps> = ({ children, color, ...props }) => {
  return <SMALLStyled color={color} {...props}>{children}</SMALLStyled>;
};