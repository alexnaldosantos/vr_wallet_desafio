import React from 'react';
import styled from 'styled-components/native';
import { Colors } from '../../../theme/colors';
import { SMALL } from '../../../components';

type CardNumberObfuscatorProps = {
    number?: string;
    color?: keyof Colors | string;
};

export const CardNumberObfuscator: React.FC<CardNumberObfuscatorProps> = ({ number, color: color }) => {
    const obfuscatedPortion = number?.replaceAll(' ', '').slice(0, -4);
    const visiblePortion = number?.replaceAll(' ', '').slice(-4);

    return (
        <DotContainer>
            {Array.from({ length: 3 }).map((_, idx) => (
                <DotGroup key={idx}>
                    {Array.from({ length: 4 }).map((_, dotIdx) => (
                        <Dot key={dotIdx} color={color} />
                    ))}
                </DotGroup>
            ))}
            <DotGroup>
                <SMALL color={color}>{visiblePortion}</SMALL>
            </DotGroup>
        </DotContainer>
    );
};

const DotContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Dot = styled.View<{ color?: keyof Colors | string }>`
  width: 4px;
  height: 4px;
  background-color: ${props => props.color || props.theme.colors.white};
  margin-right: 2px;
  border-radius: 2px;
`;

const DotGroup = styled.View`
  flex-direction: row;
  margin-right: 7px;
`;