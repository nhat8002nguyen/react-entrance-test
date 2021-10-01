import React from "react";
import { useSelector } from "react-redux";


export default function ETableHeader({fields, selectedNum}) {
	const { showSelection } = useSelector(state => state.homeState);

	return (
		<div className="etable-header">
			{fields.map((item, index) => {
				return <div key={index} style={{flex: item.flex, minWidth: item.flex*60}}>
					<p className="typo-label" >{item.name}</p>
				</div>
			})}	
			{showSelection && <div style={{flex: 0.5, minWidth: 30}}>
				<p className="typo-label">{`select(${selectedNum})`}</p>
			</div>}
		</div>
	)
}