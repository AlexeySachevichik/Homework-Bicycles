import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
	render(){

		return (
			<div className="footer">
				<div className="footer__links">
					<a href="mailto:roim@ya.ru" title="Send mail">Mail</a>
					<a href="https://vk.com/verespro" title="VK">VK</a>
					<a href="tg://resolve?domain=verespro" title="Telegram">Telegram</a>
					<a href="skype:+375298096529?call" title="Skype">Skype</a>
				</div>
				<div className="footer__copyright">
					&#169; Aliaksei Sachavichyk {(new Date()).getFullYear()}
				</div>
			</div>
		)
	}
}

export default Footer;