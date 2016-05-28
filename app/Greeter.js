import React, {Component} from 'react';

export default class Greeter extends Component {
  render() {
    return (
      <h1>{this.props.salutation}</h1>
    );
  }
}