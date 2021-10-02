import React from "react";
import { useSelector } from "react-redux";
import { CheckCircleFilled } from "@ant-design/icons";
import { useHistory } from "react-router";


export default function EmployeeItem(props) {
	const history = useHistory();
	const { employeeItemPropotion: flexes, showSelection } = useSelector(state => state.homeState)
	const {image, name, employeeId, position, department, email} = props;

	const handleClickItem = () => props.onItemClick(props.employeeId);

	const handleSelectItem = () => {
		props.onItemSelect(props.employeeId);
	}

	const handleDoubleClickItem = () => {
		history.push(`/employees/${props.employeeId}`);
	}

	return (
		<div className="employee-item etable-header" onClick={handleClickItem} onDoubleClick={handleDoubleClickItem}
			style={props.employeeId === props.focusId ? {backgroundColor: "#E5CDD9"} : null}	
		>
			<div style={{flex: flexes[0].flex}}>
				<img src={image} width={40} height={40} style={{borderRadius: "50%", flex: flexes[0].flex}}></img>
			</div>
			<div style={{flex: flexes[1].flex, minWidth: flexes[1].flex*60}}>
				<p className="typo-text" style={{fontWeight: "bold", }}>{name}</p>
			</div>
			<div style={{flex: flexes[2].flex, minWidth: flexes[2].flex*60}}>
				<p className="typo-text">{employeeId}</p>
			</div>
			<div style={{flex: flexes[3].flex, minWidth: flexes[3].flex*60}}>
				<p className="typo-text">{position}</p>
			</div>
			<div style={{flex: flexes[4].flex, minWidth: flexes[4].flex*60}}>
				<p className="typo-text">{department}</p>
			</div>
			<div style={{flex: flexes[5].flex, minWidth: flexes[5].flex*60}}>
				<p className="typo-text">{email}</p>
			</div>
			{showSelection &&<div style={{flex: 0.5, minWidth: 30}}>
				<CheckCircleFilled 
					style={
						props.selectedEmployees?.find(item => item.id === props.employeeId)?.isSelected 
						? {color: "#c74287", fontSize: 25} : {fontSize: 25}} 
					onClick={handleSelectItem}/>
			</div>}
			
		</div>
	)
}