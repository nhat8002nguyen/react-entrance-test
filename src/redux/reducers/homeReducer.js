import c from "../constants/actionConstants";

const initialState = {
	filterData: [],		// include type of filter and options from json data
	showFilters: false,
	filters: {},
	employeeList: [],
	employeeItemPropotion: [],	// propotion of a field in a row
	showSelection: false,
	selectedEmps: [],
}

export default function homeReducer(state = initialState, action) {
	switch(action.type) {
		case c.FETCH_FILTER_DATA:
			const initFilters = {};
			action.payload.forEach(filter => {
				initFilters[filter.id] = filter.default;
			});

			return {
				...state,
				filterData: action.payload,
				filters: initFilters,
			}
		case c.TOGGLE_FILTERS:
			// reset filters when closing filter sider
			return {
				...state, 
				filters: state.showFilters ? {} : state.filters, 
				showFilters: !state.showFilters
			};
		case c.FETCH_EMPLOYEES:
			return {
				...state, 
				employeeList: action.payload.employeeList, 
				employeeItemPropotion: action.payload.employeeItemPropotion
			};
		case c.UPDATE_FILTERS:
			return {...state, filters: {...state.filters, [action.payload.id]: action.payload.value}};
		case c.TOGGLE_SELECT:
			return {...state, showSelection: !state.showSelection};
		case c.UPDATE_SELECTED_EMPS:
			return {...state, selectedEmps: action.payload};
		case c.DELETE_SELECTED_EMPS:
			let newEmployeeList = [...state.employeeList];
			const selectedEmps = state.selectedEmps;
			if (selectedEmps?.length === newEmployeeList.length) {
				newEmployeeList = [];
			}
			selectedEmps?.forEach(sEmp => {
				newEmployeeList = newEmployeeList.filter(e => e.employeeId !== sEmp.id);
			});
			return {...state, selectedEmps: [], employeeList: newEmployeeList};
		default:
			return state;
	}
}