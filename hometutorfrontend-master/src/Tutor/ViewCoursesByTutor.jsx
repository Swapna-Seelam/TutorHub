import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewCoursesByTutor() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');
  const [tutorId, setTutorId] = useState(null);

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      const tutor = JSON.parse(storedTutor);
      setTutorId(tutor.id);
      fetchCourses(tutor.id);
    }
  }, []);

  const fetchCourses = async (tutorId) => {
    try {
      const response = await axios.get(`${config.url}/tutor/viewcoursesbytutor/${tutorId}`);
      setCourses(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your courses');
      setCourses([]);
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Courses</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {courses.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No courses added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '90%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Access Mode</th>
              <th>UserName</th>
              <th>Description</th>
              <th>Capacity</th>
              <th>Cost</th>
              <th>Tutor Name</th>
              <th>Tutor Email</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.accessmode}</td>
                <td>{course.title}</td>
                <td>{course.description}</td>
                <td>{course.capacity}</td>
                <td>{course.cost}</td>
                <td>{course.tutor?.name}</td>
                <td>{course.tutor?.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
