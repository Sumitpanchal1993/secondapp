import React, { Component } from 'react'
import img01 from '../Images/peoples.jpg'

export default class Career extends Component {
  render() {
    return (
      <>
      <div>
        <img src={img01} alt="" style={{width:'100vw'}} />
        <div>
          <h1 className='my-3'>Built Your Career with us</h1>
          <div className='container'>
            <input type="text" placeholder='Job Name, Key-Word' name="" id="" />
            <input type="text" placeholder='Location' />
            <input type="text" placeholder='Skill Sets' name="" id="" />
            <input type="button" value="Search" />
          </div>
          <div className='container'>
            <table >
              <thead>
                <tr>
                  <td>S.No</td>
                  <td>Post Name</td>
                  <td>Job Description</td>
                  <td>Location</td>
                  <td>Link</td>
                </tr>
              </thead>
              <tbody>
                
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
    )
  }
}