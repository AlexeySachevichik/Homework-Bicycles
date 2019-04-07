import React, {Component} from "react";
import Tr from "./tr";

class Tbody extends Component {
	render() {
		const {title, titles, values} = this.props;

		let views = [];
		for(let key in values ){
			if( values[key] !== "" ){
				views.push({
					key: key,
					title: titles[key].title,
					descr: titles[key].description,
					unit: titles[key].unit,
					value: values[key]
				});
			}
		}

		return (
			<tbody>
				<tr><th colSpan="2" className="table__title"><h3>{title}</h3></th></tr>
				{views.map( item => {
					return <Tr key={item.key} title={item.title} value={item.value} unit={item.unit} />
				})}
			</tbody>
		);
	}
}

export default Tbody;