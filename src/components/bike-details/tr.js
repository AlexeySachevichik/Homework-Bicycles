import React, {Component} from "react";
import func from "libs/func";

class Tr extends Component {
	render() {
		const {title, value, unit} = this.props;

		let str;
		if(value === true) str = func.icon(value);
		else if(Array.isArray(value) && unit !== ""){
			str = (value.length > 1) ? `${value[0]} - ${value[1]} ${unit}` : `${value[0]} ${unit}`;
		} 
		else if(Array.isArray(value)) str = `${value[0]} - ${value[1]}`;
		else if(unit !== "") str = `${func.icon(value)} ${unit}`;
		else str = func.icon(value);

		return (
			<tr>
				<td>{title}</td>
				<td><b>{str}</b></td>
			</tr>
		);
	}
}

export default Tr;