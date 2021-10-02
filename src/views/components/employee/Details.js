import React from "react";
import { Progress } from "antd";

import { EmployeeInput } from "../../atoms";


export default function Details(props) {

	return (
		<div className="section-container">
			<p className="typo-title" style={{margin: 0}}>Details</p>
			<Progress percent={30}/>
			<div className="details">
				<div className="section-row">
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
				</div>
				<div className="section-row">
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
					<EmployeeInput name="First name" placeholder="First name" type="text"/>
				</div>
			</div>
		</div>
	)
}