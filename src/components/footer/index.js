import React, { Component } from 'react';
import './style.scss';

class Footer extends Component {
	render(){

		return (
			<div className="footer">
				<div className="footer__container">
					<div className="footer__links">
						<div className="footer__social">
							<a href="mailto:roim@ya.ru" title="Send mail">Mail</a>
							<a href="https://vk.com/verespro" title="VK">VK</a>
							<a href="tg://resolve?domain=verespro" title="Telegram">Telegram</a>
							<a href="skype:+375298096529?call" title="Skype">Skype</a>
						</div>
						<div className="footer__copyright">&#169; Aliaksei Sachavichyk {(new Date()).getFullYear()}</div>
					</div>
					<hr/>
					<div className="footer_text">
						<p>Вышеприведенная информация получена из открытых источников, в том числе с официальных сайтов и из каталогов. Поскольку мы не можем гарантировать 100%-ную точность и полноту описаний товаров, ОБЯЗАТЕЛЬНО уточняйте у продавца важные для вас параметры и осматривайте товар при получении. После оплаты вернуть или обменять неподходящий товар будет проблематично.</p>
						<p>Все опубликованные в данном каталоге материалы являются собственностью ООО «Онлайнер», любая публикация или копирование (полное или частичное) без предварительного согласия запрещены.</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Footer;