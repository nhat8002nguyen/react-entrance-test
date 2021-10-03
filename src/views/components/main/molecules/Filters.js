import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateFilters } from "../../../../redux/actions/homeActions";
import EmployeeInput from "../../../atoms/EmployeeInput";

export default function Filters() {
	const dispatch = useDispatch();
	const { filterData } = useSelector(state => state.homeState);

	const handleInputChange = (id, value) => {
		if (id > 0 && value?.length >= 0) dispatch(updateFilters({id, value}))
	}


	return (
		<div className="filter-container">
			<p className="typo-title">Filters</p>
			{filterData.map((filter) => 
				<EmployeeInput key={filter.id} {...filter} defaultValue={filter.default} onInputChange={handleInputChange}/>
			)}
		</div>
	)
}