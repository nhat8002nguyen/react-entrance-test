export const selectFilters = (originalList, filters) => {
	let [ name, employeeId, department, more ] = Object.values(filters);
	let filteredList = [];
	if (originalList?.length === 0 || originalList?.length === undefined) 
		return [];

	filteredList = originalList.filter(item => {
		let isMatch = true;
		if (name?.length > 0) {
			if (!item.name?.toLowerCase().includes(name.toLowerCase())) isMatch = false;
		}
		if (employeeId?.length > 0 && employeeId !== "ID") {
			if (!item.employeeId?.toString().includes(employeeId.toString())) isMatch = false;
		}
		if (department?.length > 0 && department !== "Choice") {
			if (!item.department?.includes(department)) isMatch = false;
		}
		if (more?.length > 0 && more !== "Choice" && (!item.position?.includes(more) && !item.email.includes(more)))
			isMatch = false;
		
		return isMatch;
	});
		
	return filteredList;
}