import logo from './logo.svg';
import SignUp from './components/signup'
import TimeTable from './components/timetable.js' 
import ShowTimeTable from './components/showTimeTable.js' 
import Navbar from './components/navbar'
import LogIn from './components/signin'
import Home from './components/home'
import Attendance from './components/attendance'
import Marks from './components/adminMarks'
import Student from './components/student'
import CourseContent from './components/courseContent'
import ChangePassword from './components/changePassword';
import Teacher from './components/teacher';
import Admin from './components/admin';
import Error from './components/404';
import TeacherSignUp from './components/teacherSignUp';
import AdminSignUp from './components/registerAdmin';



import {Route} from "react-router-dom"


import './App.css';

function App() {
  return (
    <>
    {/* <Navbar></Navbar> */}
    <Route exact path="/"><Home></Home></Route>

      <Route exact path="/signup"><SignUp></SignUp></Route>
      <Route exact path="/timetable"><TimeTable></TimeTable></Route>
      <Route exact path="/showtimetable"><ShowTimeTable></ShowTimeTable></Route>
      <Route exact path="/signin"><LogIn></LogIn></Route>
      <Route exact path="/attendance"><Attendance></Attendance></Route>
      <Route exact path="/mark"><Marks></Marks></Route>
      <Route exact path="/student"><Student></Student></Route>
      <Route exact path="/course"><CourseContent></CourseContent></Route>
      <Route exact path="/changepassword"><ChangePassword></ChangePassword></Route>
      <Route exact path="/teacher"><Teacher></Teacher></Route>
      <Route exact path="/admin"><Admin></Admin></Route>
      <Route exact path="/404"><Error></Error></Route>
      <Route exact path="/register-teacher"><TeacherSignUp></TeacherSignUp></Route>
      <Route exact path="/register-admin"><AdminSignUp></AdminSignUp></Route>

    </>
  );
}

export default App;
