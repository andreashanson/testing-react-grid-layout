import React from 'react';
import Map from './Map';
import ConnectedUsers from './ConnectedUsers';
import Graf2 from './Graf2';
import DataUsage from './DataUsage';
import '../css/WidgetLayout.css';

const WidgetLayout = (props) => {
	if (props.visiblebody) {
		if (props.type === "map") {
			return (
				<div className="card-body" {...props}>
					<Map {...props} />
				</div>
			)
		}

		if (props.type === 'data-usage') {
			return (
				<div className="card-body">
					<DataUsage />
				</div>
			)
		}

		if (props.type === "connected-users") {
			return (
				<div className="card-body">
					<ConnectedUsers />
				</div>
			)
		}

		if (props.type === "graf2") {
			return (
				<div className="card-body">
					<Graf2 />
				</div>
			)
		}

		else {
			return (
				<div {...props} >SOMETHING ELSE{props.id}</div>
			)
		}
	}
	else {
		return (
			<div></div>
		)
	}
}

export default WidgetLayout;
