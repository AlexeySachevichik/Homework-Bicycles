import React, {Component} from "react";
import {connect, PromiseState} from "react-refetch";
import Func from "libs/func";
import BikeDetails from "components/bike-details";
import "./style.scss";


class BikeWrapper extends Component {
    render() {

        const {response} = this.props;
        const allFetches = PromiseState.all([response]);

        // render the different promise states
        // вывод прелоадера
        if (allFetches.pending) {
          return <div className="loading__wrapper"></div>
        
        // вывод ошибки
        } else if (allFetches.rejected) {
          return <div className="error__wrapper">{allFetches.reason}</div>
        
        // после получения данных, вывод компанента
        } else if (allFetches.fulfilled) {

          // decompose the PromiseState back into individual
          const [bike] = allFetches.value;
          return (
            <BikeDetails {...bike} />
          );
        }
    }
}

export default connect(props => ({
  response: `${Func.host}/bike/get/${props.id}`
}))(BikeWrapper);