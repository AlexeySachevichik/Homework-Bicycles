import React, {Component} from "react";
import "./style.scss";
// import func from "libs/func";

import Menu from "components/menu"
// import Sidebar from "components/sidebar"
// import Content from "components/content"
import Footer from "components/footer"
import BikeDetails from "components/bike-details";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "5ca0ea2b4f4bae2c1407935f"
		};
	}



	render() {
		return (
			<div className="page">
				<header className="page__header">
					<Menu />
				</header>

				<BikeDetails id={this.state.id} />

				{/*
				<section className="page__body">
					<div className="body__sidebar">
						<Sidebar />
					</div>
					<div className="body__content">
						<Content />
					</div>
				</section>
				*/}
				<footer className="page__footer">
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;