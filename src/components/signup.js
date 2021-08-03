import React,{useState} from 'react'
import SignUpPic from '../images/pic.png'
import { NavLink, useHistory } from "react-router-dom"
// import User from '../../../server/model/userSchema'
// import User from "../../../server/model/userSchema.js"




const SignUp = () => {
    const history=useHistory()
    const [user,setUser]=useState({
        name:"",fathername:"",rollno:"",email:"",phone:"",enrolledclass:"",password:"",cpassword:""
    })
    let name,value
    const handleInputs=(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }
    const PostData=async (e)=>{
        // e.preventDefault();
        console.log(user)
       const { name,fathername,rollno,email,phone,enrolledclass,password,cpassword}=user;
       const res =await fetch('/register',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
             name,fathername,rollno,email,phone,enrolledclass,password,cpassword
           })
       })
       const data=await res.json()
       if(data.status===422 || !data){
           window.alert("invalid registration")
       }else{
           window.alert("registration successfully")
        //    history.push("/login")
       }

    }
    return (
        <>



<div class="body-register">
  <div class="container-register">
    <div class="title-register">Registration</div>
    <div class="content-register">
      <form action="#-register">
        <div class="user-details-register">
          <div class="input-box-register">
            <span class="details-register">Full Name</span>
            <input type="text" name="name" id="name" value={user.name} placeholder="Enter Student Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Father Name</span>
            <input type="text" name="fathername" id="fathername" value={user.fathername} placeholder="Enter Student's Father Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Email</span>
            <input type="text" name="email" id="email" value={user.email} placeholder="Enter Student's Email"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Roll Number</span>
            <input type="text" name="rollno" id="rollno" value={user.rollno} placeholder="Enter Student's Roll #"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Phone Number</span>
            <input type="text" name="phone" id="phone" value={user.phone} placeholder="Enter Student's Phone #"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Field</span>
            <input type="text" name="enrolledclass" id="enrolledclass" value={user.enrolledclass} placeholder="Enter Student's Field"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Password</span>
            <input type="password" name="password" id="password" value={user.password} placeholder="Enter Student's password"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Confirm Password</span>
            <input type="password" name="cpassword" id="cpassword" value={user.cpassword} placeholder="Confirm Student's password"  onChange={handleInputs} required/>
          </div>
        </div>
        
        <div class="button-register">
          <input type="submit" value="Register" onClick={PostData}/>
        </div>
      </form>
    </div>
  </div>
  </div>

        </>
    )
}

export default SignUp;