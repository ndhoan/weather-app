'use client';

import { AreaChart, Card, Title } from '@tremor/react';
import React from 'react';

interface RainChartProps {
  result: Root;
}

const RainChart: React.FC<RainChartProps> = ({ result }) => {
  const hourly = result?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString('en-US', {
        hour: 'numeric',
        hour12: false,
      })
    )
    .slice(0, 24);

  const data = hourly.map((hour, index) => ({
    time: Number(hour),
    'Rain %': result.hourly.precipitation_probability[index],
  }));

  const dataFormatter = (number: number) => `${number} %`;

  return (
    <Card>
      <Title>Chances of Rain</Title>
      <AreaChart
        className='mt-6'
        data={data}
        showLegend
        index='time'
        categories={['Rain %']}
        colors={['blue']}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormatter}
        yAxisWidth={40}
      />
    </Card>
  );
};

export default RainChart;
