import React, { Component } from 'react'
import '../Components/home.css'
import{Link} from 'react-router-dom'

// function more(){
//   console.log('Clicked')
// }

export default class Home extends Component {
  // constructor(props) {
  //   super(props)

  // }
  render() {
    return (
      <>
        <div id="homebase">
          <div>
            <h1>Welcome To Gear Duniya</h1>
            <h3>The Aamazing World of the Gear Technologies</h3>
          <div>
            <h3>You will get all your gearing solutions here in the App</h3>
            
          </div>
          <div>
            Gears are the key Component in the Transmission Technology.
            Gears are the proven source of Power Transmission.
          </div>
            <button className='btn btn-primary my-3'><Link to="/products">Know More</Link></button>
          </div>
        </div>
      </>
    )
  }
}
