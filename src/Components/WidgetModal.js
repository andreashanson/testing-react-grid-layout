import React from 'react';
import '../css/WidgetModal.css';
import close from '../images/svg-icons/si-glyph-button-error.svg';
import chartStatistic from '../images/svg-icons/si-glyph-chart-decrease.svg';


const WidgetModal = (props) => {

	console.log(props);

	let accessableWidgets;

	accessableWidgets = props.user_details.accessable_widgets.map(function(widget, i) {
		return (
			<div className="WidgetBox" key={i}>
				<div className="WidgetBoxTop">
					<img src={chartStatistic} lat="Icon" />
				</div>
				<div className="WidgetBoxBottom">
					{widget.name}
					<div className="btn" onClick={props.add.bind(this, widget.type, {x: widget.x, y: 1000, w: widget.w, h: widget.h, maxW: widget.maxW, minW: widget.minW, maxH: widget.maxH, minH: widget.minH, isDraggable: widget.isDraggable, isResizable: widget.isResizable})}>add</div>
				</div>
			</div>
		)
	});

	console.log(props);
	return (
		<div className="WidgetModal">
			<div className="card">
				<div className="card-header">
					<div className="card-header-container">
						<h4>Widgets</h4>
		      			<span className="header-button" onClick={props.close}><img src={close} alt="close-icon" /></span>
					</div>
				</div>
				<div className="card-body">
					<div className="WidgetBoxContainer">
						{accessableWidgets}
					</div>
				</div>
			</div>
		</div>
	)

}

export default WidgetModal;
