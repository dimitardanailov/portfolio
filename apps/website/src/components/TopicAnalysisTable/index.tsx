'use client'

import {FC} from 'react'
import TopicAnalysis, {Row} from '@/classes/TopicAnalysis'
import {HFlexBox} from '@/styled-components/Grid'

import styled from 'styled-components'

import List from './ListItem'
import AdaptiveGridTwoEqualItems from '../AdaptiveGrid/TwoEqualItems'

const Table = styled.section`
  position: relative;

  width: 98%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  border: 1px solid #c9c9c9;
  border-radius: 0.25rem;
`

const TableHeader = styled.div`
  position: relative;

  width: 50%;
  background-color: #ccc;
  text-indent: 0.5rem;
  background-color: #c9c9c9;
  color: #000;
  padding: 0.25rem 0;

  @media (max-width: 1024px) {
    display: none;
  }
`

const LabelWrapper = styled.div`
  position: relative;

  width: 100%;

  padding: 0.5rem 0;
  text-indent: 0.5rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    font-weight: normal;
  }

  border: 1px solid #c9c9c9;
`

export interface Props {
  topicAnalysis: TopicAnalysis
}

const TopicAnalysisTable: FC<Props> = ({topicAnalysis}) => {
  const items = topicAnalysis.rows.map((item: Row, index: number) => (
    <li key={index} className="list-none">
      <LabelWrapper>{item.label}</LabelWrapper>
      <AdaptiveGridTwoEqualItems
        ItemA={<List listItems={item.advantages} title="Advantages" />}
        ItemB={<List listItems={item.disadvantages} title="Disadvantages" />}
      />
    </li>
  ))

  return (
    <Table>
      <HFlexBox>
        <TableHeader>Advantages</TableHeader>
        <TableHeader>Disadvantages</TableHeader>
      </HFlexBox>
      <ul>{items}</ul>
    </Table>
  )
}

export default TopicAnalysisTable
