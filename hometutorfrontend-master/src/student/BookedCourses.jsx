import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './BookedCourses.css';


export default function BookedCourses() {
  const [bookedCourses, setBookedCourses] = useState([]);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchBookedCourses = async () => {
      const storedStudent = sessionStorage.getItem('student');
      if (storedStudent) {
        const studentData = JSON.parse(storedStudent);
        setStudent(studentData);
        try {
          const response = await axios.get(`${config.url}/student/bookedcourses/${studentData.id}`);
          setBookedCourses(response.data);
        } catch (error) {
          console.error('Error fetching booked courses:', error);
        }
      } else {
        alert('Please log in to view your booked courses.');
      }
    };

    fetchBookedCourses();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Your Booked Courses</h3>
      {student ? (
        <div>
          <table style={{ width: '100%', textAlign: 'center', marginBottom: '30px' }}>
            <thead style={{ backgroundColor: '#f2f2f2' }}>
              <tr>
                <th>Booking ID</th>
                <th>Course AccessMode</th>
                <th>Tutor Name</th>
                 {/* <th>Course Title</th> */}
                {/* <th>Start Date</th>
                <th>End Date</th> */}
                <th>Booked Capacity</th>
                <th>Status</th>
                <th>Booking Time</th>
              </tr>
            </thead>
            <tbody>
              {
                bookedCourses.length > 0 ? bookedCourses.map((course, index) => (
                  <tr key={index}>
                    <td>{course.id}</td>
                    <td>{course.course.accessmode}</td>
                    <td>{course.course.title}</td>
                     {/* <td>{course.tutor?.subject_name || 'N/A'}</td> */}
                    {/* <td>{course.startdate}</td>
                    <td>{course.enddate}</td> */}
                    <td>{course.bookedcapacity}</td>
                    <td>{course.status}</td>
                    <td>{new Date(course.bookingtime).toLocaleString()}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="8">No booked courses found.</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading your student details...</p>
      )}
    </div>
  );
}
