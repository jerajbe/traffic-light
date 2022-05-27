import React, { useState } from "react";
import { TrafficLight } from "./TrafficLight";

export const Home = () => {
	var [turnRed, setTurnRed] = useState("On");
	var [turnGreen, setTurnGreen] = useState("");
	var [turnYellow, setTurnYellow] = useState("");
	function changeRed(e) {
		if (turnRed === "") {
			setTurnRed("On");
			setTurnGreen("");
			setTurnYellow("");
		}
	}
	function changeYellow(e) {
		if (turnYellow === "") {
			setTurnYellow("On");
			setTurnGreen("");
			setTurnRed("");
		}
	}
	function changeGreen(e) {
		if (turnGreen === "") {
			setTurnGreen("On");
			setTurnRed("");
			setTurnYellow("");
		}
	}
	return (
		<div className="d-flex justify-content-center sky">
			<TrafficLight
				changeRojo={changeRed}
				changeAmarillo={changeYellow}
				changeVerde={changeGreen}
				rojo={turnRed}
				verde={turnGreen}
				amarillo={turnYellow}
			/>
		</div>
	);
};
