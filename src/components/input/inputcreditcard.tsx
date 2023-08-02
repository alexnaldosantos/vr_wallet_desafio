import React from 'react';
import { Icons } from "../../theme/icons";
import { TextInputWithLabel } from "./input";
import { TextInputProps } from 'react-native';

export const InputCreditCard: React.FC<TextInputProps> = ({ ...props }) => {
    const handleCardNumberChange = (text: string) => {
        // only numbers
        const cleanedText = text.replace(/\D/g, '');
        // add spaces
        let formattedText = '';
        for (let i = 0; i < cleanedText.length; i += 4) {
            formattedText += cleanedText.slice(i, i + 4) + ' ';
        }
        formattedText = formattedText.trim();
        if (props.onChangeText) {
            props.onChangeText(formattedText);
        }
    };
    return (
        <TextInputWithLabel
            value={props.value} label="número do cartão"
            icon={Icons.card}
            keyboardType="numeric"
            maxLength={19} // 16 digits + 3 spaces
            onChangeText={handleCardNumberChange}
        />
    );
};

/* expiration input */

export const InputCreditCardExpirationDate: React.FC<TextInputProps> = ({ ...props }) => {
    const setExpirationDate = (newValue: string) => {
        if (props.onChangeText) {
            props.onChangeText(newValue);
        }
    }
    const handleCardExpNumberChange = (text: string) => {
        // only number
        const cleanedText = text.replace(/\D/g, '');

        if (cleanedText.length > 2) {
            const month = cleanedText.slice(0, 2);
            const year = cleanedText.slice(2);
            const validMonth = parseInt(month, 10) <= 12 && parseInt(month, 10) >= 1;
            if (validMonth) {
                setExpirationDate(`${month}/${year}`);
            } else {
                setExpirationDate('');
            }
        } else {
            setExpirationDate(cleanedText);
        }
    };
    return (
        <TextInputWithLabel
            placeholder='  /  '
            value={props.value} label="vencimento"
            keyboardType="numeric"
            maxLength={5} // 4 digits + 1 '/'
            onChangeText={handleCardExpNumberChange}
        />
    );
};