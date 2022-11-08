import React from 'react'
import { Link } from 'react-router-dom'

function Loginpage() {
  return (
    <>
    <div className="base">
        <div className='center'>
            <h3>login</h3>
        </div>
        <div>
            <form action="" className='container'>
                <div className='container center my-3'>
                <label className='mx-2' htmlFor="username">Username : </label>
                <input className='mx-2' type="text" name="username" id="" />
                <label className='mx-2' htmlFor="password">Password : </label>
                <input className='mx-2' type="cpassword" name="cpassword" id="" />
                </div>
                <div className='center my-3'>
                <button className="btn btn-success mx-2" type="submit">Login</button>
                <button className="btn btn-success mx-2" type="reset">Reset</button>
                <div className='center my-3'>
                    Not yet Registered <Link to={"/userregd"}>"click here" </Link> to register Now !
                </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Loginpage