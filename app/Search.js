import React, { Component } from 'react';
import {render} from 'react-dom';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "React"
    };
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        Search Term:
        <input type="search" value={this.state.searchTerm}
          onChange={this.handleChange.bind(this) } />
        <br/>
        <textarea value="This is a description." />
        <br/>
        <select value="B">
          <option value="A">Mobile</option>
          <option value="B">Work</option>
          <option value="C">Home</option>
        </select>
      </div>
    );
  }
}