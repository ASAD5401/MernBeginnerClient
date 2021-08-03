import React, { useState, useEffect } from 'react'

const Marks = () => {
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
    var [enrolledclass, setEnrolledClass] = useState()
    const [course, setCourse] = useState([])
    const [tabl, setTabl] = useState([])



    const [userData, setUserData] = useState([])
    var enrolledclass;
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
            var result=[]
            for(let i=0;i<data.length;i++){
                result.push(data[i].enrolledclass)
            }
            var rem_dup= removeDuplicates(result);

            
            
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
            console.log(data)
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
    // 
    // var mar=[];
    // const handleMarks=(e)=>{
    //     console.log(e.target.value)
    //     // value=e.target.value;
    //     mar.push(e.target.value)
    // }

    // var [mar,setmarks]=useState([])
    // var arr=[]
    // const handleMarks=(e)=>{
    //     var val=e.target.value;
    //     arr.push(val)
    // }
    // console.log(arr)
    const [table, setTable] = useState({})
    let name, value
    const handleMarks = (e) => {
        // console.log(e)
        name = e.target.name;
        value = e.target.value;
        setTable({ ...table, [name]: value })
        // console.log(table)
    }

    // var totalMarks;
    // const handleTotalMarks=(e)=>{
    //     totalMarks=e.target.value;
    //     // console.log(totalMarks)
    // }
    // console.log(totalMarks)
    var [totalMarks, setTotalMarks] = useState()
    const handleTotalMarks = (e) => {
        totalMarks = e.target.value;
        setTotalMarks(totalMarks)
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

    // var subject;
    // const handleInputs = (h) => {
    //     subject = h.target.value;
    // }
    var [subject, setSubject] = useState()
    const handleInputs = (e) => {
        subject = e.target.value;
        setSubject(subject)
    }
    // var [enrolledclass, setEnrolledClass] = useState()

    // const handleEnrolledClass = (e) => {
    //     enrolledclass = e.target.value;
    //     setEnrolledClass(enrolledclass)
    // }

    // console.log(subject)

    const handleSubmit = async (event) => {
        // event.preventDefault();
        // console.log(subject,totalMarks,mar)

        var allRec = []
        for (let i = 0; i < Name.length; i++) {
            console.log(table[i])

            var singRec = {}
            singRec.enrolledclass = enrolledclass
            singRec.subject = subject;
            singRec.studentName = Name[i];
            singRec.studentId = rollno[i];
            singRec.marks = table[i];
            singRec.totalMarks = totalMarks;
            allRec.push(singRec)
            console.log(singRec)
        }
        console.log(allRec)
        const res = await fetch('/mark', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(allRec)
        })
    }
    useEffect(() => {
        callAboutPage()

    }, [])
    return (
        <div className="whole-part">
            <form onSubmit={handleSubmit}>
                <div className="upper-part">
                    <div className="inside-part">

                        <h3 className="h3">Select Field</h3>
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
                        <h3 className="h3">Total Marks: </h3> <input className="inp" type="number" name="totalmarks" id="totalmarks" autoComplete="off" onChange={handleTotalMarks} placeholder="Enter Total Marks" />
                    </div>


                </div>

                <div class="table-container">
                    <center>
                        <h1 class="head">Time Table</h1></center>
                    <div class="table-heading">
                        <table class="table">
                            <thead>
                                <th>Student Name</th>
                                <th>Student Roll #</th>
                                <th>Marks</th>
                            </thead>

                            <tbody className="marks-body">
                                {userData.map((student, key) => (
                                    <tr key={key}>
                                        <td data-label="Student Name" value={getName(student.name)}>{student.name}</td>
                                        <td data-label="Roll #" value={getRollNo(student.rollno)}>{student.rollno}</td>
                                        <td data-label="Obtained Marks"><input type="number" name={key} id={key} autoComplete="off" onChange={handleMarks} placeholder="Enter Obtained Marks" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="style-btn">
                            <input className="button" type="submit"></input>

                        </div>
                    </div>
                </div>



            </form>
        </div>
    )
}


export default Marks