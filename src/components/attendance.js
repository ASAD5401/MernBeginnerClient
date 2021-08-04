import React, { useState, useEffect } from 'react'
import './attendance.css';

const Attendance = () => {
    function removeDuplicates(num) {
        var x,
            len=num.length,
            out=[],
            obj={};
       
        for (x=0; x<len; x++) {
          obj[num[x]]=0;
        }
        for (x in obj) {
          out.push(x);
        }
        return out;
      }

    const [userData, setUserData] = useState([])
    const [table, setTable] = useState([])
    const [course, setCourse] = useState([])
    var [enrolledclass, setEnrolledClass] = useState([])
    var enrolledClass;
    const handleEnrolledClass = (e) => {

        enrolledClass = e.target.value;
        console.log(enrolledClass)
        setEnrolledClass(enrolledClass)
        callAboutPage(enrolledClass)
    }
    // const array = [1, 2, 3, 2, 3];
    
    // calling the function
    // passing array argument
    

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
            var result=[]
            for(let i=0;i<data.length;i++){
                result.push(data[i].enrolledclass)
            }
            var rem_dup= removeDuplicates(result);

            
            
            setTable(rem_dup)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
        try {
            const res = await fetch(`/students/${field}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            // console.log(data)
            setUserData(data)
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
            // console.log(data)
            setCourse(data)
            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error;

            }
        } catch (error) {
            console.log(error)
            // history.push('/login')
        }
    }


    const Name = []
    const getName = async (e) => {
        Name.push(e)
    }
    // console.log(Name)
    const rollno = []
    const getRollNo = async (e) => {
        rollno.push(e)
    }
    // console.log(rollno)
    const atten = []
    const getAttendance = async (e) => {
        atten.push(e)
        // console.log(atten)
    }

    var subject;
    const handleInputs = (e) => {
        subject = e.target.value;
    }

    // console.log(subject)

    const handleSubmit = async (event) => {
        event.preventDefault();
        var allRec = []
        for (let i = 0; i < Name.length; i++) {
            var singRec = {}
            singRec.enrolledclass = enrolledclass
            singRec.subject = subject;
            singRec.studentName = Name[i];
            singRec.studentId = rollno[i];
            singRec.attendance = atten[i];
            allRec.push(singRec)
            console.log(singRec)
        }
        // console.log(allRec)
        const res = await fetch('/attendance', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allRec)
        })
        // event.preventDefault();
    }
    useEffect(() => {
        callAboutPage()

    }, [])
    return (
        <div className="back-color">
            <form onSubmit={handleSubmit}>

                <div className="upper-part">
                    <div className="inside-part">

                        <h3 className="h3">Select Field</h3>
                        <select className="select" type="text" name="enrolledclass" id="enrolledclass" autoComplete="off" onChange={handleEnrolledClass} >
                            <option  >Select Field</option>

                            {table.map((table, key) => (
                                <option value={table} key={key}>{table}</option>
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

                </div>

                {/* <table border="2">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Roll #</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>                      
                        {userData.map((student, key) => (
                            <tr key={key}>
                                <td value={getName(student.name)}>{student.name}</td>
                                <td value={getRollNo(student.rollno)}>{student.rollno}</td>
                                <td><input type="radio" name={key} id="present" value="1" onChange={()=>getAttendance(1)} />   P <input type="radio" name={key} id="absent" value="0" onChange={()=>getAttendance(0)} />   A</td>                             
                            </tr>
                        ))}
                        <input type="submit"></input>
                    </tbody>
                </table> */}
                <div class="table-container">

                    <center>
                        <h1 class="head">Time Table</h1></center>
                    <div class="table-heading">
                        <table class="table">
                            <thead>
                                <th>Student Name</th>
                                <th>Student Roll #</th>
                                <th>Attendance</th>
                            </thead>

                            <tbody>
                                {userData.map((student, key) => (
                                    <tr key={key}>
                                        <td data-label="Student Name" value={getName(student.name)}>{student.name}</td>
                                        <td data-label="Student Roll #" value={getRollNo(student.rollno)}>{student.rollno}</td>
                                        <td data-label="Attendance"><input type="radio" name={key} id="present" value="1" onChange={() => getAttendance(1)} />   P <input type="radio" name={key} id="absent" value="0" onChange={() => getAttendance(0)} />   A</td>
                                    </tr>
                                ))}

                            </tbody>


                        </table>
                        <div className="style-btn">
                            <input className="button" type="submit"></input>

                        </div>
                    </div>
                </div>
                <center>
                </center>
            </form>
        </div>
    )
}


export default Attendance