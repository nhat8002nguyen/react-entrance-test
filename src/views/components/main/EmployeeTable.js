import React, { useEffect, useState } from "react";
import ETableHeader from "./molecules/ETableHeader";
import EmployeeItem from "./molecules/EmployeeItem";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../../selectors";
import { updateSelectedEmps } from "../../../redux/actions/homeActions";

const defaultFields = [{ name: "Image", flex: 1 }, { name: "Image", flex: 1 },{ name: "Image", flex: 1 },
	{ name: "Image", flex: 1 },{ name: "Image", flex: 1 },{ name: "Image", flex: 1 },];

export default function EmployeeTable() {
	const dispatch = useDispatch();
	const { employeeList, employeeItemPropotion, filters, showSelection } = useSelector(state => state.homeState)
	const [focusId, setFocusId] = useState(null);
	const [filteredList, setFilteredList] = useState([]);
	const [selectedEmployees, updateSelectedEmployees] = useState([]);

	// change the displayed list when original list or filter are changed
	useEffect(() => {
		let isMounted = true;
		if (employeeList?.length >= 0 && isMounted === true) {
			const filteringList = selectFilters(employeeList, filters);
			setFilteredList(filteringList);
		}
		return isMounted = false;
	}, [employeeList, filters])

	// reset selected employees when list change
	useEffect(() => {
		let isMounted = true;
		isMounted && updateSelectedEmployees(employeeList.map(emp => ({id: emp.employeeId, isSelected: false})));
		return isMounted = false;
	}, [employeeList])

	useEffect(() => {
		let isMounted = true;
		// reset selections when toggle select columns 
		isMounted && updateSelectedEmployees(employeeList.map(emp => ({id: emp.employeeId, isSelected: false})));
		return isMounted = false;
	}, [showSelection]);

	// update selected employees to redux
	useEffect(() => {
		let isMounted = true;
		isMounted && dispatch(updateSelectedEmps(selectedEmployees.filter(item => item.isSelected)));
		return isMounted = false;
	}, [selectedEmployees]);

	const focusItem = (id) => setFocusId(id);

	const selectItem = (id) => {
		updateSelectedEmployees(prev => 
			prev.map(item => item.id === id ? {...item, isSelected: !item.isSelected} : item));
	}

	return (
		<div className="Employee-table">
			<ETableHeader fields={employeeItemPropotion?.length > 0 ? employeeItemPropotion : defaultFields}
				selectedNum={selectedEmployees?.filter(item => item.isSelected).length}	
			/>
			<div className="employee-list"> 
				{filteredList.map(item => 
					<EmployeeItem key={item.employeeId} {...item} onItemClick={focusItem} focusId={focusId}
						onItemSelect={selectItem}	
						selectedEmployees={selectedEmployees}
					/>)}	
			</div>
		</div>
	)
}