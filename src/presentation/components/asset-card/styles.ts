import styled from 'styled-components';
import { ContainerProps, PriceProps } from './types';

const getTradeColor = (trade?: 1 | -1) => {
  if (trade === 1) return '#34a853';
  if (trade === -1) return '#ea4335';
};

export const Container = styled.div<ContainerProps>`
  width: 200px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px 15px;
  border: 1px solid ${({ trade }) => getTradeColor(trade) ?? '#ccc'};
  border-bottom: 4px solid ${({ trade }) => getTradeColor(trade) ?? '#ccc'};
  display: inline-block;
  transition: 0.5s;
`;

export const Name = styled.h2`
  font-size: 20px;
  font-weight: 600;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Symbol = styled.code`
  font-size: 14px;
  font-weight: 600;
  color: #aaa;
`;

export const Price = styled.p<PriceProps>`
  margin-top: 5px;
  width: 100%;
  text-align: right;
  font-weight: 600;
  color: ${({ trade }) => getTradeColor(trade) ?? 'black'};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.5s;
`;
