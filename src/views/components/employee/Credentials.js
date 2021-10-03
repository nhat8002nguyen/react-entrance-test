import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "antd";

import { EmployeeInput } from "../../atoms";
import { useEmployeeCredentials } from "../../../hooks/employee";


export default function Credentials(props) {
	const { employeeDetail } = useSelector(state => state.employeeState);
	const {username, password, role, siteAccess, employeeId, pin, roleOptions, siteAccessOptions} = useEmployeeCredentials(employeeDetail);
	
	return (
		<div className="section-container">
			<p className="typo-title" style={{margin: 0}}>Credentials</p>
			<Progress percent={30}/>
			<div className="details">
				<div className="section-row">
					<EmployeeInput name="Username" type="text" defaultValue={username}/>
					<EmployeeInput name="Role" type="select" defaultValue={role} 
						options={roleOptions}	/>
					<EmployeeInput name="Employee ID" type="text" defaultValue={employeeId} />
				</div>
				<div className="section-row">
					<EmployeeInput name="password" type="password" defaultValue={password}/>
					<EmployeeInput name="Site Access" type="select" defaultValue={siteAccess}
					options={siteAccessOptions}/>
					<EmployeeInput name="Pin" type="password" defaultValue={pin} />
				</div>
			</div>
		</div>
	)
}