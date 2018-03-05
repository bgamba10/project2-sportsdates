import React, { Component } from "react";
import './newdate.css';

class Profile extends Component {

 constructor(props) {
  super(props);


  this.state={
      name: null,
      age: null,
      mail:null,
      gender:null
};


}



render() {
    return (
    	<div className="everything">
      <h1>{this.state.name}</h1>
      <p><span> Age: </span>{this.state.age}</p>
      <p><span> Mail:</span>{this.state.mail}</p>
      <p><span> Gender:</span>{this.state.gender}</p>
      </div>
      );
}
}

export default Profile;