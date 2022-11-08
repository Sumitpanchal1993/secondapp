import React, { Component } from 'react'
import '../Components/WorkTodo.css'
// import PropTypes from 'prop-types'

let resp = fetch('https://reqres.in/api/users')
console.log(resp.data)
export default class WorkTodo extends Component {

  constructor(props){
    super(props)
   this.state={name: 'Sumit'}
  }
  render() {
    return (
      <>
        <form action="#">
          <div className='base'>
            <h1 className='titled'>Add Things ToDo</h1>
            <h3>{this.props.any}</h3>
            <div className="mb-3, title">
              <label htmlFor="exampleFormControlInput1" className="form-label">Title of Work</label>
              <input type="text" className="form-control" id="title" placeholder="Brief Detail" />
            </div>
            <div className="mb-3, title">
              <label htmlFor="exampleFormControlTextarea1" className="form-label" placeholder={this.props.txt}>Details of Work</label>
              <textarea className="form-control" id="desc" rows="5"></textarea>
            </div>
            <div className='my-3'>
              <button className='btn btn-success mx-3'>Add</button>
              <button type="reset" className='btn btn-primary mx-3'>Reset</button>
              <button className='btn btn-danger mx-3'>Delete</button>
            </div>
          </div>
        </form>
        <div>
          <h1>{this.state.name}</h1>
        </div>
      </>
    )
  }
}


// function submitresp() {
//   fn = document.getElementById('first_name').value;
//   ln = document.getElementById('last_name').value;
//   gn = document.querySelector('input[name=mygender]:checked').value;
//   eml = document.getElementById('email').value;
//   phn = document.getElementById('mobno').value;
//   edu = document.getElementById('education').value;
//   add = document.getElementById('address').value;
//   let resp = {Name:fn+ ' '+ln, Gender:gn, Email:eml, Mobile_no:phn, Education:edu, Address:add};
//   console.log(resp);
// }
