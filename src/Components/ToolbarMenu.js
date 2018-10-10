import React from 'react';
import Save from '../images/svg-icons/si-glyph-button-arrow-down.svg';
import '../css/ToolbarMenu.css';

const ToolbarMenu = (props) => {
	return (

		<div className="ToolbarMenu">
			<div className="user-info-container">
			<span>{props.userName}</span>
			</div>
			<div className="btn-container">
				<div className="btn" onClick={props.save}><img src={Save} alt="S" />Save Layout</div>
			</div>
		</div>
	)
}

export default ToolbarMenu;