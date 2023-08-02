import React from 'react';
import { CreditCard } from '../../../data';
import { Colors } from '../../../theme/colors';
import { ViewStyled } from '../../../components/view/styles';
import styled from 'styled-components/native';
import { H3, H5, HorizontalCenter, P, SMALL, SizedBox } from '../../../components';
import { CardNumberObfuscator } from "./card_number_obfucator";
import { useTheme } from '../../../theme';


interface CardProps {
    color?: keyof Colors | string;
    textColor?: keyof Colors | string;
    card?: CreditCard;
    cardName?: string;
}

export const Card: React.FC<CardProps> = ({ color, textColor, card, cardName = 'Black Card' }) => {
    const theme = useTheme();

    return (
        <HorizontalCenter>
            <CardStyled color={color}>
                <H5 color={textColor}>{cardName}</H5>
                <SizedBox size='34px' />
                <P color={textColor}>{card?.name}</P>
                <CardNumberObfuscator color={textColor} number={card?.id} />
                <SMALL color={textColor}>Validade {card?.exp}</SMALL>
            </CardStyled>
        </HorizontalCenter>
    );
};


export const CardStyled = styled(ViewStyled)`
    width: 300px;
    height: 180px;
    border-radius: 16px;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 30px 15px;
`;