import React from 'react';
import { Column } from '@ant-design/plots';

const SurveillanceBarChartFrequency = () => {
    const data = [
        { Date: '202204', Frequency: 4510 },
        { Date: '202205', Frequency: 3275 },
        { Date: '202206', Frequency: 1929 },
        { Date: '202207', Frequency: 1396 },
        { Date: '202208', Frequency: 1269 },
        { Date: '202209', Frequency: 2320 },
        { Date: '202210', Frequency: 4553 },
        { Date: '202211', Frequency: 8020 },
        { Date: '202212', Frequency: 13948 },
        { Date: '202301', Frequency: 7317 },
        { Date: '202302', Frequency: 4836 },
        { Date: '202303', Frequency: 4639 },
        { Date: '202304', Frequency: 3025 },
        { Date: '202305', Frequency: 2924 },
        { Date: '202306', Frequency: 2764 },
        { Date: '202307', Frequency: 2160 },
        { Date: '202308', Frequency: 1615 },
        { Date: '202309', Frequency: 2075 },
        { Date: '202310', Frequency: 2897 },
        { Date: '202311', Frequency: 5624 },
        { Date: '202312', Frequency: 11512 },
        { Date: '202401', Frequency: 12363 },
        { Date: '202402', Frequency: 9938 },
        { Date: '202403', Frequency: 7073 },
        { Date: '202404', Frequency: 4778 },
        { Date: '202405', Frequency: 4259 },
        { Date: '202406', Frequency: 3418 },
        { Date: '202407', Frequency: 3407 },
        { Date: '202408', Frequency: 2692 },
        { Date: '202409', Frequency: 2555 },
        { Date: '202410', Frequency: 3114 },
        { Date: '202411', Frequency: 4688 },        
        { Date: '202412', Frequency: 9277 },
      ];
  const config = {
    data,
    xField: 'Date',
    yField: 'Frequency',
    onReady: ({ chart }) => {
      try {
        const { height } = chart._container.getBoundingClientRect();
        const tooltipItem = data[Math.floor(Math.random() * data.length)];
        chart.on(
          'afterrender',
          () => {
            chart.emit('tooltip:show', {
              data: {
                data: tooltipItem,
              },
              offsetY: height / 2 - 60,
            });
          },
          true,
        );
      } catch (e) {
        console.error(e);
      }
    },
  };
  return <Column {...config} />;
};

export default SurveillanceBarChartFrequency