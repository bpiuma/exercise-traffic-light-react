import React, { useState } from "react";

//create your first component
export function Home() {
	let rojoOff = "#F08080";
	let rojoOn = "red";
	let amarilloOff = "#D5DF37";
	let amarilloOn = "yellow";
	let verdeOff = "#3CB371";
	let verdeOn = "#7FFF00";

	const [rojo, SetRojo] = useState(rojoOff);
	const [amarillo, SetAmarillo] = useState(amarilloOff);
	const [verde, SetVerde] = useState(verdeOff);

	const boton = color => {
		return {
			width: "50px",
			height: "50px",
			backgroundColor: color,
			borderRadius: "100%",
			marginTop: "10px",
			marginBottom: "10px"
		};
	};

	const cambiar = color => {
		SetRojo(rojoOff);
		SetAmarillo(amarilloOff);
		SetVerde(verdeOff);
		switch (color) {
			case "rojo":
				SetRojo(rojoOn);
				break;
			case "amarillo":
				SetAmarillo(amarilloOn);
				break;
			case "verde":
				SetVerde(verdeOn);
				break;
		}
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-dark col-1 mt-5 p-2 rounded d-flex flex-column align-items-center">
				<button style={boton(rojo)} onClick={() => cambiar("rojo")} />
				<button
					style={boton(amarillo)}
					onClick={() => cambiar("amarillo")}
				/>
				<button style={boton(verde)} onClick={() => cambiar("verde")} />
			</div>
		</div>
	);
}
