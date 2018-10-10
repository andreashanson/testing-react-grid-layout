import React, {Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

	static defaultProps = {
		center: {
			lat: 57.709653,
			lng: 11.983910
		},
		zoom: 15
	};

	render() {
		return (
			<div style={{ height: '200vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDu2Y94G_OzQG9iPrmL09DY4lIku2uNuIA' }}
					defaultCenter={this.props.center}
          			defaultZoom={this.props.zoom}
          		>
          			<AnyComponent
          				lat={57.709653}
          				lng={11.983910}
          				text={"Odinsplatsen"}
          			/>
          		</GoogleMapReact>
          	</div>
		)
	}
}

export default SimpleMap;