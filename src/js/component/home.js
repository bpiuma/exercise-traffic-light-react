import React, { useState } from "react";

//create your first component
export function Home() {
	let rojo = "red";
	let amarillo = "yellow";
	let verde = "#7FFF00";

	const [color, SetColor] = useState("");

	return (
		<div className="d-flex justify-content-center">
			<div className="bg-dark col-1 mt-5 p-2 rounded d-flex flex-column align-items-center">
				<button
					className={"btn " + (color == rojo ? "rojoOn" : "rojoOff")}
					onClick={() => SetColor(rojo)}
				/>
				<button
					className={
						"btn " +
						(color == amarillo ? "amarilloOn" : "amarilloOff")
					}
					onClick={() => SetColor(amarillo)}
				/>
				<button
					className={
						"btn " + (color == verde ? "verdeOn" : "verdeOff")
					}
					onClick={() => SetColor(verde)}
				/>
			</div>
		</div>
	);
}
