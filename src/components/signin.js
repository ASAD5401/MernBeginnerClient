import React, { useState } from 'react'
import SignUpPic from '../images/pic.png'
// import SignUpPic from '.'

import { NavLink, useHistory } from "react-router-dom"

const LogIn = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const LogInUser = async (e) => {
        e.preventDefault()

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = res.json()
        console.log(data)

        if (res.status === 400 || !data) {
            window.alert("INVALID REG")
        } else {
            window.alert("LogIn Successfull")
            localStorage.setItem('userDetails', JSON.stringify({ email, password }))

            history.push(
                './student'
                // state: [{ email: email }]
            )
        }
    }
    const LogInTeacher = async (e) => {
        e.preventDefault()

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = res.json()
        console.log(data)

        if (res.status === 400 || !data) {
            window.alert("INVALID REG")
        } else {
            window.alert("LogIn Successfull")
            localStorage.setItem('userDetails', JSON.stringify({ email, password }))

            history.push('./teacher')
        }
    }
    const LogInAdmin = async (e) => {
        e.preventDefault()
        // saveTokenInLocalStorage(response.data)


        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = res.json()
        console.log(data)

        if (res.status === 400 || !data) {
            window.alert("INVALID REG")
        } else {
            localStorage.setItem('userDetails', JSON.stringify({ email, password }))

            window.alert("LogIn Successfull")
            history.push('./admin')
        }
    }
    return (
        <>
            {/* <div className="body">
            <section className="signin">
                <div className="container">
                    <div className="signin-contents">
                        <div className="signin-form">
                            <h2 className="form-title">Sign In</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i class="zmdi zmdi-lock"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                                </div>
                                <div className="form-group_form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Student" onClick={LogInUser}></input>
                                </div>
                                <div className="form-group_form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Teacher" onClick={LogInTeacher}></input>
                                </div>
                                <div className="form-group_form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Admin" onClick={LogInAdmin}></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div> */}
            <div class="body-register">
                <div class="container-register">
                    <div class="title-register">Registration</div>
                    <div class="content-register">
                        <form action="#-register">
                            <div class="user-details-register">
                                <div class="input-box-register">
                                    <span class="details-register">Email</span>
                                    <input type="text" name="email" id="email" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" />
                                </div>
                                <div class="input-box-register">
                                    <span class="details-register">Password</span>
                                    <input type="password" name="password" id="password" autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                                </div>

                            </div>

                            <div class="button-register">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Student" onClick={LogInUser}></input>
                            </div>
                            <div class="button-register">

                                <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Teacher" onClick={LogInTeacher}></input>
                            </div>
                            <div class="button-register">

                                <input type="submit" name="signin" id="signin" className="form-submit" value="logIn Admin" onClick={LogInAdmin}></input>



                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LogIn;