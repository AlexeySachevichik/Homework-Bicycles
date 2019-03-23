import React, { Component } from 'react';
import './style.scss';


class Menu extends Component {
	render(){

		return (
			<div className="menu">
				<div className="menu__logo">
					<a href="./" title="Home page">bicycles</a>
				</div>
				<div className="menu__nav">
					<button className="nav__button nav__button-active">Каталог</button>
					<button className="nav__button">Объявления</button>
					<button className="nav__button">Корзина</button>
				</div>
			</div>
		)
	}
}

export default Menu;