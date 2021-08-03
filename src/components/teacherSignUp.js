import React,{useState} from 'react'
import SignUpPic from '../images/pic.png'
import { NavLink, useHistory } from "react-router-dom"
// import User from '../../../server/model/userSchema'
// import User from "../../../server/model/userSchema.js"




const TeacherSignUp = () => {
    const history=useHistory()
    const [user,setUser]=useState({
        name:"",fathername:"",teacherId:"",email:"",phone:"",password:"",cpassword:""
    })
    let name,value
    const handleInputs=(e)=>{
        console.log(e)
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
    }
    var [instructorOf, setInstructorOf] = useState([])
    const handleInp = (e) => {
        instructorOf = e.target.value.split(",")
        // console.log(courseContent)
        setInstructorOf(instructorOf)
    }
    const PostData=async (e)=>{
        e.preventDefault();
        console.log(user)
       const { name,fathername,teacherId,email,phone,password,cpassword}=user;
       const res =await fetch('/register-teacher',{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify({
             name,fathername,teacherId,email,phone,instructorOf,password,cpassword
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
            <input type="text" name="name" id="name" value={user.name} placeholder="Enter Teacher Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Father Name</span>
            <input type="text" name="fathername" id="fathername" value={user.fathername} placeholder="Enter Teacher's Father Name"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Email</span>
            <input type="text" name="email" id="email" value={user.email} placeholder="Enter Teacher's Email"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Teacher  Id</span>
            <input type="text" name="teacherId" id="teacherId" value={user.teacherId} placeholder="Enter Teacher's Id"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Phone Number</span>
            <input type="text" name="phone" id="phone" value={user.phone} placeholder="Enter Teacher's Phone #"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Field</span>
            <input type="text" name="instructorOf" id="instructorOf" value={user.instructorOf} placeholder="Enter Teacher's Subjects"  onChange={handleInp} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Password</span>
            <input type="password" name="password" id="password" value={user.password} placeholder="Enter Teacher's password"  onChange={handleInputs} required/>
          </div>
          <div class="input-box-register">
            <span class="details-register">Confirm Password</span>
            <input type="password" name="cpassword" id="cpassword" value={user.cpassword} placeholder="Confirm Teacher's password"  onChange={handleInputs} required/>
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

export default TeacherSignUp;