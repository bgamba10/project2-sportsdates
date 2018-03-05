import React, { Component } from 'react';
import './components/newdate.css';

import Dates from "./components/Dates";

class DatesList extends Component {



   constructor(props) {
    super(props);

    this.state={
      dates:[]
    };
  }

  componentDidMount() {
    let me = this;
    fetch("api")
      .then((res) => {
        return res.json();
      })
      .then((info) => {
        {console.log("la info:"+info)}
        me.setState({dates : info});
        
      })
      .catch((err) => console.log(err) );
    
  }

  render() {

    return (
      <div className="everything">
          <h1 >Available dates</h1>
          <ul>
            {console.log(this.state)}
            {this.state.dates.map((d,index) => {
              return <Dates _id = {d._id} sport = {d.sport} numPeople = {d.numPeople} place = {d.place} comment = {d.comment} invite = {d.invite} reg = {d.reg} key = {index} /> 
            })}
          </ul>
      </div>

    );
  }
}
export default DatesList;


