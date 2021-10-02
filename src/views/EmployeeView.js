import React from "react";

import {Metrics, Credentials, Details, Inspections} from "./components/employee";

export default function EmployeeView(props) {

	return (
		<div className="employee-view">
			<div className="employee-view-top">
				<Metrics />
				<div className="employee-view-right">
					<Details />
					<Credentials />
				</div>
			</div>
			<Inspections />
		</div>
	)
}