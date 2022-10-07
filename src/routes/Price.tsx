import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api';
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
  console.log(data);

  return <div>{isLoading ? 'Loading...' : <h1>Price</h1>}</div>;
};

export default Price;
