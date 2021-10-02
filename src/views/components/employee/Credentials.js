import React from "react";
import { Progress } from "antd";

import { EmployeeInput } from "../../atoms";


export default function Credentials(props) {

	return (
		<div className="section-container credentials-container">
			<p className="typo-title" style={{margin: 0}}>Credentials</p>
			<Progress percent={30}/>
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
	)
}