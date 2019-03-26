import React, { Component } from 'react';
import './style.scss';

import Menu from 'components/menu'
import Sidebar from 'components/sidebar'
import Content from 'components/content'
import Footer from 'components/footer'

class App extends Component {
	render() {

		// console.log(Random.getListBikeStringify(1));

		return (
			<div className="page">
				<header className="page__header">
					<Menu />
				</header>
				<section className="page__body">
					<div className="body__sidebar">
						<Sidebar />
					</div>
					<div className="body__content">
						<Content />
					</div>
				</section>
				<footer className="page__footer">
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;
