import React from "react";

import { Progress } from "antd";

export default function Metrics(props) {

	return (
		<div className="section-container metrics">
			<p className="typo-title" style={{margin: 0}}>John Smith</p>
			<Progress percent={30} />
			<div className="metrics-middle">
				<div className="metrics-image">
					<p>Image</p>
					<image></image>
				</div>
				<div className="metrics-completed">
					<p>completed</p>
					<image></image>
				</div>
			</div>
			
			<div className="metrics-bottom">
				<div className="metrics-field">
					<p className="typo-label">Total</p>
					<p clasName="typo-text">230</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Total</p>
					<p clasName="typo-text">230</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Total</p>
					<p clasName="typo-text">230</p>
				</div>
				<div className="metrics-field">
					<p className="typo-label">Total</p>
					<p clasName="typo-text">230</p>
				</div>
			</div>
			
		</div>
	)
}