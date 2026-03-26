import { useState,useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useAuth } from '../contextapi/AuthContext';
import TutorHome from './TutorHome';
import TutorProfile from'./TutorProfile'
import AddCourse from './AddCourse';
import ViewCoursesByTutor from './ViewCoursesByTutor'
import ViewBookings from './viewBookings'
import TutorLogin from './TutorLogin';

export default function TutorNavBar() 
{
  const { setIsTutorLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
  setIsTutorLoggedIn(false);
  sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Tutor</div>
        <ul className="nav-links">
          <li><Link to="/tutorhome">Home</Link></li>
          <li><Link to="/tutorprofile">Tutor Profile</Link></li>
          <li><Link to="/addcourse">Add New Course</Link></li>
          <li><Link to="/viewcoursesbytutor">View Courses</Link></li>
          <li><Link to="/viewbookings">View Bookings</Link></li>
          <li><Link to="/tutorlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/tutorhome" element={<TutorHome />} exact />
        <Route path="/tutorprofile" element={<TutorProfile/>} exact />
        <Route path="/addcourse" element={<AddCourse/>} exact />
        <Route path="/viewcoursesbytutor" element={<ViewCoursesByTutor/>} exact />
        <Route path="/viewbookings" element={<ViewBookings/>} exact />
        <Route path="/tutorlogin" element={<TutorLogin/>} exact />
      </Routes>
    </div>
  );
}