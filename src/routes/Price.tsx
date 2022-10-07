import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { fetchCoinHistory } from '../api';

const Tabs = styled.div`
  display: grid;
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span`
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
`;
interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

const Price = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(['ohlcv', coinId], () =>
    fetchCoinHistory(coinId)
  );

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <>
          <Tabs>
            <Tab>Open Price: $ {data?.[data.length - 1].open}</Tab>
            <Tab>Close Price: $ {data?.[data.length - 2].close}</Tab>
            <Tab>Highest Price: $ {data?.[data.length - 1].high}</Tab>
            <Tab>Lowest Price: $ {data?.[data.length - 1].low}</Tab>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default Price;
