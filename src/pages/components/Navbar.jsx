import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    //navbar - shortcut
    return <>
        <nav class="navbar navbar-expand-lg bg-primary text-light" style={{ marginBottom: "50px" }}>
            <div class="container-fluid">

                <Link to="/" class="navbar-brand text-light">Fitness</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">

                    <div class="navbar-nav">
                        {/* <Link to="/" class="nav-link active">Basic</Link> */}
                        <Link to="/" class="nav-link text-light">Home</Link>
                        <Link to="/login" class="nav-link text-light">Login</Link>
                        <Link to="/register" class="nav-link text-light">Register</Link>
                        <Link to="/user" class="nav-link text-light">User Profile</Link>
                        <Link to="/daily" class="nav-link text-light">Daily Update</Link>
                        <Link to="/settings" class="nav-link text-light">Settings</Link>

                        <select style={{ borderRadius: "10px", padding: "2px" }}>
                            <option>User</option>
                            {/* after clicking on logout it should show login form page again */}
                            <option value="3"><button class="btn btn-primary">Logout</button></option>
                        </select>
                        <i class="bi bi-sun"></i>
                        <i class="bi bi-moon"></i>

                    </div>

                </div>
            </div>
        </nav>


    </>
}

export default Navbar
