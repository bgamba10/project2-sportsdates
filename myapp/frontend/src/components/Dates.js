import React from "react";


export default class Dates extends React.Component {

	constructor(props) {
    super(props);

    this.state={
      sport: null,
      numPeople: null,
      place:null,
      comment:null,
      invite:null, 
      registered:[]
    };
  }

  register(event)
  {
    console.log("Registradose"); 
  }


  render() {
  	return (
  	<div>
  		<p>Sport: {this.props.sport}</p>
  		<p>Number of people: {this.props.numPeople}</p>
  		<p>Place: {this.props.place}</p>
  		<p>Comment: {this.props.comment}</p>
  		<p>Invite: {this.props.invite}</p>
      <p>The people registered are:  </p> 
      <p>
            {this.state.registered.map((d,index) => {
              return <span> {d} </span>
              })}
      </p>
      <button onClick={this.register}>Register here!</button>
    </div>
   );
  }
}