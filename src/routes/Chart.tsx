import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

interface ChartProps {
  coinId: string;
  isDark: boolean;
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

const Chart = ({ coinId, isDark }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ['ohlcv', coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000,
    }
  );

  return (
    <div>
      {isLoading ? (
        'Loading Chart...'
      ) : (
        <>
          <ApexChart
            type='line'
            series={[
              {
                name: 'Price',
                data: data?.map((price) => Number(price.close)) as number[],
              },
            ]}
            options={{
              theme: {
                mode: isDark ? 'dark' : 'light',
              },
              chart: {
                height: 300,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: 'transparent',
              },
              grid: { show: false },
              stroke: {
                curve: 'smooth',
                width: 4,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                axisTicks: { show: false },
                axisBorder: { show: false },
                labels: {
                  show: false,
                },
                // type: 'datetime',
                categories: data?.map((price) =>
                  new Date(Number(price.time_close) * 1000).toUTCString()
                ),
              },
              fill: {
                type: 'gradient',
                gradient: { gradientToColors: ['#0be881'], stops: [0, 100] },
              },
              colors: ['#0fbcf9'],
              tooltip: {
                y: {
                  formatter: (value) => `$ ${value.toFixed(1)}`,
                },
              },
            }}
          />
        </>
      )}
    </div>
  );
};

export default Chart;
