import React, { Component } from 'react'
export default class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = {a1 : 'India'};
  }
  render() {
    return (
      <div>
        <h1>This is a view <i>{this.state.a1}</i> created by a class component</h1>
      </div>
    )
  }
}
