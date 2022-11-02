import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <>
      <h1>This is a HomePage</h1>
      <h3>{this.props.pass}</h3>
      </>
    )
  }
}
