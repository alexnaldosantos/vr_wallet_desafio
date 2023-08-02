import React from 'react';
import styled from 'styled-components/native';
import { ViewStyled } from "../view/styles";
import { ViewProps } from 'react-native';
import { Colors } from "../../theme/colors";
import { H3 } from "../text/text";
import { useTheme } from '../../theme';

interface WindowProps extends ViewProps {
  color?: keyof Colors | string;
  title?: React.ReactNode | string;
  titleColor?: keyof Colors | string;
  toolBarColor?: keyof Colors | string;
  leftButton?: React.ReactNode;
  rightButton?: React.ReactNode;
  children?: React.ReactNode;
}

export const Window: React.FC<WindowProps> = ({ children, title, leftButton: leftButton, rightButton, toolBarColor, color, titleColor, ...props }) => {
  const isStringTitle = typeof title == 'string';
  const theme = useTheme();
  return (
    <WindowContainer>
      <WindowStyled color={color} {...props}>
        <HeaderContainer color={toolBarColor}>
          <ToolBarItemLeft>
            {leftButton ? (leftButton) : null}
          </ToolBarItemLeft >
          <ToolBarItemCenter>
            {isStringTitle ? <H3 color={titleColor || theme.toolbar.titleColor}>{(title)}</H3> : title}
          </ToolBarItemCenter>
          <ToolBarItemRight>
            {rightButton ? (rightButton) : null}
          </ToolBarItemRight>
        </HeaderContainer>
        {children}
      </WindowStyled>
    </WindowContainer>);
};

/* local style */

export const WindowContainer = styled.SafeAreaView`
  flex: 1;
`;

export const WindowStyled = styled(ViewStyled)`
  flex: 1;
`;

const ToolBarItemLeft = styled(ViewStyled)`
  flex: 1;
  align-items: flex-start;
  background-color: transparent;
`;
const ToolBarItemCenter = styled(ViewStyled)`
  flex: 2;
  align-items: center;
  background-color: transparent;
`;
const ToolBarItemRight = styled(ViewStyled)`
  flex: 1;
  align-items: flex-end;
  background-color: transparent;
`;

const HeaderContainer = styled(ViewStyled)`
  padding: 0px 16px 0px 16px;
  height: 66px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;