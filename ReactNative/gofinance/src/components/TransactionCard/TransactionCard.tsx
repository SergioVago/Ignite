import { ReactNode } from "react";

import { Container, Category, Title, Amount, Footer, Icon, CategoryName, Date } from "./styles";

interface Category {
  name: string;
  icon: string;
}

export interface TransactionCardProps {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: Category
  date: string
}

interface Props {
  data: TransactionCardProps
}

export function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>{data.type === 'negative' && '-'}{data.amount}</Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon}></Icon>
          <CategoryName>{data.category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  )
}