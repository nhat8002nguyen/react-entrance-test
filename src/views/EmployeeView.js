import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getEmployeeDetails } from "../redux/actions/employeeActions";

import {Metrics, Credentials, Details, Inspections} from "./components/employee";

export default function EmployeeView(props) {
	const dispatch = useDispatch();
	const { id } = useParams();

	useEffect(() => {
		let mounted = true;
		id > 0 && mounted && dispatch(getEmployeeDetails(id));

		return mounted = false;
	}, []);

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