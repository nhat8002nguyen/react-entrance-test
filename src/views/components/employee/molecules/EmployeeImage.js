import React from 'react';
import { PlusCircleFilled } from "@ant-design/icons";

const EmployeeImage = ({image}) => {

	return (
		<div className="metrics-image-area">
			<p className="typo-text">Employee Image</p>
			<div className="metrics-add-image">
				<div className="metrics-image">
					<img src={image}></img>
				</div>
				<PlusCircleFilled className="color-primary"
					style={{fontSize: 25, position: "relative", bottom: 25, cursor: "pointer"}}/>
			</div>
		</div>
	);

}

export default EmployeeImage;