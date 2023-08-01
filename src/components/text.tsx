import styled from 'styled-components/native';
import { Colors } from "../theme";

export const Text = styled.Text < { color?: keyof Colors | string | undefined } > `
  font-family: ${props => props.theme.text.defaultFont};
  font-weight: ${props => props.theme.text.defaultFontWeight};
  font-size: ${props => props.theme.text.defaultFontSize};
  color: ${props => props.color || props.theme.text.defaultColor};
`;

export const H1 = styled(Text)`
  font-family: PTSans-Caption;
  font-size: 28px;
  line-height: 32px;
`;

export const H2 = styled(Text)`
  font-family: PTSans-Caption;
  font-size: 26px;
  line-height: 28px;
`;

export const H3 = styled(Text)`
  font-family: PTSans-Caption;
  font-size: 22px;
  line-height: 24px;
`;

export const H4 = styled(Text)`
  font-size: 20px;
  line-height: 22px;
`;

export const H5 = styled(Text)`
  font-size: 18px;
  line-height: 20px;
`;

export const P = styled(Text)`
  font-size: 16px;
  line-height: 18px;
`;

export const SMALL = styled(Text)`
  font-size: 14px;
  line-height: 16px;
`;