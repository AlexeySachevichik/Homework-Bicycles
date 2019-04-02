import React, {Component} from "react";
import func from "libs/func";

class Tr extends Component {
	render() {
		const {title, value} = this.props;

		return (
			<tr>
				<td>{title}</td>
				<td><b>{func.icon(value)}</b></td>
			</tr>
		);
	}
}

export default Tr;