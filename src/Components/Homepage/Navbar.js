import React from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={"/"}>{props.heading}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"      aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/products"}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/career"}>Career</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/customers"}>Our Customers</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/contactus"}>Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/aboutus"}>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/todo"}>To Do Work</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/workdone"}>Work Done</Link>
                            </li>                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/userregd"}>Regsiter Now!</Link>
                            </li>                            
                        </ul>
                        <Link to={'/loginpage'}><button className="btn btn-outline-primary mx-2" type="Login">Login</button></Link>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div >
            </nav >
        </>
    )
}
