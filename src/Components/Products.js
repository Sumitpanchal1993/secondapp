import React, { Component } from 'react'
import img01 from '../Images/Spur_Gear.webp'
import img02 from '../Images/Helicalgear.jpg'
import img03 from '../Images/Bevel_Gear.jpg'
import img04 from '../Images/Worm.jpg'
import '../Components/Product.css'

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
        <div className='prdbase'>
         <div className='cardopt my-3 mx-3'>
            <div><img className='logo' src={img01} alt="spur"/></div>
            <div className='my-3'>
            Spur gears or straight-cut gears are the simplest type of gear. They consist of a cylinder or disk with teeth projecting radially. Viewing the gear at 90 degrees from the shaft length the tooth faces are straight and aligned parallel to the axis of rotation.
              <div><button className='btn btn-primary my-3'> Know More</button></div>
            </div>
         </div>

         <div className='cardopt my-3 mx-3'>
            <div><img className='logo' src={img02} alt="spur"/></div>
            <div className='my-3'>
              Helical gears are one type of cylindrical gears where the teeth are curved into a helix shape. Compared to spur gears (straight teeth), properly designed helical gears can have a larger total contact ratio which can improve vibration and noise.
              <div><button className='btn btn-primary my-3'> Know More</button></div>
            </div>
         </div>

         <div className='cardopt my-3 mx-3'>
            <div><img className='logo' src={img03} alt="spur"/></div>
            <div className='my-3'>
              These bevel gears are used to transmit rotational motion at right angles, whereby the two axis of the gears intersect. This type of gear is therefore often built symmetrically. The movement consists of rolling without sliding of two bevels, hence the name.
              <div><button className='btn btn-primary my-3'> Know More</button></div>
            </div>
         </div>

         <div className='cardopt my-3 mx-3'>
            <div><img className='logo' src={img04} alt="spur"/></div>
            <div className='my-3'>
            A worm gear is a gear consisting of a shaft with a spiral thread that engages with and drives a toothed wheel. Worm gears are an old style of gear, and a version of one of the six simple machines.
              <div><button className='btn btn-primary my-3'> Know More</button></div>

            </div>
         </div>
         
        </div>
        
      </>
    )
  }
}