import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
    	<div>
    		<h3>Comment</h3>
    		<form >
      <input class="form-group" type="text" name="name" placeholder="Any extra info. Example: 'Take a ball'" />
      </form>
    	</div>
    );
  }
}

export default Comment;