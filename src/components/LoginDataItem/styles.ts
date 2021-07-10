import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(90)}px;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 18px;
`;

export const LoginData = styled.View``;

export const Password = styled.Text`
  font-size: ${(RFValue(26))}px;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.primary_light};

  margin: 0 auto;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Email = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${(props) => props.theme.colors.primary_light};
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.primary_light};
`;
