import { useQuery } from '@tanstack/react-query';
import { fetchCoinHistory } from '../api';
import ApexChart from 'react-apexcharts';

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

const Chart = ({ coinId }: ChartProps) => {
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
                mode: 'dark',
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

          <ApexChart
            type='candlestick'
            series={
              [
                {
                  data: data?.map((price) => {
                    return {
                      x: price.time_close,
                      y: [price.open, price.high, price.low, price.close],
                    };
                  }),
                },
              ] as any
            }
            options={{
              theme: {
                mode: 'dark',
              },
              chart: {
                type: 'candlestick',
                height: 350,
                width: 500,
                toolbar: {
                  show: false,
                },
                background: 'transparent',
              },
              stroke: {
                curve: 'smooth',
                width: 1.5,
              },
              yaxis: {
                show: false,
              },
              xaxis: {
                type: 'datetime',
                categories: data?.map((price) => price.time_close),
                labels: {
                  style: {
                    colors: '#40739e',
                  },
                },
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: '#c23616',
                    downward: '#40739e',
                  },
                  wick: {
                    useFillColor: true,
                  },
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
