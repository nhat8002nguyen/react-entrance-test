import React from "react";
import {
	MenuOutlined, DownOutlined, WeiboCircleOutlined, FilterFilled, MoreOutlined
} from '@ant-design/icons'
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function AppHeader() {

	return (
		<div className="App-header">
			<div className="App-header-top">
				<div className="App-header-menu">
					<MenuOutlined className="color-primary" style={{fontSize: 20}}/>
					<p>PENSKE</p>
				</div>
				<div className="App-header-user">
					<WeiboCircleOutlined style={{fontSize: 25}} />
					<p className="App-header-user-name">Nhat nguyen</p>
					<DownOutlined />
				</div>
			</div>
			<div className="App-header-bottom">
				<div className="Bread-crumb">
					<p className="Bread-crumb-first" >Employees</p>
					<p>142 Employees</p>
				</div>
				<div className="App-header-bottom-icons">
					<FilterFilled style={{fontSize: 20, color: "white", cursor: "pointer"}} />
					<MoreOutlined style={{fontSize: 20, color: "white", cursor: "pointer"}} />
				</div>
			</div>
		</div>
	)
}