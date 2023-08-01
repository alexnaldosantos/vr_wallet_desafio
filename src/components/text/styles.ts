import styled from 'styled-components/native';
import { Colors } from "../../theme/colors";

export const TextStyled = styled.Text<{ color?: keyof Colors | string }>`
  font-family: ${props => props.theme.text.defaultFont};
  font-weight: ${props => props.theme.text.defaultFontWeight};
  font-size: ${props => props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.defaultLineHeight};
  color: ${props => props.color || props.theme.text.defaultColor};
`;

export const H1Styled = styled(TextStyled)`
  font-family: ${props => props.theme.text.h1.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.h1.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.h1.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.h1.fontWeight || props.theme.text.defaultFontWeight};
`;

export const H2Styled = styled(TextStyled)`
  font-family: ${props => props.theme.text.h2.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.h2.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.h2.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.h2.fontWeight || props.theme.text.defaultFontWeight};
`;

export const H3Styled = styled(TextStyled)`
  font-family: ${props => props.theme.text.h3.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.h3.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.h3.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.h3.fontWeight || props.theme.text.defaultFontWeight};
`;

export const H4Styled = styled(TextStyled)`
  font-family: ${props => props.theme.text.h4.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.h4.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.h4.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.h4.fontWeight || props.theme.text.defaultFontWeight};
`;

export const H5Styled = styled(TextStyled)`
  font-family: ${props => props.theme.text.h5.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.h5.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.h5.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.h5.fontWeight || props.theme.text.defaultFontWeight};
`;

export const PStyled = styled(TextStyled)`
  font-family: ${props => props.theme.text.p.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.p.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.p.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.p.fontWeight || props.theme.text.defaultFontWeight};
`;

export const SMALLStyled = styled(TextStyled)`
  font-family: ${props => props.theme.text.small.fontFamily || props.theme.text.defaultFont};
  font-size: ${props => props.theme.text.small.fontSize || props.theme.text.defaultFontSize};
  line-height: ${props => props.theme.text.small.lineHeight || props.theme.text.defaultLineHeight};
  font-weight: ${props => props.theme.text.small.fontWeight || props.theme.text.defaultFontWeight};
`;