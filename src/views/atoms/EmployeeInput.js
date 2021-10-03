import React, { useEffect, useState } from "react";


export default function EmployeeInput(props) {
	const { id, name, defaultValue, type, placeholder, options, onInputChange } = props;

	const handleChangeInput = (e) => {
		typeof onInputChange === "function" && onInputChange(id, e.target.value);
	}

	return (
		<div className="employee-input">
			<p className="typo-label">{name}</p>
			{type === "select" 
			? <select className="input typo-text" placeholder={placeholder} 
					onChange={handleChangeInput} 
				>
				{options?.map((option, index) => 
					<option selected={defaultValue === option} key={index}>{option}</option>)
				}
			</select>
			: <input type={type === "password" ? "password" : "text"} 
					placeholder={placeholder} className="input typo-text" defaultValue={defaultValue} 
					onChange={handleChangeInput} >
				</input>}
		</div>
	)
}