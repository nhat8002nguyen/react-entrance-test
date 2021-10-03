import { useEffect, useState } from "react";


export default function useEmployeeMetrics(employeeDetail) {
	const [metrics, setMetrics] = useState({});
	useEffect(() => {
		let mounted = true;
		mounted && employeeDetail?.metrics && setMetrics(employeeDetail.metrics);

		return mounted = false;
	}, [employeeDetail])

	return metrics;
}