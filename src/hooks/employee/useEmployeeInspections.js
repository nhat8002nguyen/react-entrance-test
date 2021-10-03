import { useEffect, useState } from "react";


export default function useEmployeeInspections(employeeDetail) {
	const [inspections, setInspections] = useState([]);
	useEffect(() => {
		let mounted = true;
		mounted && employeeDetail?.inspections && setInspections(employeeDetail.inspections);

		return mounted = false;
	}, [employeeDetail])

	return inspections;
}