import React, { Component } from 'react';
import './newdate.css';

class Sport extends Component {

	constructor(props) {
		super(props);

		this.state={
			sports: null
		};
	}

	render() {
		return (
			<div>
			<h3>Sport</h3>
			<select name="Sport">
			{this.props.sports.map((d,index) => {
				return <option value={d} key = {index}> {d} </option>
			})}

			</select>

			</div>
			);
	}
}

export default Sport;