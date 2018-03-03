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
  		<p>numPeople: {this.props.numPeople}</p>
  		<p>place: {this.props.place}</p>
  		<p>comment: {this.props.comment}</p>
  		<p>invite: {this.props.invite}</p>
    </div>
   );
  }
}