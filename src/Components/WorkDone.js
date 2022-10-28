import React, { Component } from 'react'
import '../Components/WorkDone.css'

export default class WorkDone extends Component {
  render() {   
    return (
      <>
      <div>
        <h1 className='center'>This is Work Done Page</h1>
        <div className='container center mx-3 my-3' >
          <div>
           <table className='table mx-2 my-2 border-danger'>
            <thead>
              <th scope='col mx-3'>S.No</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>ID No.</th>
              <th>Remark</th>
            </thead>
            <tr>

            </tr>
           </table>
          </div>
        </div>
      </div>
      </>
    )
  }
}
