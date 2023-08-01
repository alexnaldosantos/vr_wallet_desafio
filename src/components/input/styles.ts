import styled from 'styled-components/native';

export const TextInputStyled = styled.TextInput<{ hasIcon?: boolean }>`
  font-family: ${props => props.theme.input.fontFamily};
  font-weight: ${props => props.theme.input.fontWeight};
  font-size: ${props => props.theme.input.fontSize};
  line-height: ${props => props.theme.input.lineHeight};
  background-color: ${props => props.theme.input.backgroundColor};
  color: ${props => props.theme.input.textColor};
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.greyLight};
  height: 45px;
  padding: 13px;
  padding-left: ${props => props.hasIcon ? '45px' : '13px'};
`;