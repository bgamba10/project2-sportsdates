import React, { Component } from "react";


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
      <p> Age:{this.state.age}</p>
      <p> Mail:{this.state.age}</p>
      <p> Gender:{this.state.age}</p>
      </div>
      );
}
}

export default Profile;