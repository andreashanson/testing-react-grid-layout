import React from 'react';
import Chart from 'chart.js';
import '../css/TestChart.css';

class TestChart extends React.Component {
	
	componentDidMount() {
		var ctx = document.getElementById('myChart').getContext('2d');
		var chart = new Chart(ctx, {
		    // The type of chart we want to create
		    type: 'line',

		    // The data for our dataset
		    data: {
		        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		        datasets: [{
		            label: "Connected Users",
		            showLine: true,
		            borderColor: 'rgb(255, 255, 255)',
		            backgroundColor: 'rgba(220, 50, 50, 0.7',
		            data: [103, 121, 99, 82, 75, 109, 95, 130, 133, 109, 202, 122],
		        }]
		    },

	    	// Configuration options go here
    		options: {
    			maintainAspectRatio: false,
    			responsive: true,
    			animation: {
            		duration: 0, // general animation time
        		elements: {
        			line: {
        				tension: 0
        			}
        		}
        		},
	        	hover: {
	            	animationDuration: 10, // duration of animations when hovering an item
	        	},
	        	responsiveAnimationDuration: 0, // animation duration after a resize
	   		}
		});
	}

	render() {
		

		return (

			<canvas id="myChart" className="TestChart"></canvas>

		)

	}

}

export default TestChart;