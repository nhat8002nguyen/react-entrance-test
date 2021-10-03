import React from "react";


export default function Button(props) {
	const { name, style } = props;

	return (
		<div className="App-button" style={style}>
			<p className="typo-title">{name}</p>
		</div>
	)
}