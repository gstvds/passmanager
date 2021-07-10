import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  margin-top: ${RFValue(26)}px;
`;

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 8px;
`;

export const Error = styled.Text`
  color: ${(props) => props.theme.colors.error};
  margin-bottom: ${RFValue(4)}px;
`;

export const FormInput = styled(TextInput)`
  padding: ${RFValue(15)}px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.primary_light};
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.shape};
  font-size: ${(RFValue(14))}px;
`;