import React from "react";
import { useSelector } from "react-redux";

import { Progress } from "antd";

import { useEmployeeMetrics } from "../../../hooks/employee";
import {EmployeeChart, EmployeeImage} from "./molecules";

export default function Metrics(props) {
	const { employeeDetail } = useSelector(state => state.employeeState);
	const { 
		name, image, inspectionsCompleted, totalInspections, openIssues, lastLogin, sites 
	} = useEmployeeMetrics(employeeDetail);

	

	return (
		<div className="section-container metrics">
			<div>
				<p className="typo-title" style={{margin: 0}}>{name}</p>
				<Progress percent={30} />
			</div>
			<div className="metrics-middle">
				<EmployeeImage image={image}/>
				<EmployeeChart data={inspectionsCompleted} />
			</div>
			
			<div className="metrics-bottom">
				<div className="metrics-field">
					<p className="typo-label">Total Inspections</p>
					<p className="typo-text">{totalInspections}</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Open Issues</p>
					<p className="typo-text">{openIssues}</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Last Login</p>
					<p className="typo-text">{lastLogin}</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Sites</p>
					<p className="typo-text">{sites}</p>
				</div>
			</div>
			
		</div>
	)
}