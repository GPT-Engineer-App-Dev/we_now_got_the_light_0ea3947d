import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { createChart } from 'lightweight-charts';

const CryptoChart = ({ data, color }) => {
  const chartContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (!data || !chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, { width: 400, height: 300 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData(data.map(dataPoint => ({ time: dataPoint.time, value: parseFloat(dataPoint.priceUsd) })));

    return () => chart.remove();
  }, [data]);

  if (!data) return null;

  return (
    <Box ref={chartContainerRef} />
  );
};

export default CryptoChart;
