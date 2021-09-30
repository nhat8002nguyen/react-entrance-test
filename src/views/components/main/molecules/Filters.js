import React from "react";

import { filters } from '../../../../Data.json';
import EmployeeInput from "../../../atoms/EmployeeInput";

export default function Filters() {

	return (
		<div className="filter-container">
			<p className="typo-title">Filters</p>
			{filters.map((filter, index) => 
				<EmployeeInput key={filter.id} {...filter}/>
			)}
		</div>
	)
}