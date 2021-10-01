import React, { useState } from "react";


export default function EmployeeInput(props) {
	const [input, setInput] = useState("");

	const handleChangeInput = (e) => {
		setInput(e.target.value);
		props.onInputChange(props.id, e.target.value);
	}

	return (
		<div className="employee-input">
			<p className="typo-label">{props.name}</p>
			{props.type === "select" 
			? <select className="input typo-text" placeholder={props.placeholder} value={input} onChange={handleChangeInput}>
				{props.options?.map((option, index) => <option key={index}>{option}</option>)}
			</select>
			: <input type="text" placeholder={props.placeholder} className="input typo-text" value={input} 
					onChange={handleChangeInput}>
				</input>}
		</div>
	)
}