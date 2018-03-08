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
        me.setState({dates : info});
        
      })
      .catch((err) => console.log(err) );
    
  }
   
   /* Considero que el uso de este componente junto con el de "Dates" es adecuado y muy bien implementado. 
   Me parece muy bueno el diseño de "arquitectura manejado en la medida de obtencion de los datos para cada date.
   Tal vez seria bueno un poco de diseño en el front, de manera que sea visualmente mas entendible.*/

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


