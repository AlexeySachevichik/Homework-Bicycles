import React, { Component } from 'react';
import './style.scss';
import { Api } from 'api';

import Menu from 'components/menu'
import Sidebar from 'components/sidebar'
import Content from 'components/content'

class App extends Component {
  render() {

    console.log(Api.random.getListBike(1));

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
      </div>
    );
  }
}

export default App;
