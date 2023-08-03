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
  showWallpaper?: boolean;
}

export const Window: React.FC<WindowProps> = ({ children, title, leftButton: leftButton, rightButton, toolBarColor, color, titleColor, showWallpaper = true, ...props }) => {
  const isStringTitle = typeof title == 'string';
  const theme = useTheme();
  return (
    <SafeAreaContainer>
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
      </WindowContainer>
      {showWallpaper ? <TopWindowWallpaper /> : null}
      {showWallpaper ? <BottomWindowWallpaper /> : null}
    </SafeAreaContainer>);
};

/* local style */

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
`;

export const WindowContainer = styled.SafeAreaView`
  flex: 1;
  z-index: -100;
`;

export const TopWindowWallpaper = styled.View`
  height: 235.27px;
  width: 349.21px;
  background-color: ${props => props.theme.colors.greyLight};
  opacity: 0.2;
  top: -80px;
  left: -100px;
  position: absolute;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  transform: rotate(144.57deg);
  z-index: -99;
  pointer-events: none;
`;
export const BottomWindowWallpaper = styled.View`
  height: 235.27px;
  width: 349.21px;
  background-color: ${props => props.theme.colors.greyLight};
  opacity: 0.2;
  bottom: -80px;
  right: -100px;
  position: absolute;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  transform: rotate(144.57deg);
  z-index: -99;
  pointer-events: none;
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