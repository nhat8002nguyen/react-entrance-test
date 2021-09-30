import React from "react";

import { Layout } from 'antd';

import { AppHeader, AppFooter, EmployeeTable, HomeSider } from "./components/main";


export default function Main(props) {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div>
			<Layout>
				<Header > <AppHeader /> </Header>
				<Layout>
					<Sider> <HomeSider /> </Sider>
					<EmployeeTable />
				</Layout>
				<Footer> <AppFooter /> </Footer>
			</Layout>
		</div>
	)
}