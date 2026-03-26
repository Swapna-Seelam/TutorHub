import './StudentProfile.css';
import { useState, useEffect } from 'react';

export default function StudentProfile() 
{
  const [student, setStudent] = useState("");
     
  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    }
  }, []);

  if (!student) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Student Profile
      </h2>

      <div className="profile-container">
  {/* <h2>Student Profile</h2> */}
  <div className="profile-card">
    <p><strong>Name:</strong> {student.name}</p>
    <p><strong>Gender:</strong> {student.gender}</p>
    <p><strong>Date of Birth:</strong> {student.dob}</p>
    <p><strong>Email:</strong> {student.email}</p>
    <p><strong>Username:</strong> {student.username}</p>
    <p><strong>Contact No:</strong> {student.contactno}</p>
    <p><strong>Location:</strong> {student.location}</p>
  </div>
</div>

    </div>
  );
}
