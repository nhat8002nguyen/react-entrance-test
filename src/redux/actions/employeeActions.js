import c from "../constants/actionConstants";
import { employeeDetails } from "../../Data.json";

export const getEmployeeDetails = (id) => {
	return {
		type: c.GET_EMPLOYEE_DETAILS,
		payload: employeeDetails.find(item => item.id == id)
	}
}