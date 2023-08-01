import React from 'react';
import { TextInputStyled } from './styles';
import styled from 'styled-components/native';
import { Image, TextProps } from 'react-native';
import { useTheme } from '../../theme';
import { SMALL } from '../text';

interface SubTextProps extends TextProps {
  placeholder?: string;
  icon?: any;
  value?: string;
}

export const TextInput: React.FC<SubTextProps> = ({ children, value, icon, placeholder, ...props }) => {
  const theme = useTheme();
  return (
    <InputContainer>
      <TextInputStyled value={value} {...props} hasIcon={icon != undefined} placeholder={placeholder} placeholderTextColor={theme.input.placeHolderColor} />
      <IconContainer>
        {icon ? <Image source={icon} /> : null}
      </IconContainer>
    </InputContainer>
  );
};

const InputContainer = styled.View`
`;

const IconContainer = styled.View`
flex: 1;
position: absolute;
justify-content: center;
align-items: center;
width: 45px;
height: 45px;
z-index: 2;
padding: 6.5px 10px;
`;

/* TextInputWithLabel */

interface SubTextLabelProps extends SubTextProps {
  label: string;
  icon?: any;
  value?: string;
}

export const TextInputWithLabel: React.FC<SubTextLabelProps> = ({ label, value, placeholder, icon, ...props }) => {
  const theme = useTheme();
  return (
    <InputLabelContainer>
      <LabelContainer>
        <SMALL>{label}</SMALL>
      </LabelContainer>
      <TextInput value={value} icon={icon} placeholder={placeholder} {...props}></TextInput>
    </InputLabelContainer>
  );
};

const InputLabelContainer = styled.View`
    padding: 6px;
`;

const LabelContainer = styled.View`
  padding-bottom: 8px;
  padding-top: 8px;
`;