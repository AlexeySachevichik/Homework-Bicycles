import React, {Component} from "react";
import "./style.scss";

import Menu from "components/menu"
// import Sidebar from "components/sidebar"
// import Content from "components/content"
import Footer from "components/footer"
import BikeWrapper from "components/bike-wrapper";


class App extends Component {
	render() {

		const id = "5ca0ea2b4f4bae2c1407935f";

		return (
			<div className="page">
				<header className="page__header">
					<Menu />
				</header>
				<BikeWrapper id={id}/>
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