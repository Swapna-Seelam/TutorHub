import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './style.css';
import StudentLogin from './../student/StudentLogin';
import StudentRegistration from './../student/StudentRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
// import ManagerLogin from '../manager/ManagerLogin';
// import NotFound from './NotFound';
import TutorLogin from './../Tutor/TutorLogin';

export default function MainNavBar() 
{
  return (
    <div>
      <nav className="navbar">
        <div className="logo"><i>TUTORNEST</i></div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/studentregistration">Registration</Link></li>
          <li className="dropdown">
            <span>Login ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/studentlogin">Student</Link></li>
              <li><Link to="/tutorlogin">Tutor</Link></li>
              <li><Link to="/adminlogin">Admin</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/studentregistration" element={<StudentRegistration />} exact />
        <Route path="/studentlogin" element={<StudentLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/tutorlogin" element={<TutorLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
        {/* <Route path="*" element={<NotFound />} exact /> */}
      </Routes>
    </div>
  );
}