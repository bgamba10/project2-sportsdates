import React, { Component } from 'react';
import './index.css';

import Dates from "./components/Dates";

class DatesList extends Component {

 constructor(props) {
  super(props);

  this.state={
    dates:[{
      sport: 'tennis',
      numPeople: '10',
      place: 'villavo', 
      comment: 'no comments',
      invite: ':('
    },
    {
      sport: 'Basket',
      numPeople: '8',
      place: 'villavo', 
      comment: 'no comments',
      invite: ':('
    }
    ]
  };
}

render() {

    return (
      <div className="App">
          <h1 className="App-title">Available dates </h1>
          <ul>
            {this.state.dates.map((d,index) => {
              return <Dates sport = {d.sport} numPeople = {d.numPeople} place = {d.place} comment = {d.comment} invite = {d.invite} key = {index} /> 
            })}
          </ul>
      </div>


    );
}
}
export default DatesList;


