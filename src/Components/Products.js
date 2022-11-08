import React, { Component } from 'react'
// import { Link } from 'react-router-dom'


export default class Products extends Component {
 apidata=[
  {"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}
 ]

  constructor(props){
    super(props);
    this.state = {
      apidata:this.apidata,
      // id: this.id,
      // email: this.email,
      // firstname: this.first_name,
      // lastname: this.last_name,
      // avatar: this.avatar
    }    
  }
  render() {
    return (
      <>
        <div className='card' style={{width:'20rem'}}>
          <img className='card-img-top' src="https://source.unsplash.com/user/c_v_r/100x100" alt="Imageher"/>
          <div className="card-body">
          {this.apidata.map((item)=>{
            console.log(item)
            })}
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, placeat id magni blanditiis iste ipsam minima, maxime magnam porro suscipit ut temporibus, cupiditate aspernatur recusandae dolorem sapiente veritatis? Sit, expedita.</p>
          <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>

      </>
    )
  }
}