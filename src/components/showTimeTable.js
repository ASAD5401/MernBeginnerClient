// import './showTimeTable.css'
import React, { useEffect, useState } from 'react'
// import userpic from "../images/pic.png"
// import {useHistory} from "react-router-dom"
import './showTimeTable.css'
const ShowTimeTable = () => {
    function removeDuplicates(num) {
        var x,
            len = num.length,
            out = [],
            obj = {};

        for (x = 0; x < len; x++) {
            obj[num[x]] = 0;
        }
        for (x in obj) {
            out.push(x);
        }
        return out;
    }
    const [tabl, setTabl] = useState([])

    // const history = useHistory()
    const [userData, setUserData] = useState([])
    var [enrolledclass, setEnrolledClass] = useState([])
    var enrolledClass;
    const handleEnrolledClass = (e) => {

        enrolledClass = e.target.value;
        console.log(enrolledClass)
        setEnrolledClass(enrolledClass)
        callAboutPage(enrolledClass)
    }

    const callAboutPage = async (field) => {
        // console.log(enrolledClass)
        try {
            const res = await fetch(`/timetable`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            console.log(data)
            var result = []
            for (let i = 0; i < data.length; i++) {
                result.push(data[i].enrolledclass)
            }
            var rem_dup = removeDuplicates(result);



            setTabl(rem_dup)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
        try {
            const res = await fetch(`/timetable/${field}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            setUserData(data)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
    }

    // useEffect(() => {
    //     callAboutPage()
    //     // handleEnrolledClass()

    // }, [])



    const deleteItem = async (e) => {
        window.location.reload()
        try {
            const res = await fetch('/timetable/' + e, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })


            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }


        } catch (error) {
            console.log(error)
        }
    }

    // const history=useHistory()
    const [table, setTable] = useState({
        subject: "", day: "", starttime: "", endtime: ""
    })
    let name, value
    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setTable({ ...table, [name]: value })
        console.log(table)
    }
    const updateItem = async (e) => {
        // window.location.reload()


        // e.preventDefault();
        const { subject, day, starttime, endtime } = table;
        console.log(table, enrolledclass)
        const res = await fetch('/timetable/' + e, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject, day, starttime, endtime, enrolledclass
            })
        })
        const data = await res.json()
        if (data.status === 422 || !data) {
            window.alert("update rejected")
        } else {
            window.alert("update successfully")
            //    history.push("/login")
        }

    }
    useEffect(() => {
        callAboutPage()

    }, [])



    return (
        <div className="whole-part">
            <div className="upper-part">

                <div className="inside-part">

                    <h3 className="h3">Select Field</h3>
                    <select className="select" type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" onChange={handleEnrolledClass} >
                        <option >Select Field</option>

                        {tabl.map((tabl, key) => (
                            <option value={tabl} key={key}>{tabl}</option>
                        ))}
                    </select>
                </div>
            </div>


            <form>


                <div class="table-container">
                    <center>
                        <h1 class="head">Time Table</h1></center>
                    <div class="table-heading">
                        <table class="table">
                            <thead>
                                <th>Subject</th>
                                <th>Day</th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </thead>

                            <tbody className="table-body">
                                {userData.map((user, key) => (
                                    <tr key={key}>
                                        <td data-label="Subject"><input type="text" name="subject" id="subject" autoComplete="off" onChange={handleInputs} placeholder={user.subject} /></td>
                                        <td data-label="Day"><input type="text" name="day" id="day" autoComplete="off" onChange={handleInputs} placeholder={user.day} /></td>
                                        <td data-label="Start Time"><input type="text" name="starttime" id="starttime" autoComplete="off" onChange={handleInputs} placeholder={user.starttime} /></td>
                                        <td data-label="End Time"><input type="text" name="endtime" id="endtime" autoComplete="off" onChange={handleInputs} placeholder={user.endtime} /></td>
                                        <td data-label="Delete"><button className="button-1" type="button" onClick={() => deleteItem(user._id)}  >Delete</button></td>
                                        <td data-label="Update"><button className="button-1" type="button" onClick={() => updateItem(user._id)}  >Update</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ShowTimeTable;