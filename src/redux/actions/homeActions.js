import c from "../constants/actionConstants";
import { employeesTable, filters } from "../../Data.json";

export const fetchFilterData = () => {
	return {
		type: c.FETCH_FILTER_DATA,
		payload: filters
	}
}

export const toggleFilters = () => {
	return {
		type: c.TOGGLE_FILTERS
	}
}

export const fetchEmployees = () => {
	return {
		type: c.FETCH_EMPLOYEES,
		payload: {
			employeeList: employeesTable.employeeList, 
			employeeItemPropotion: employeesTable.employeeItemPropotion
		}
	}
}

export const updateFilters = ({id, value}) => {
	return {
		type: c.UPDATE_FILTERS,
		payload: {id, value}
	}
}

export const toggleSelect = () => {
	return {
		type: c.TOGGLE_SELECT,
	}
}

export const updateSelectedEmps = (employeeIds) => {
	return { type: c.UPDATE_SELECTED_EMPS, payload: employeeIds};
}

export const deleteSelectedEmps = () => {
	return { type: c.DELETE_SELECTED_EMPS }
}