import c from "../constants/actionConstants";

const initialState = {
	employeeDetail: {},
};

export default function employeeReducer(state = initialState, action) {
	switch(action.type) {
		case c.GET_EMPLOYEE_DETAILS:
			return {...state, employeeDetail: action.payload};
		default: 
			return state;
	}
}