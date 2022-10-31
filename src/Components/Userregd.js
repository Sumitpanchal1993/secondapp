import React, { Component } from 'react'


export default class Userregd extends Component {
    render() {
        return (
            <>
                <div className='base center my-3'>
                    <form action="" >
                        <div className='formcenter my-3'>
                            <div className='container-row my-3'>
                                <div className='my-3'><label htmlFor="name">Full Name</label></div>
                                <div className='my-3'><label htmlFor="email">Enter Your Email</label></div>
                                <div className='my-3'><label htmlFor="mobile">Enter Your Mobile No.</label></div>
                                <div className='my-3'><label htmlFor="dob">Select Your Date of Birth</label></div>
                                <div className='my-3'> <label htmlFor="gender">Select Your Gender</label></div>
                                <div className='my-3'> <label htmlFor="username">Enter User Name</label></div>
                                <div className='my-3'> <label htmlFor="psw">Create password</label></div>
                                <div className='my-3'> <label htmlFor="gender">Re-Enter the Password</label></div>
                            </div>
                            <div className='container-row mx-3'>
                                <div className='my-3'>
                                    <input type="text" name='name' placeholder='enter the name' />
                                </div>
                                <div className='my-3'>
                                    <input type="email" name="email" id="" />
                                </div>
                                <div className='my-3'>
                                    <input type="number" name="mobile" id="" />
                                </div>
                                <div className='my-2'>
                                    <input type="date" name="dob" id="" />
                                </div>
                                <div className='my-2'>
                                    <label className='mx-1' htmlFor="gender">Male</label>
                                    <input className='mx-1' type="radio" name="gender" id="" />
                                    <label className='mx-1' htmlFor="gender">Female</label>
                                    <input className='mx-1' type="radio" name="gender" id="" />
                                    <label className='mx-1' htmlFor="gender">Others</label>
                                    <input className='mx-1' type="radio" name="gender" id="" />
                                </div>
                                <div className='my-3'>
                                    <input type="text" name='username' placeholder='enter the username' />
                                </div>
                                <div className='my-2'><input type="password" name="psw" id="psw" /></div>
                                <div><input type="password" name="psw" id="psw" /></div>
                            </div>
                        </div>
                        <div className='my-2'>
                            <button className='btn btn-primary mx-3' type="submit">Submit</button>
                            <button className='btn btn-primary mx-3' type="reset">Reset me!</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}
