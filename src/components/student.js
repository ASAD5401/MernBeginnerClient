import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import './student.css';
// import './show'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom"
import Logo from '../images/logo.png'




const Student = () => {
    const history = useHistory()
    var userEmail=JSON.parse(localStorage.getItem('userDetails'))
    // console.log(userEmail.email)

    const { state } = useLocation()
    var [userData, setUserData] = useState([])
    var [timeTable, setTimeTable] = useState([])
    var [attendance, setAttendance] = useState([])
    var [mark, setMark] = useState([])
    var [course, setCourse] = useState([])


    const callAboutPage = async () => {
        try {
            // const res = await fetch(`/student/${state[0].email}`, {
                const res = await fetch(`/student/${userEmail.email}`, {

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
            try {
                const res = await fetch(`/timetable/${data[0].enrolledclass}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data_timetable = await res.json()
                setTimeTable(data_timetable)
                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error;
                }
            } catch (error) {
                console.log(error)
            }
            try {
                // console.log(data)
                const res = await fetch(`/attendance/${data[0].enrolledclass}/${data[0].name}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data_attendance = await res.json()
                // console.log(data_attendance)
                setAttendance(data_attendance)
                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error;
                }
            } catch (error) {
                console.log(error)
            }
            try {
                // console.log(data)
                const res = await fetch(`/mark/${data[0].enrolledclass}/${data[0].name}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data_mark = await res.json()
                // console.log(data_mark)
                setMark(data_mark)
                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error;
                }
            } catch (error) {
                console.log(error)
            }
            try {
                // console.log(data)
                const res = await fetch(`/courses/${data[0].enrolledclass}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                })
                const data_course = await res.json()
                console.log(data_course)
                setCourse(data_course)
                if (!res.status === 200) {
                    const error = new Error(res.error)
                    throw error;
                }
            } catch (error) {
                console.log(error)
            }


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

                                <div class="text-3">You can check your progress of <span>{student.enrolledclass}</span> here. </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>


            {/* time table */}
            <div class="table-container">
                <center>
                    <h1 class="head">Time Table</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <thead>
                            <th>Subject</th>
                            <th>Day</th>
                            <th>Time</th>
                        </thead>

                        <tbody>

                            {timeTable.map((timetable) => (
                                <tr>
                                    <td data-label="Subject">{timetable.subject}</td>
                                    <td data-label="Day">{timetable.day}</td>
                                    <td data-label="Class Time">{timetable.starttime}-{timetable.endtime}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



            {/* attendance */}
            <div class="table-container">
                <center>
                    <h1 class="head">Attendance</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <thead>
                            <th>Subject</th>
                            <th>Last Update</th>
                            <th>Attendance</th>
                            <th>Total Attendance</th>
                            <th>Percentage</th>
                        </thead>

                        <tbody>

                            {attendance.map((attend) => (
                                <tr>
                                    <td data-label="Subject">{attend.subject}</td>
                                    <td data-label="Last Update">{attend.created_at}</td>
                                    <td data-label="Attendance">{attend.attendance}</td>
                                    <td data-label="Total Attendance">{attend.totalAttendance}</td>
                                    <td data-label="Percentage">{attend.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>







            {/* marks */}
            <div class="table-container">
                <center>
                    <h1 class="head">Marks</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <thead>
                            <th>Subject</th>
                            <th>Last Update</th>
                            <th>Marks</th>
                            <th>Total Marks</th>
                            <th>Percentage</th>
                        </thead>

                        <tbody>

                            {mark.map((mark) => (
                                <tr>
                                    <td data-label="Subject">{mark.subject}</td>
                                    <td data-label="Last Update">{mark.created_at}</td>
                                    <td data-label="Marks">{mark.marks}</td>
                                    <td data-label="Total Marks">{mark.totalMarks}</td>
                                    <td data-label="Percentage">{mark.percentage}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* COURSE CONTENT */}
            <div class="table-container">
                <center>
                    <h1 class="head">Course Content</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <thead>
                            <th>Subject</th>
                            <th>Topics</th>
                        </thead>

                        <tbody>

                            {course.map((course) => (
                                <tr>
                                    <td data-label="Subject">{course.subject}</td>
                                    <td data-label="Topics">{course.courseContent.map((topics)=>(<p>{topics}</p>))}</td>
                                    {/* {cours.courseContent.map((topics) => (<td data-label="Topics">{topics}</td>))} */}


                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
export default Student;