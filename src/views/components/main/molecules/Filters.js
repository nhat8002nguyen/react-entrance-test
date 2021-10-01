import React from "react";
import { useDispatch } from "react-redux";

import { filters } from '../../../../Data.json';
import { updateFilters } from "../../../../redux/actions/homeActions";
import EmployeeInput from "../../../atoms/EmployeeInput";

export default function Filters() {
	const dispatch = useDispatch();

	const handleInputChange = (id, value) => {
		if (id > 0 && value?.length >= 0) dispatch(updateFilters({id, value}))
	}

	return (
		<div className="filter-container">
			<p className="typo-title">Filters</p>
			{filters.map((filter, index) => 
				<EmployeeInput key={filter.id} {...filter} onInputChange={handleInputChange}/>
			)}
		</div>
	)
}