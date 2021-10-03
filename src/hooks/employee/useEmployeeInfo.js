import { useEffect, useState } from "react";


export default function useEmployeeInfo(employeeDetail) {
	const [info, setInfo] = useState({});
	useEffect(() => {
		let mounted = true;
		mounted && employeeDetail?.details && setInfo(employeeDetail.details);

		return mounted = false;
	}, [employeeDetail])

	return info;
}