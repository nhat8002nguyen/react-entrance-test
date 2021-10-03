import React from "react";
import { useSelector } from "react-redux";
import useEmployeeInspections from "../../../hooks/employee/useEmployeeInspections";


export default function InspectionTable() {
	const { employeeDetail } = useSelector(state => state.employeeState);
	const inspections = useEmployeeInspections(employeeDetail);

	return (
		<div className="inspection-table">
			<table id="inspec-table-id">
				<thead>
					<tr id="table-header">
						<th className="typo-label">
							<p>#</p>
						</th>
						<th className="typo-label">
							<p>Check list</p>
						</th>
						<th className="typo-label">
							<p>Date</p>
						</th>
						<th className="typo-label">
							<p>Duration</p>
						</th>
					</tr>
				</thead>
				<tbody>
				{inspections.map((item, index) => (
					<tr key={item.id} className={index%2 === 0 ? "pink-background" : ""}>
						<td className="typo-text">{item.hashtag}</td>
						<td className="typo-text">{item.checkList}</td>
						<td className="typo-text">{item.date}</td>
						<td className="typo-text">{item.duration}</td>
					</tr>
				))}
				</tbody>
			</table>
		</div>
	)
}