import React from 'react';
import { Area } from '@ant-design/plots';

const SurveillanceRelativeFrequency = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'SurveillanceFrequency.json',
    },
    xField: 'ym',
    yField: 'p',
    colorField: 'vn',
    shapeField: 'smooth',
    stack: true, // Try to remove this line.
  };
  return <Area {...config} />;
};

export default SurveillanceRelativeFrequency