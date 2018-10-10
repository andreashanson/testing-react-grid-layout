import React from 'react';
import close from '../images/svg-icons/si-glyph-button-error.svg';
import up from '../images/svg-icons/si-glyph-arrow-thick-thin-up.svg';
import down from '../images/svg-icons/si-glyph-arrow-thick-thin-down.svg';

import '../css/WidgetHeader.css';

const WidgetHeader = (props) => {
	
	if (props.visiblebody) {
		return (
			<div className="card-header">
				<div className="widget-header-container">
		    	    <h4>{props.type}</h4>
		    	    <div className="header-button-container">
		       			<span className="header-button" onClick={props.minify.bind(this, props.id)}><img src={up} alt="minify-icon" /></span>
		      			<span className="header-button" onClick={props.close.bind(this, props.id)}><img src={close} alt="close-icon" /></span>
		    		</div>
	    		</div>
	    	</div>
	    )
	}

	else {
		return (
			<div className="card-header">
				<div className="widget-header-container">
	    		    <h4>{props.type}</h4>
	    	    	<div className="header-button-container">
	       				<span className="header-button" onClick={props.minify.bind(this, props.id)}><img src={down} alt="minify-icon" /></span>
	      				<span className="header-button" onClick={props.close.bind(this, props.id)}><img src={close} alt="close-icon" /></span>
		    		</div>
	    		</div>
	    	</div>
	    )
	}
}

export default WidgetHeader;