import React from "react";

import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

const { Option } = Select;

export default function EmployeeInput(props) {

	return (
		<div className="employee-input">
			<p className="typo-label">{props.name}</p>
			{props.type === "select" ? <select className="input typo-text" placeholder={props.placeholder}>
				{props.options?.map((option, index) => <option key={index}>{option}</option>)}
			</select>
			: <input type="text" placeholder={props.placeholder} className="input typo-text"></input>}
		</div>
	)
}