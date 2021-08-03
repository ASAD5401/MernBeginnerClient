import React, { useEffect, useState } from 'react'
// import {useEffect} from "react-router-dom"
const CourseContent = () => {
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
    var [enrolledclass, setEnrolledClass] = useState()
    const [tabl, setTabl] = useState([])


    var enrolledclass;
    const [course, setCours] = useState([])

    const handleEnrolledClass = (e) => {
        enrolledclass = e.target.value;
        callAboutPage(enrolledclass)
        setEnrolledClass(enrolledclass)

    }

    const callAboutPage = async (field) => {
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
            const res = await fetch(`/course/${field}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            console.log(data)
            setCours(data)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
    }

    const [table, setTable] = useState({
        // subject: "", enrolledclass: "",
        subject: ""

    })
    let name, value
    const handleInputs = (e) => {
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        setTable({ ...table, [name]: value })
    }
    var [courseContent, setCourse] = useState([])
    const handleInp = (e) => {
        courseContent = e.target.value.split(",")
        console.log(courseContent)
        setCourse(courseContent)
    }
    const PostData = async (e) => {
        // console.log(table)
        e.preventDefault();
        // const { subject, enrolledclass } = table;
        const { subject } = table;

        console.log(table)
        const res = await fetch('/course', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                subject, enrolledclass, courseContent
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
    useEffect(() => {
        callAboutPage()

    }, [])
    return (
        <div className="back-color">

            <form onSubmit={PostData}>
                {/* <h3>Subject</h3>
                <select type="text" name="subject" id="subject" autoComplete="off" onChange={handleInputs} >
                    <option>Select Subject</option>
                    <option>HTML</option>
                    <option>JS</option>
                    <option>CSS</option>
                    <option>VUE JS</option>

                </select>
                <h3>Select Field</h3>
                <select type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" onChange={handleInputs} >
                    <option>Select Field</option>
                    <option>Web Development</option>
                    <option>Artificial Intelligence</option>
                    <option>Cloud Computing</option>
                </select>
                <br /><br />
                <input type="text" name="courseContent" id="courseContent" autoComplete="off" onChange={handleInp} placeholder="Use , To separate course content" />

                <input type="submit"></input>
                <br></br>
                <br></br> */}



                <div className="upper-part">
                    <div className="inside-part">

                        <h3 className="h3">Select Field</h3>
                        {/* <select className="select" type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" onChange={handleInputs} > */}
                        <select className="select" type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" onChange={handleEnrolledClass} >
                            <option >Select Field</option>

                            {tabl.map((tabl, key) => (
                                <option key={key}>{tabl}</option>
                            ))}
                        </select>
                    </div>
                    <div className="inside-part">
                        <h3 className="h3">Subject</h3>

                        <select className="select" type="text" name="subject" id="subject" autoComplete="off" onChange={handleInputs} >
                            <option >Select Subject</option>

                            {course.map((course, key) => (
                                <option key={key}>{course.subject}</option>
                            ))}
                        </select>
                    </div>
                    <div className="inside-part">
                        <h3 className="h3">Topics : </h3><input type="text" name="courseContent" id="courseContent" autoComplete="off" onChange={handleInp} placeholder="Use , To separate course content" />

                    </div>



                </div>
                <div className="style-btn">
                    <input className="button" type="submit"></input>

                </div>


            </form>

        </div>
    )

}
export default CourseContent