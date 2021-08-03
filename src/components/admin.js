import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


const Admin = () => {
    var userEmail=JSON.parse(localStorage.getItem('userDetails'))
    var [userData, setUserData] = useState([])
    const history = useHistory()


    const callAboutPage = async () => {
        try {
            // const res = await fetch(`/student/${state[0].email}`, {
                const res = await fetch(`/admin/${userEmail.email}`, {

                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            // console.log(data)
            
            // console.log(data)
            setUserData(data)
            
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;
            }
        } catch (error) {
            console.log(error)
            // document.write("404 Not Found")
            // document.createElement("input")
            // document.createElement(button)

             history.push('/404')
        }
    }
    const logOut = () => {
        localStorage.removeItem('userDetails')
        history.push('./')
    }
    const changePassword = () => {
        // console.log(userData[0].email)

        history.push({
            pathname: './changepassword',
            state: [{ email: userData[0].email }]
        })
    }
    useEffect(() => {
        callAboutPage();
    }, [])

    return (
        <>
            <nav class="navbar nav_div_inside  navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <h1 class="logo"><span>B</span>lack <span>A</span>cademy</h1>
                    </a>
                    <button class="navbar-toggler toggle_button " type="button" 
                        data-bs-target="#navbarNavDropdown" data-bs-toggle="collapse"  aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon toggle_icon"></span>
                    </button>
                    <div class="collapse in navbar-collapse admin_navbar"  id="navbarNavDropdown">

                        <ul class="navbar-nav ms-auto px-4 nav_ul">
                        <li class="nav-item nav_lis">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Time Table
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="/timetable">New Time Table</a></li>
                                    <li><a class="dropdown-item" href="/showtimetable">Update Time Table</a></li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Register
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="/signup">Register Student</a></li>
                                    <li><a class="dropdown-item" href="/register-teacher">Register Teacher</a></li>
                                    <li><a class="dropdown-item" href="/register-admin">Register Admin</a></li>
                                </ul>
                            </li>

                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="/attendance">Attendance</a>
                            </li>
                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="/mark">Add Marks</a>
                            </li>
                            <li class="nav-item nav_lis">
                                <a class="nav-link" href="/course">Course Content</a>
                            </li>
                            
                            
                            
                           

                        </ul>
                    </div>
                </div>
            </nav>




            <div class="home-back">
                <button type="button" onClick={logOut} class="btn btn-outline-secondary">Log Out</button>
                <button type="button" onClick={changePassword} class="btn btn-outline-secondary">Change Password</button>



                {/* <!-- home section start --> */}
                <section class="home" id="home">
                    <div class="max-width">
                        <div class="home-content">
                            {userData.map((student) => (
                                // <div class="text-1">WELCOME </div>

                                <div class="text-2">WELCOME <span>{student.name.toUpperCase()}</span></div>
                            ))}
                            {userData.map((student) => (

                                <div class="text-3">You can manage <span>Black Academy</span> here. </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


        </>
    )
}

export default Admin;