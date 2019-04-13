import React, {Component} from "react";
import "./style.scss";
// import func from "libs/func";

import Menu from "components/menu"
import Sidebar from "components/sidebar"
import Content from "components/content"
import Footer from "components/footer"
import BikeDetails from "components/bike-details";


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "5ca0ea2b4f4bae2c1407935f",
			showBikeDetail: false,
			showBikeList: true,
		};
	}



	render() {
		return (
			<div className="page">
				<header className="page__header">
					<Menu />
				</header>

				{ this.state.showBikeDetail ? <BikeDetails id={this.state.id} /> : null}
				
				{ this.state.showBikeList ? (
					<section className="page__body">
						<div className="body__sidebar">
							<Sidebar />
						</div>
						<div className="body__content">
							<Content />
						</div>
					</section>
				) : null}

				<footer className="page__footer">
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;