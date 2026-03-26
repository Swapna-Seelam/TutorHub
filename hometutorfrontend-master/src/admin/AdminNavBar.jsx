import { Routes, Route, Link } from 'react-router-dom';
import './admin.css';
import AdminHome from './AdminHome';
import ViewStudents from './ViewStudents';
import AdminLogin from './AdminLogin';
import { useAuth } from '../contextapi/AuthContext';
import AddTutor from './AddTutor';
import ViewTutors from './ViewTutors';

export default function AdminNavBar() 
{
  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => 
  {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Welcome Admin</div>
        <ul className="nav-links">
          <li><Link to="/adminhome">Home</Link></li>
          <li><Link to="/addcoursetutor">Add Course Tutor</Link></li>
          <li><Link to="/viewtutors">View Course Tutor</Link></li>
          <li><Link to="/viewallstudents">View All Students</Link></li>


          <li><Link to="/adminlogin" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/addcoursetutor" element={<AddTutor />} exact />
        <Route path="/viewtutors" element={<ViewTutors />} exact />
        <Route path="/viewallstudents" element={<ViewStudents />} exact />

        <Route path="/adminlogin" element={<AdminLogin />} exact />
      </Routes>
    </div>
  );
}