import React, { Component } from 'react';
import './newdate.css';


class NumPeople extends Component {

	constructor(props) {
		super(props);

		this.state={
			numP: null
		};
	}


	render() {
console.log(this.props.numP);

		return (
			<div>
			<h3>Number of People</h3>
			<select name="numP">
			{this.props.numP.map((d,index) => {
				return <option value={d} key = {index}> {d} </option>
			})}

			</select>
			</div>
			);
	}
}

export default NumPeople;