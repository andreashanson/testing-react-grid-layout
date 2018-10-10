import React from 'react';
import CircleChart from './Charts/CircleChart';

const DataUsage = () => {

	var data = [40, 35, 25];
	var backgroundColor = ["#ffeeba", "#bee5eb", "#b8daff"];
	var labels = ['IOS', 'Android', 'Desktop'];

	return (
		<CircleChart type="doughnut" bgcolor={backgroundColor} datavalues={data} labels={labels} />
	)
}

export default DataUsage;