import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


export default class Products extends Component {
  geartype = [
    {type:'Spur', detail: 'This is a spur gear'}, 
    {type:'Helical'},
    {type:'Beveled'},
    {type:'Worm Gear'}]

  constructor(props) {
    super(props);
    this.state = {
      geartype: this.geartype,
    }   
    console.log(this.geartype)
  }
  render() {
    return (
      <>
        <div>
          <ul>
            {this.state.map((item)=>(<h1 key={item.id}>{this.geartype.type }</h1>))}
          </ul>
        </div>
        
      </>
    )
  }
}