import React from "react";

import DatesList from "../DatesList";

export default class Dates extends React.Component {
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <DatesList key={i} title={title}/> );

    console.log(Articles)
    return (
      <div>
        <h1>Dates</h1>
        article: {article}, date: {date}, filter: {filter}
        <div class="row">{Articles}</div>
      </div>
    );
  }
}