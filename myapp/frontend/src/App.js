import React, { Component } from 'react';
import './App.css';
import DatesList from "./DatesList";
import NewDate from "./components/NewDate";
import Profile from "./components/Profile";
import FacebookLogin from 'react-facebook-login';



class App extends Component {

  constructor(props) {
    super(props);

    //this.onSignIn = this.onSignIn.bind(this);

  }

//Tenían más de 50 lineas de código muerto que distrae la atención de su aplicación

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


    <div class="g-signin2"  responseType="code"></div><a href="#" onclick="signOut();">Sign out</a>

    
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
