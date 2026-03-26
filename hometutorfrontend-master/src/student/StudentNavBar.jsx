import { Routes, Route, Link } from 'react-router-dom';
import StudentHome from './StudentHome';
import StudentLogin from './StudentLogin';
import StudentProfile from './StudentProfile'
import UpdateProfile from './UpdateProfile'
import BookCourse from './BookCourse'
import BookedCourses from './BookedCourses'
import ViewAllCourses from './ViewAllCourses'
import { useAuth } from '../contextapi/AuthContext';

export default function StudentNavBar() 
{
  const { setIsStudentLoggedIn } = useAuth(); 

  const handleLogout = () => 
 {
    setIsStudentLoggedIn(false);
    sessionStorage.clear()
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Student</div>
        <ul className="nav-links">
          <li><Link to="/studenthome">Home</Link></li>
          <li><Link to="/studentprofile">Student Profile</Link></li>
          <li><Link to="/updateprofile">Update Profile</Link></li>
          <li><Link to="/viewallcourses">Book a New Course</Link></li>
          <li><Link to="/bookedcourses">Booked Courses</Link></li>
          <li><Link to="/studentlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/studenthome" element={<StudentHome />} exact />
        <Route path="/studentprofile" element={<StudentProfile />} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/updateprofile" element={<UpdateProfile/>} exact />
        <Route path="/viewallcourses" element={<ViewAllCourses/>} exact />
        <Route path="/bookcourse" element={<BookCourse/>} />
        <Route path="/bookedcourses" element={<BookedCourses/>} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
      </Routes>
    </div>
  );
}


<div className="main-content">
  <div className="section">
    <h2>Admin</h2>
    <ul>
      <li>Admin Login</li>
      <li>Add Tutor</li>
      <li>View/Delete Tutors</li>
      <li>View Tutors</li>
      <li>Delete/Block Students</li>
      <li>View All Reg Students</li>
    </ul>
  </div>

  <div className="section">
    <h2>Tutor</h2>
    <ul>
      <li>Tutor Login</li>
      <li>View/Update Profile</li>
      <li>Add New Tutor</li>
      <li>View Students</li>
      <li>View Bookings</li>
    </ul>
  </div>

  <div className="section">
    <h2>Student</h2>
    <ul>
      <li>Registration</li>
      <li>Student Login</li>
      <li>View/Update Profile</li>
      <li>Book a Tutor</li>
    </ul>
  </div>
</div>
