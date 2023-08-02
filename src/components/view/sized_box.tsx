import React from 'react';
import styled from 'styled-components/native';

interface SizedBoxProps {
  direction?: 'row' | 'column';
  size: string;
}

export const SizedBox: React.FC<SizedBoxProps> = ({ direction = 'column', size }) => {
  switch (direction) {
    case 'column': return <RowContainer size={size} />
    default:
    case 'row': return <ColumnContainer size={size} />
  }
};

const RowContainer = styled.View<{ size: string }>`
    background-color: transparent;
    height: ${props => `${props.size}px`};
`;

const ColumnContainer = styled.View<{ size: string }>`
    background-color: transparent;
    width: size;
`;