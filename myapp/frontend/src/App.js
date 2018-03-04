import React, { Component } from 'react';
import './App.css';
import DatesList from "./DatesList";
import NewDate from "./components/NewDate";
import Profile from "./components/Profile";


class App extends Component {

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

render() {
  return (
    <div className="App">
    <header className="App-header">


    <div className="row">
      <div>
        <h1 className="App-title col-sm-9">Welcome to Sport's Dates</h1>
      </div>
      <div id="gsi" className="col-sm-3">
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
      </div>
    </div>
    </header>

    <Profile>
    </Profile>
    <DatesList>
    </DatesList>
    <NewDate>
    </NewDate>
    </div>
    );
}
}

export default App;
