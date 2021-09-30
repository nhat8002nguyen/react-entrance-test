import React from "react";
import { Layout } from 'antd';
import ETableHeader from "./molecules/ETableHeader";
import EmployeeItem from "./molecules/EmployeeItem";

export default function EmployeeTable() {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div className="Employee-table">
			<ETableHeader />
			<div> 
				<EmployeeItem />	
				<EmployeeItem />	
				<EmployeeItem />	
			</div>
		</div>
	)
}