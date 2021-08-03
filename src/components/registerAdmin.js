import React,{useState} from 'react'
import SignUpPic from '../images/pic.png'
import { NavLink, useHistory } from "react-router-dom"
// import User from '../../../server/model/userSchema'
// import User from "../../../server/model/userSchema.js"




const AdminSignUp = () => {
    const history=useHistory()
    const [user,setUser]=useState({
        name:"",fathername:"",adminId:"",email:"",phone:"",password:"",cpassword:""
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
       const { name,fathername,adminId,email,phone,password,cpassword}=user;
       const res =await fetch('/register-admin',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
             name,fathername,adminId,email,phone,password,cpassword
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
            <input type="text" name="name" id="name" value={user.name} placeholder="Enter Admin Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Father Name</span>
            <input type="text" name="fathername" id="fathername" value={user.fathername} placeholder="Enter Admin's Father Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Email</span>
            <input type="text" name="email" id="email" value={user.email} placeholder="Enter Admin's Email"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Admin Id</span>
            <input type="text" name="adminId" id="adminId" value={user.adminId} placeholder="Enter Admin's Roll #"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Phone Number</span>
            <input type="text" name="phone" id="phone" value={user.phone} placeholder="Enter Admin's Phone #"  onChange={handleInputs} required/>
          </div>
          
          <div class="input-box-register">
            <span class="details-register">Password</span>
            <input type="password" name="password" id="password" value={user.password} placeholder="Enter Admin's password"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Confirm Password</span>
            <input type="password" name="cpassword" id="cpassword" value={user.cpassword} placeholder="Confirm Admin's password"  onChange={handleInputs} required/>
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

export default AdminSignUp;