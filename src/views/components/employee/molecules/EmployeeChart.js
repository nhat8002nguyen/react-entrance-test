import React from 'react';
import { Column } from '@ant-design/charts';

const EmployeeChart = ({data}) => {
	
	const chartConfig = {
    data: data || [],
    xField: 'month',
    yField: 'value',
		height: 100,
		width: 200,
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      month: { alias: 'Month' },
      value: { alias: 'value' },
    },
  };

	return (
		<div className="metrics-completed">
			<p className="typo-text">Employee Completed</p>
			<Column {...chartConfig} />
		</div>
	);
}

export default EmployeeChart;