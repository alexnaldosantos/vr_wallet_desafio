import styled from 'styled-components/native';
import { Colors } from "../../theme/colors";

export const ButtonStyled = styled.View<{ color?: keyof Colors | string }>`
  background-color: ${props => props.color};
`;