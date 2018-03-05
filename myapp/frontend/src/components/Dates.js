import React from "react";
import request from "../../node_modules/superagent/superagent";
import './newdate.css';

export default class Dates extends React.Component {

	constructor(props) {
    super(props);

    this.state={
  
       _id: {
        "$oid": null
      },
      sport: null,
      numPeople: null,
      place:null,
      comment:null,
      invite:null,
      reg:['hola'],
      
    };

    this.register = this.register.bind(this);
  }

  register(event)
  {
    console.log("Registradose"); 
    console.log(this.props);

    request
    .post('/api')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({ 
        _id: this.props.id,
        sport: this.props.sport, 
        numPeople: this.props.numPeople,
        place: this.props.place,
        comment: this.props.comment,
        invite: this.props.invite,
        reg: this.props.reg.push("nuevo")
    })
    .end(function(err, res){
        console.log(res.text);
    });
  }


  render() {
  	return (
  	<div className="everything">
    <div className="col-sm-6">
      <p>{this.props.id}</p>
  		<p><span>Sport:</span> {this.props.sport}</p>
  		<p><span>Number of people:</span> {this.props.numPeople}</p>
  		<p><span>Place:</span> {this.props.place}</p>
  		<p><span>Comment: </span>{this.props.comment}</p>
  		<p><span>Invite: </span>{this.props.invite}</p>
      <p><span>The people registered are: </span> </p> 
      {console.log(this.props)}
      <p>
            {this.props.reg.map((d,index) => {
              return <span> {d} </span>
              })}
      </p>
      <button onClick={this.register}>Register here!</button>
    </div>  
    </div>
   );
  }
}