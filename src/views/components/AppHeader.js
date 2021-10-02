import React, { useEffect, useState } from "react";
import {
	MenuOutlined, DownOutlined, WeiboCircleOutlined, FilterFilled, MoreOutlined, CheckOutlined
} from '@ant-design/icons'
import { Menu, Dropdown, Popconfirm, Button  } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteSelectedEmps, fetchFilterData, toggleFilters, toggleSelect } from "../../redux/actions/homeActions";
import { CSVLink } from "react-csv";



export default function AppHeader() {
	const dispatch = useDispatch();
	const { employeeList, showSelection, selectedEmps, employeeItemPropotion } = useSelector(state => state.homeState)
	const [csvReport, setCSVReport] = useState({ data: [], headers: [], filename: ""});

	const handleOnFilterClick = () => {
		dispatch(toggleFilters());
		dispatch(fetchFilterData());
	}

	const handleSelectClick = () => {
		dispatch(toggleSelect());
	}

	const handleDeleteClick = () => {
		dispatch(deleteSelectedEmps());
	}
	useEffect(() => {
		let mounted = true;

		const createCsvReport = () => {
		let headers, data;
			if (employeeList?.length > 0) {
				headers = Object.keys(employeeList[0]).map((key, i) => (
					{ label: employeeItemPropotion[i].name, key: key }
				));

				if (selectedEmps?.length > 0) {
					data = selectedEmps.map(item => {
						return employeeList.find(em => em.employeeId === item.id);
					})
				} else {
					data = [...employeeList];
				}
			}
			mounted && setCSVReport({ data: data, headers: headers, filename: 'Download.csv' })
		};

		createCsvReport();

		return mounted = false;

	}, [employeeList, selectedEmps, employeeItemPropotion])
	

	const menu = (
		<Menu>
			<Menu.Item key="select-columns" className="typo-text" onClick={handleSelectClick}>
					{"Select Columns \t"} 
					{showSelection && <CheckOutlined />}
			</Menu.Item>
			<Menu.Item key="de" className="typo-text">
				
				{csvReport.data !== undefined ? <CSVLink {...csvReport}>Download Employees</CSVLink> : "Dowload Employees"}
			</Menu.Item>
			<Menu.Item key="ie" className="typo-text">
					Import Employees
			</Menu.Item>
			<Menu.Item key="ee" className="typo-text">
				<Popconfirm
					placement="leftBottom"
					title={"Are you sure to delete !"}
					onConfirm={handleDeleteClick}
					okText="yes"
					cancelText="No"
				>
					{"Delete Employees"}
				</Popconfirm>
			</Menu.Item>
		</Menu>
	);

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
					<p>{employeeList?.length > 0 ? `${employeeList.length} Employees` : "Not found employees"}</p>
				</div>
				<div className="App-header-bottom-icons">
					<FilterFilled style={{fontSize: 20, color: "white", cursor: "pointer"}} onClick={handleOnFilterClick}/>
					<Dropdown overlay={menu} placement="bottomLeft" trigger="click">
						<MoreOutlined style={{fontSize: 20, color: "white", cursor: "pointer"}} />
      		</Dropdown>
				</div>
			</div>
		</div>
	)
}