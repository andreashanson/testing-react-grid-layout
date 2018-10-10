import React from 'react';
import '../css/Map.css';
import SimpleMap from './SimpleMap';
const Map = (props) => {
	return(
		<div {...props}>
			<SimpleMap />
		</div>
	)
}

export default Map;