import React, { PropsWithChildren } from 'react';
import styled from 'styled-components/native';

export const HorizontalCenter: React.FC<PropsWithChildren> = ({ children }) => {
  return (<RowContainer>{children}</RowContainer>)
}

const RowContainer = styled.View`
    align-items: center;
`;

export const VerticalCenter: React.FC<PropsWithChildren> = ({ children }) => {
  return (<VerticalContainer>{children}</VerticalContainer>)
}

const VerticalContainer = styled.View`
    justify-content: center;
`;