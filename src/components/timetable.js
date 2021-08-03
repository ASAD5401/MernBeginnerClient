import React, { useState } from 'react'
import SignUpPic from '../images/pic.png'
import './timetable.css'
import { NavLink, useHistory } from "react-router-dom"
// import User from '../../../server/model/userSchema'
// import User from "../../../server/model/userSchema.js"




const SignUp = () => {
    const history = useHistory()
    const [table, setTable] = useState({
        subject: "", day: "", starttime: "", endtime: "", enrolledclass: ""
    })
    let name, value
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setTable({ ...table, [name]: value })
    }
    const PostData = async (e) => {
        e.preventDefault();
        const { subject, day, starttime, endtime, enrolledclass } = table;
        console.log(table)
        const res = await fetch('/timetable', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject, day, starttime, endtime, enrolledclass
            })
        })
        const data = await res.json()
        if (data.status === 422 || !data) {
            window.alert("invalid registration")
        } else {
            window.alert("registration successfully")
            //    history.push("/login")
        }

    }
    return (
        <div className="whole-part">
            <div class="table-container">

                <center>
                    <h1 class="head">Time Table</h1></center>
                <div class="table-heading">
                    <table class="table">
                        <tbody className="table-body">
                            <tr>
                                <td className="label">Subject</td>
                                <td data-label="Subject"><input type="text" name="subject" id="subject" autoComplete="off" value={table.subject} onChange={handleInputs} placeholder="Enter Subject Name" /></td>

                            </tr>
                            <tr>
                                <td className="label">Field</td>
                                <td  data-label="Field"><input type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" value={table.enrolledclass} onChange={handleInputs} placeholder="Enter Class" /></td>
                            </tr>
                            <tr>
                                <td className="label">Day</td>
                                <td  data-label="Day"><input type="text" name="day" id="day" autoComplete="off" value={table.day} onChange={handleInputs} placeholder="Enter Day" /></td>
                            </tr>
                            <tr>
                                <td className="label">Start Time</td>
                                <td  data-label="Start Time"><input type="text" name="starttime" id="starttime" autoComplete="off" value={table.starttime} onChange={handleInputs} placeholder="Enter Class Start Time" /></td>
                            </tr>
                            <tr>
                                <td className="label">End Time</td>
                                <td data-label="End Time"><input type="text" name="endtime" id="endtime" autoComplete="off" value={table.endtime} onChange={handleInputs} placeholder="Enter Class End Time" /></td>
                            </tr>
                        </tbody>


                    </table>
                    <div className="style-btn">
                        <input className="button" type="submit" onClick={PostData}></input>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SignUp;