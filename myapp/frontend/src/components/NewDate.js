import React, { Component } from "react";
import './newdate.css';
import Sport from "./Sport";
import NumPeople from "./NumPeople";
import Place from "./Place";
import Comment from "./Comment";
import Invite from "./Invite";

class NewDate extends Component {

 constructor(props) {
  super(props);


  this.state={
    sports:[
    'Tennis',
    'Basket'
    ],
    numP: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]
};


}



render() {
    return (
    	<div className="everything">
      <h1>Create a new Sport's Date</h1>

      
      <Sport sports={this.state.sports}></Sport> 

      <NumPeople numP={this.state.numP}></NumPeople>
      <Place></Place>
      <Comment></Comment>
      <Invite></Invite>
      <button type="submit">Get this game started!</button>
      </div>
      );
}
}

export default NewDate;