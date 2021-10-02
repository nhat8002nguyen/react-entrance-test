import React from "react";
import { useSelector } from "react-redux";
import { EmployeeTable, HomeSider } from "./components/main";
import { PlusCircleFilled } from "@ant-design/icons";


export default function Main(props) {
	const { showFilters } = useSelector(state => state.homeState)

	return (
		<div className="Home-container">
			{showFilters && <HomeSider />}
			<EmployeeTable />
			<PlusCircleFilled className="big-add-icon" style={{fontSize: 50}}/>
		</div>
	)
}