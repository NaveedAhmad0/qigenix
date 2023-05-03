import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export class ChartJs extends Component {
	

	doughnutPieData = {
		datasets: [
			{
				data: [30, 40, 30,30,30,10,10],
				backgroundColor: [
					"rgba(71, 85, 105, 1)",
					"rgba(71, 85, 105, 1)",
					"rgba(71, 85, 105, 1)",
					"rgba(71, 85, 105, 1)",
					"rgba(71, 85, 105, 1)",
					"rgba(124, 179, 66, 1)",
					"rgba(252, 45, 66, 1)"
				],
			},
		],

		// These labels appear in the legend and in the tooltips when hovering different arcs
		labels: ["New", "Contacted", "Qualified","Working","Proposal Sent","Customer","Lost Leads"],
	};

	doughnutPieOptions = {
		responsive: true,
		animation: {
			animateScale: true,
			animateRotate: true,
		},
	};

	
	

	render() {
		return (

								<Doughnut
								width={100}
									data={this.doughnutPieData}
									options={this.doughnutPieOptions}
								/>
						
		);
	}
}

export default ChartJs;
