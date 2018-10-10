import React from 'react';
import Chart from 'chart.js';


class CircleChart extends React.Component {

	constructor(props) {
		super(props)
		console.log(props);
		this.state = {
			type: props.type,
			bgcolor: props.bgcolor,
			data: props.datavalues,
			labels: props.labels
		}
	}
	
	componentDidMount() {

		var ctx = document.getElementById('myCircleChart').getContext('2d');
		var chart = new Chart(ctx, {
		    type: this.state.type,

		    data: {
		    	datasets: [
			    	{
			    		data: this.state.data,
			    		backgroundColor: this.state.bgcolor
			    	}
			    ],
		    	
		    	labels: this.state.labels
		    },

	    	// Configuration options go here
    		options: {
    			maintainAspectRatio: false,
    			responsive: true,
	   		}
		});
	}

	render() {
		return (
			<canvas id="myCircleChart"></canvas>
		)
	}
}

export default CircleChart;