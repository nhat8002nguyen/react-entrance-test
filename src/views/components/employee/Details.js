import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "antd";

import { EmployeeInput } from "../../atoms";
import { useEmployeeInfo } from "../../../hooks/employee";


export default function Details(props) {
	const { filterData } = useSelector(state => state.homeState);
	const { employeeDetail } = useSelector(state => state.employeeState);
	const {firstName, lastName, email, department, phone, position} = useEmployeeInfo(employeeDetail);
	
	return (
		<div className="section-container">
			<p className="typo-title" style={{margin: 0}}>Details</p>
			<Progress percent={30}/>
			<div className="details">
				<div className="section-row">
					<EmployeeInput name="First name " type="text" defaultValue={firstName}/>
					<EmployeeInput name="Email" type="text" defaultValue={email}/>
					<EmployeeInput name="Department" defaultValue={department} type="select"
						options={filterData?.find(i => i.name === "Department")?.options}
					/>
				</div>
				<div className="section-row">
					<EmployeeInput name="Last name" defaultValue={lastName} type="text"/>
					<EmployeeInput name="Phone" defaultValue={phone} type="text"/>
					<EmployeeInput name="Position" defaultValue={position} type="select"
						options={filterData?.find(i => i.name === "More")?.options}	
					/>
				</div>
			</div>
		</div>
	)
}