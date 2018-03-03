import React, { Component } from "react";
import './newdate.css';
import Sport from "./Sport";
import NumPeople from "./NumPeople";
import Place from "./Place";
import Comment from "./Comment";
import Invite from "./Invite";

class NewDate extends Component {
  render() {
    return (
    	<div className="everything">
    		<h1>Create a new Sport's Date</h1>
    		<Sport></Sport>
    		<NumPeople></NumPeople>
    		<Place></Place>
    		<Comment></Comment>
    		<Invite></Invite>
    	</div>
    );
  }
}

export default NewDate;