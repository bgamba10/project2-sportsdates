import React, { Component } from 'react';
import './App.css';
import DatesList from "./DatesList";
import NewDate from "./components/NewDate";


class App extends Component {

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome SportsDates </h1>
        </header>
        <DatesList>
        </DatesList>
        <NewDate>
        </NewDate>
      </div>
    );
  }
}

export default App;
