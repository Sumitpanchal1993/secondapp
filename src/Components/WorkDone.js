import React, { Component } from 'react'
import '../Components/WorkDone.css'

export default class WorkDone extends Component {
  render() {   
    return (
      <>
      <div>
        <h2 className='center'>{this.props.heading}</h2>
        <div className='container center' >          
          <table className='container'>
            <thead>
              <th>S.No</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Remark</th>
            </thead>
            <tr>
              <td>1</td>
              <td>Sumit</td>
              <td>1234567980</td>
              <td>Sumit@panchal.com</td>
              <td>Good Boy</td>
              <td>Good Emplloyee</td>
            </tr>
          </table>      
        </div>
      </div>
      </>
    )
  }
}

