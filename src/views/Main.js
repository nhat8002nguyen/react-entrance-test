import React from "react";

import { EmployeeTable, HomeSider } from "./components/main";


export default function Main(props) {

	return (
		<div className="Home-container">
			<HomeSider /> 
			<EmployeeTable />
		</div>
	)
}