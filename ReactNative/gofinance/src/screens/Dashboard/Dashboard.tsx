import React from 'react';
import { LayoutChangeEvent, Text, View } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import { TransactionCardProps } from '../../components/TransactionCard/TransactionCard';
import {
  Container,
  Header,
  UserInfo, UserWrapper, Photo, User, UserGreeting, UserName, Icon, HighlightCards, Transactions, Title, TransactionList
} from './styles';

interface Dashboard {
  onLayout: ((event: LayoutChangeEvent) => void)
}

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard({ onLayout }: Dashboard) {
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    amount: 'R$ 12.000,00',
    category: { icon: 'dollar-sign', name: 'Vendas' },
    date: '13/04/2020',
    title: 'Desenvolvimento de site',
  }, {
    id: '2',
    type: 'negative',
    amount: 'R$ 59,00',
    category: { icon: 'coffee', name: 'Alimentação' },
    date: '10/04/2020',
    title: 'Hamburger Pizzy',
  },
  {
    id: '3',
    type: 'negative',
    amount: 'R$ 1.200,00',
    category: { icon: 'shopping-bag', name: 'Casa' },
    date: '10/04/2020',
    title: 'Aluguel do apartamento',
  }]

  return (
    <Container onLayout={onLayout}>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/26986888?v=4' }} />
            <User>
              <UserGreeting>
                Olá,
              </UserGreeting>
              <UserName>
                Sergio
              </UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type='up'
          title='Entradas'
          amount='R$ 17.400,00'
          lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard
          type='down'
          title='Saídas'
          amount='R$ 1.259,00'
          lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard
          type='total'
          title='Total'
          amount='R$ 16.141,00'
          lastTransaction='01 à 16 de abril' />
      </HighlightCards>

      <Transactions>
        <Title>
          Listagem
        </Title>

        <TransactionList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (<TransactionCard
            data={item}
          />)}
        />
      </Transactions>

    </Container>
  );
}
