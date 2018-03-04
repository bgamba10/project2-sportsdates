import React from "react";


export default class Dates extends React.Component {

	constructor(props) {
    super(props);

    this.state={
      sport: null,
      numPeople: null,
      place:null,
      comment:null,
      invite:null
    };
  }


  render() {
  	return (
  	<div>
  		<p>Sport: {this.props.sport}</p>
  		<p>Number of people: {this.props.numPeople}</p>
  		<p>Place: {this.props.place}</p>
  		<p>Comment: {this.props.comment}</p>
  		<p>Invite: {this.props.invite}</p>
    </div>
   );
  }
}