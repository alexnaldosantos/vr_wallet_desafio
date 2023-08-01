import styled from 'styled-components/native';
import { Colors } from "../../theme/colors";

export const ViewStyled = styled.View<{ color?: keyof Colors | string }>`
  background-color: ${props => props.color || props.theme.view.backgroundColor};
`;