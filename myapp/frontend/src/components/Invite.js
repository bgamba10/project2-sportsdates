import React, { Component } from 'react';

class Invite extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
    	<div>
    		<h3>Invite</h3>
    		<form >
      <input class="form-group" value={this.state.value} onChange={this.handleChange} type="text" name="name" placeholder="Type your friend's email" />
      </form>
    	</div>
    );
    
  }
}

export default Invite;