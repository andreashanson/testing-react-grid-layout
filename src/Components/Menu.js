import React from 'react';
import '../css/Menu.css';
import icon from '../images/svg-icons/si-glyph-button-plus.svg'

const Menu = (props) => {

	let accessableWidgets;
	if (props.user_details.accessable_widgets) {
		accessableWidgets = props.user_details.accessable_widgets.map(function(widget, i) {
			return (
				<li key={i}>
					<span className="btn" onClick={props.add.bind(this, widget.type, {x: widget.x, y: widget.y, w: widget.w, h: widget.h, maxW: widget.maxW, minW: widget.minW, maxH: widget.maxH, minH: widget.minH, isDraggable: widget.isDraggable, isResizable: widget.isResizable})}>{widget.name}</span>
				</li>
			)
		});
	}

	return (
		<div className="Menu">
			<ul>
				{accessableWidgets}
				<li key="a">
					<span className="btn" onClick={props.openWidgetModal}><img src={icon} alt="Icon"/>Add widget</span>
				</li>
			</ul>
		</div>
	)
}

export default Menu;
