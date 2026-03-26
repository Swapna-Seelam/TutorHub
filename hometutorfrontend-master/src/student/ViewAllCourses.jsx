import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './ViewAllCourses.css';

export default function ViewAllCourses() {
  const [courses, setCourses] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    id: '',
    tutor: '',
    subject: '',
    accessmode: '',
    title: '',
    description: '',
    capacity: '',
    mobileno:'',
    location:'',
    cost: '',
    company: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const fetchAllCourses = async () => {
    try {
      const response = await fetch(`${config.url}/student/viewallcourses`);
      const data = await response.json();
      console.log("Fetched courses:", data); // Debugging log
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleBookClick = (courseId) => {
    const student = JSON.parse(sessionStorage.getItem("student"));
    if (!student || !student.id) {
      alert("Student not logged in");
      return;
    }
    navigate(`/bookcourse?courseid=${courseId}`);
  };

  const handleSearchChange = (e, field) => {
    setSearchTerms(prev => ({ ...prev, [field]: e.target.value }));
  };

  const filteredCourses = courses.filter(course => {
    const tutorName = course.tutor?.name || '';
    const companyName = course.tutor?.company_name || '';
    const subjectName = course.tutor?.subject_name || '';

    return (
      course.id?.toString().includes(searchTerms.id) &&
      tutorName.toLowerCase().includes(searchTerms.tutor.toLowerCase()) &&
      companyName.toLowerCase().includes(searchTerms.company.toLowerCase()) &&
      subjectName.toLowerCase().includes(searchTerms.subject.toLowerCase()) &&
      course.accessmode?.toLowerCase().includes(searchTerms.accessmode.toLowerCase()) &&
      course.title?.toLowerCase().includes(searchTerms.title.toLowerCase()) &&
      course.description?.toLowerCase().includes(searchTerms.description.toLowerCase()) &&
      course.capacity?.toString().includes(searchTerms.capacity) &&
      course.cost?.toString().includes(searchTerms.cost)
    );
  });

  return (
    <div className="event-container">
      <h3 className="event-heading">Available Courses</h3>
      <table className="event-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Stream</th>
            <th>Access Mode</th>
            <th>Tutor name</th>
            <th>Course Name & Description</th>
            <th>Capacity</th>
            <th>Contact Tutor</th>
             <th>Tutor Location</th>
            <th>Cost</th>
            <th>Booking</th>
          </tr>
          <tr>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'id')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'subject')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'accessmode')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'title')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'description')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'capacity')} /></th>
             <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'mobileno')} /></th>
              <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'location')} /></th>
            <th><input type="text" placeholder="Search..." onChange={e => handleSearchChange(e, 'cost')} /></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.tutor?.subject_name || 'N/A'}</td>
                <td>{course.accessmode}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.capacity}</td>
                 <td>{course.tutor?.mobileno || 'N/A'}</td>
                  <td>{course.tutor?.location || 'N/A'}</td>

                <td>{course.cost}</td>
                <td>
                  <button className="book-button" onClick={() => handleBookClick(course.id)}>Book</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No matching courses found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
