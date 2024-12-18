import styled from "styled-components/native";
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { FlatList } from "react-native";
import { DataListProps } from "./Dashboard";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  
  background-color: ${({ theme }) => theme.colors.primary};
  
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  padding-top: ${RFValue(28)}px;
`

export const UserWrapper = styled.View`
  width: 100%;

  padding: 0 24px;
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(24)}px;
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  line-height: ${RFValue(24)}px;
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};

  font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 }
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  margin-top: ${RFPercentage(12)}px;

  flex: 1;
  padding: 0 24px;
`
export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(24)}px;

  margin-bottom: 16px;
`

export const TransactionList = styled(
  FlatList<DataListProps>)
  .attrs({
    showsVerticalScrollIndicator: false
  })``