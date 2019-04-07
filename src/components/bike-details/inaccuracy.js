import React, {Component} from "react";
import "./style.scss";

class Inaccuracy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bike: this.props.bike,
			showForm: false,
			email: "",
			message: ""
		};

		this.toggleForm = this.toggleForm.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.sendInaccuracy = this.sendInaccuracy.bind(this);
	}

	toggleForm(){
		this.setState({ showForm: !this.state.showForm });
	}

	handleChangeEmail(event){
		this.setState({ email: event.target.value });
	}

	handleChangeMessage(event){
		this.setState({ message: event.target.value });
	}

	sendInaccuracy(event){
		event.preventDefault();
		const mail = {
			email: this.state.email,
			message: this.state.message,
			bike: this.state.bike
		};
		this.setState({
			email: "",
			message: ""
		});
		console.log("CLICK SEND");
		console.log(this.state);
		console.log(mail);
	}

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

export default Inaccuracy;