import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom';


const ChangePassword = () => {
    const history=useHistory()
    const { state } = useLocation()
    var [userData, setUserData] = useState([])

    const callAboutPage = async () => {
        console.log(state[0].email)
        try {
            // console.log(data)
            const res = await fetch(`/student/${state[0].email}`, {
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
        }
    }
    var [oldPass, setOldPass] = useState()
    const getOld = (e) => {
        oldPass = e.target.value;
        setOldPass(oldPass)
    }
    var [newPass, setNewPass] = useState()
    const getNew = (e) => {
        newPass = e.target.value;
        setNewPass(newPass)
    }
    var [rePass, setRePass] = useState()
    const getNewAgain = (e) => {
        rePass = e.target.value;
        setRePass(rePass)
    }
    const handleSubmit = async (e) => {
        var id = userData[0]._id
        var name = userData[0].name
        var fathername = userData[0].fathername
        var rollno = userData[0].rollno
        var email = userData[0].email
        var phone = userData[0].phone
        var enrolledclass = userData[0].enrolledclass
        var password = userData[0].password
        var cpassword = userData[0].cpassword
        e.preventDefault()
        if (newPass === rePass) {
            if (oldPass === password) {
                password = newPass
                cpassword = newPass
                const res = await fetch('/student/' + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name, fathername, rollno, email, phone, enrolledclass, password, cpassword
                    })
                })
                const data = await res.json()
                if (data.status === 422 || !data) {
                    window.alert("update rejected")
                } else {
                    window.alert("update successfully")
                    history.push('./student')
                }
            }
            else {
                window.alert("Old Password not Match")
            }
        }
        else {
            window.alert("New Password and Re-Enter Password not match")
        }
        
    }

    useEffect(() => {
        callAboutPage();
    }, [])



    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Old Password</label><input type="password" onChange={getOld}></input>
                <label>New Password</label><input type="password" onChange={getNew}></input>
                <label>Re-Enter New Password</label><input type="password" onChange={getNewAgain}></input>
                <input type="submit" value="Change Password"></input>
            </form>
        </>
    )
}

export default ChangePassword;


