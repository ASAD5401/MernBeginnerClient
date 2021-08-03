import React from 'react'
import { useHistory } from 'react-router-dom'
const Error=()=>{
    const history=useHistory()
    const Return=()=>{
        history.push('./')
    }
    return(
    <>
    <h1>404 Not Found</h1>
    <button onClick={Return}>Return To Home</button>
    </>
    )
}

export default Error;