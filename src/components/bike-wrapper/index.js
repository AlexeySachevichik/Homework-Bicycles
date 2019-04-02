import React, {Component} from "react";
import {connect, PromiseState} from "react-refetch";
import Func from "libs/func";
import BikeDetails from "components/bike-details";
import "./style.scss";


class BikeWrapper extends Component {
    render() {

        const {bike_get, description_get} = this.props;
        const allFetches = PromiseState.all([bike_get, description_get]);

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
          const [bike, description] = allFetches.value;
          return (
            <BikeDetails bike={bike} description={description} />
          );
        }
    }
}

export default connect(props => ({
  bike_get: `${Func.host}/bike/get/${props.id}`,
  description_get: `${Func.host}/description/get`
}))(BikeWrapper);