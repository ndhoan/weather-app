'use client';

import { Card, Metric, Text, Color } from '@tremor/react';

interface StatCardProps {
  title: string;
  metric: string;
  color?: Color;
}

const StatCard: React.FC<StatCardProps> = ({ title, metric, color }) => {
  return (
    <Card decorationColor={color} decoration='top'>
      <Text>{title}</Text>
      <Metric>{metric}</Metric>
    </Card>
  );
};

export default StatCard;
