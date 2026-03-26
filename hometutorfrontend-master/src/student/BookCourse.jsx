import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import config from '../config';
import './BookCourse.css';


export default function BookCourse() 
{
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const courseId = queryParams.get('courseid'); 

  const [student, setStudent] = useState(null);
  const [formData, setFormData] = useState({
    startdate: '',
    enddate: '',
    bookedcapacity: 1
  });

  useEffect(() => {
    const storedStudent = sessionStorage.getItem("student");
    if (storedStudent) {
      setStudent(JSON.parse(storedStudent));
    } else {
      alert("Student not logged in!");
      navigate('/studentlogin');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      course: { id: courseId },
      student: { id: student.id },
      ...formData,
      status: 1
    };

    try {
      const response = await fetch(`${config.url}/student/bookcourse`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        alert("Course booked successfully!");
        navigate('/bookedcourses');
      } else {
        alert("Failed to book course.");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center' }}>Book Course</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
  <div>
    <label>Card Number:</label>
    <input type="text" name="cardnumber" placeholder="1234 5678 9012 3456" required />
  </div>
  <div>
    <label>Expiry Date:</label>
    <input type="month" name="expiry" required />
  </div>
  <div>
    <label>CVV:</label>
    <input type="password" name="cvv" maxLength="3" required />
  </div>
  <div>
    <label>UPI ID:</label>
    <input type="password" name="upi" maxLength="10" required />
  </div>

  {/* Dummy hidden fields to keep backend working */}
  <input type="hidden" name="startdate" value={formData.startdate || '2025-01-01'} />
  <input type="hidden" name="enddate" value={formData.enddate || '2025-01-31'} />
  <input type="hidden" name="bookedcapacity" value={formData.bookedcapacity || 1} />

  <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <button type="submit">Pay & Book</button>
  </div>
</form>

    </div>
  );
}
