import React from "react";
import PropTypes from "prop-types";

export const TrafficLight = (props) => {
	return (
		<div className="box d-flex flex-column">
			<div
				className={`light rojo${props.rojo}`}
				onClick={props.changeRojo}></div>
			<div
				className={`light amarillo${props.amarillo}`}
				onClick={props.changeAmarillo}></div>
			<div
				className={`light verde${props.verde}`}
				onClick={props.changeVerde}></div>
		</div>
	);
};

TrafficLight.propTypes = {
	rojo: PropTypes.string,
	amarillo: PropTypes.string,
	verde: PropTypes.string,
	changeRojo: PropTypes.func,
	changeVerde: PropTypes.func,
	changeAmarillo: PropTypes.func,
};
