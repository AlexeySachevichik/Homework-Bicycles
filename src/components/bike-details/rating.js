import React, {Component} from "react";
import "./style.scss";

class Rating extends Component {
	render() {

		return(
			<div className="inaccuracy">

				<div className="navigation__wrapper">
					<button className="nav__button">Наверх</button>
					<button className={`nav__button ${this.state.showForm ? "active" : ""}`} onClick={this.toggleForm}>Заметили неточность в описании?</button>
				</div>

				{ this.state.showForm ? (
					<form className="form__wrapper">
						<div className="row">
							<label htmlFor="email">E-mail</label>
							<input
								id="email"
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChangeEmail}
							/>
						</div>
						<div className="row">
							<label htmlFor="message">Опишите неточность</label>
							<textarea
								id="message"
								rows="5"
								cols="45"
								name="message"
								value={this.state.message}
								onChange={this.handleChangeMessage}
							/>
						</div>
						<div className="row row__submit">
						<div></div>
						<div>
							<button
								className="nav__button submit__button"
								onClick={this.sendInaccuracy}
							>Отправить</button>
						</div>
						</div>
					</form>
				) : null }
			</div>
		);
	}
}

export default Rating;