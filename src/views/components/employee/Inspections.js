import React from "react";
import { Progress } from "antd";

import { EmployeeInput } from "../../atoms";

export default function Inspections(props) {

	return (
		<div className="section-container inspections-container">
			<p className="typo-title" style={{margin: 0}}>Inspections</p>
			<Progress percent={30}/>
			
		</div>
	)
}	
