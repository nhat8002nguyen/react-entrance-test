import React from "react";

import { Layout } from 'antd';



export default function EmployeeView(props) {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<div>
			<Layout>
				<Header>Header</Header>
				<Layout>
					<Sider>Sider</Sider>
					<Layout>
						<Header>Header 1</Header>
						<Content>Content 1</Content>
					</Layout>
				</Layout>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	)
}