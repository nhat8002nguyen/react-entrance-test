import { useEffect, useState } from "react";


export default function useEmployeeCredentials(employeeDetail) {
	const [credentials, setCredentials] = useState({});
	useEffect(() => {
		let mounted = true;
		mounted && employeeDetail?.credentials && setCredentials(employeeDetail.credentials);

		return mounted = false;
	}, [employeeDetail])

	return credentials;
}