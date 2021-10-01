import React from "react";
import { useSelector } from "react-redux";

import { EmployeeTable, HomeSider } from "./components/main";


export default function Main(props) {
	const { showFilters } = useSelector(state => state.homeState)

	return (
		<div className="Home-container">
			{showFilters && <HomeSider />}
			<EmployeeTable />
		</div>
	)
}