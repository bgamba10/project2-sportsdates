import React, { Component } from 'react';
import './newdate.css';

class Place extends Component {
  render() {
    return (
    	<div>
      <h3>Where do you want to play?</h3>
      <form >
      <label>
      Place:
      <input class="form-group" type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>
      );
}
}

export default Place;