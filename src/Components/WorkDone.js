import React, { Component, useEffect, useState } from 'react'
import '../Components/WorkDone.css'




export default class WorkDone extends Component {
  constructor(props){
    super(props)
    this.state = [] 
  }
  async componentDidMount(){
    let url ='https://reqres.in/api/users?page=2' 
    let data = await fetch(url)
    let datanew = await data.json()
    let useabledata = datanew.data
    console.log(datanew)
    console.log(useabledata)
    // this.setState(useabledata)
  }
 
  
  render() {   
    return (
      <>
      <div>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Email</th>
                <th>first_name</th>
                <th>last_name</th>
                <th>avtar_name</th>
              </tr>
            </thead>
            <tbody>
             {/* {useabledata.map((item)=>{ */}
              <tr>
              <th>itme.email</th>
              <th>Email</th>
              <th>first_name</th>
              <th>last_name</th>
              <th>avtar_name</th>
            </tr>

             })}

            </tbody>
          </table>
            
      </div>
      </>
    )
  }
}

