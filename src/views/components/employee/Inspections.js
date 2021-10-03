import React from "react";
import { Progress } from "antd";

import {Button} from "../../atoms";
import InspectionTable from "./InspectionTable";

export default function Inspections(props) {

	return (
		<div className="section-container inspections-container">
			<p className="typo-title" style={{margin: 0}}>Inspections</p>
			<Progress percent={30}/>
			<div className="inspections">
				<div className="inspections-buttons">
					<Button name="Inspections" style={{backgroundColor: "#913062"}}/>
					<Button name="Issues"/>
				</div>
				<InspectionTable />
			</div>
		</div>
	)
}	
