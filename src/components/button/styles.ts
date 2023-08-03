import styled from 'styled-components/native';
import { Colors } from "../../theme/colors";

export const ButtonStyled = styled.View<{ color?: keyof Colors | string, enabled?: boolean }>`
    background-color: ${props => props.enabled ? props.color || props.theme.button.color : props.theme.button.disabledColor};
`;