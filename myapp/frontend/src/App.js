import React, { Component } from 'react';
import './App.css';
import DatesList from "./DatesList";
import NewDate from "./components/NewDate";
import Profile from "./components/Profile";



class App extends Component {

 
/*
onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}*/

HandleGoogleApiLibrary() {
  // Load "client" & "auth2" libraries
  let gapi;
  gapi.load('client:auth2',  {
    callback: function() {
      // Initialize client & auth libraries
      gapi.client.init({
          clientId: '606940674430-a0platgl7ek3ml6k43bvhatbrijqte35.apps.googleusercontent.com',
          scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me'
      }).then(
        function(success) {
            // Libraries are initialized successfully
            // You can now make API calls
        }, 
        function(error) {
          // Error occurred
          // console.log(error) to find the reason
          }
      );
    },
    onerror: function() {
      // Failed to load libraries
    }
  });
}


componentDidMount () {
  const script = document.createElement("script");

  script.src = "https://apis.google.com/js/platform.js";
  script.async = true;
  script.onload="this.onload=function(){};HandleGoogleApiLibrary()";
  script.onreadystatechange="if (this.readyState === 'complete') this.onload()";
  document.body.appendChild(script);
}

/*
gapi.load("auth2", function(){
    gapi.auth2.init();
  });

  gapi.server.setApiKey("606940674430-a0platgl7ek3ml6k43bvhatbrijqte35.apps.googleusercontent.com");
*/
render(

  ) {



  return (
    <div className="App">
    <header className="App-header">


    <div className="row">
    <div>
    <h1 className="App-title col-sm-9">Welcome to Sport's Dates</h1>
    </div>
    <div id="gsi" className="col-sm-3">


    <div class="g-signin2" data-onsuccess="onSignIn" responseType="code"></div><a href="#" onclick="signOut();">Sign out</a>

    
    </div>
    </div>

    </header>

    <Profile>
    </Profile>
    <DatesList>
    </DatesList>
    <NewDate>
    </NewDate>
    <script src="https://apis.google.com/js/platform.js" async defer>
</script>
    </div>
    );
}
}

export default App;
