import React, { Component } from "react";
import request from "../../node_modules/superagent/superagent";
import './newdate.css';
import './css/main.css';



class NewDate extends Component {

 constructor(props) {
  super(props);


  this.state={
    sports:[
    "Select a sport...",
    "Softball",
    "Basketball",
    "Boxing",
    "Climbing",
    "Cycling",
    "Field Hockey",
    "Golf",
    "Gym Buddies",
    "Karate",
    "Rugby",
    "Football",
    "Swimming",
    "Table Tennis",
    "Tennis",
    "Track and Field",
    "Volleyball" 

    ],
    numP: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ],
    vSport:'',
    vNumPeople:'',
    vPlace:'',
    vComments:'',
    vInvite:''

};

this.handleChangeSport = this.handleChangeSport.bind(this);
this.handleChangeNumPeople = this.handleChangeNumPeople.bind(this);
this.handleChangePlace = this.handleChangePlace.bind(this);
this.handleChangeComments = this.handleChangeComments.bind(this);
this.handleChangeInvite = this.handleChangeInvite.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
console.log(this.props);

}   


handleChangeSport(event) {
    this.setState({vSport: event.target.value});
}

handleChangeNumPeople(event) {
    this.setState({vNumPeople: event.target.value});
}

handleChangePlace(event) {
    this.setState({vPlace: event.target.value});
}

handleChangeComments(event) {
    this.setState({vComments: event.target.value});
}

handleChangeInvite(event) {
    this.setState({vInvite: event.target.value});
}

handleSubmit(event) {
    alert('A Date was submitted: ' + this.state.vSport);
    event.preventDefault();
    var reg = ['Invitados','aqui']; 

    request
    .post('/api')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send({ sport: this.state.vSport, 
        numPeople: this.state.vNumPeople,
        place: this.state.vPlace,
        comment: this.state.vComments,
        invite: this.state.vInvite,
        reg:reg
    })
    .end(function(err, res){
        console.log(res.text);
    });
}


render() {
    return (
    	<div className="everything">
        <div className="container-contact2">

        <h1>Create a new Sport's Date</h1>

        <form onSubmit={this.handleSubmit} className="contact2-form validate-form" method="POST" action="/api">
        <div className="wrap-input2 input100-select">
        <span className="input2">Select which sport you want to play!</span>
        <div>  
        <select name="Sport" value={this.state.value} onChange={this.handleChangeSport}>
        {this.state.sports.map((d,index) => {
            return <option value={d} key = {index}> {d} </option>
        })}
        </select>
        </div>
        <span className="focus-input100"></span>
        </div>
        <br/>

        <div className="wrap-input2 input100-select">
        <span className="input2">Number of People</span>
        <div> 
        <select className="selection-2" name="NumPeople" value={this.state.value} onChange={this.handleChangeNumPeople} >
        {this.state.numP.map((d,index) => {
            return <option value={d} key = {index}> {d} </option>
        })}
        </select>
        </div>
        <span className="focus-input100"></span>
        </div>

        <br/>
        <div className="wrap-input2 validate-input">
        <input className="input2" type="text" value={this.state.value} onChange={this.handleChangePlace}/> 
        <span className="focus-input2" data-placeholder="Where de you want to play?"></span>
        </div>
        <br/>
        <div className="wrap-input2 validate-input">
        <input className="input2" type="text" value={this.state.value} onChange={this.handleChangeComments} />
        <span className="focus-input2" data-placeholder="Comment"></span>
        </div>
        <br/>
        <div className="wrap-input2 validate-input" data-validate = "Valid email is required: ex@abc.xyz">  
        <input className="input2" type="text" value={this.state.value} onChange={this.handleChangeInvite} />
        <span className="focus-input2" data-placeholder="Type your friend's email"></span>
        </div>
        <br/>
        <div className="container-contact2-form-btn">
        <div className="wrap-contact2-form-btn">
        <div className="contact2-form-bgbtn"></div>
        <button className="contact2-form-btn" type="submit" value="submit">
        Get your game started!
        </button>
        </div>
        </div>
        </form>
        </div>
        </div>

        );
}
}

export default NewDate;