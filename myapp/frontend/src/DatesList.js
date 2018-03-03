import React, { Component } from 'react';
import './index.css';

class DatesList extends Component {
  render() {

    const { title } = this.props;
    console.log(this.props);

    return (
      <div className="App">
          <h1 className="App-title">Welcome to DatesList</h1>
          <p className="App-title">holaaaaaa</p>
          <h4 className="App-title">{title}</h4>
      </div>
    );
  }
}
export default DatesList;


