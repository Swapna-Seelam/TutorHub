import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [tutorId, setTutorId] = useState(null);

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      const tutor = JSON.parse(storedTutor);
      setTutorId(tutor.id);
      fetchBookings(tutor.id);
    } else {
      setError('Tutor not logged in.');
    }
  }, []);

  const fetchBookings = async (tutorId) => {
    try {
      const response = await axios.get(`${config.url}/tutor/viewbookingsbytutor/${tutorId}`);
      setBookings(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch bookings');
      setBookings([]);
    }
  };

  const updateStatus = async (bookingId, status) => {
    try {
      const response = await axios.get(`${config.url}/tutor/updatebookingstatus`, {
        params: {
          id: bookingId,
          status: status
        }
      });
      alert(response.data);
      fetchBookings(tutorId); // Refresh the bookings list
    } catch (err) {
      alert('Failed to update booking status');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: 'center', textDecoration: 'underline' }}>Bookings for My Courses</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {bookings.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No bookings available for your courses.</p>
      ) : (
        <table style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
          <thead style={{ backgroundColor: '#f2f2f2' }}>
            <tr>
              <th>Booking ID</th>
              <th>Course ID</th>
              <th>Course Title</th>
              <th>Student Name</th>
              <th>Student Email</th>
              {/* <th>Start Date</th>
              <th>End Date</th> */}
              <th>Booked Capacity</th>
              <th>Status</th>
              <th>Booking Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.id}</td>
                <td>{booking.course.id}</td>
                <td>{booking.course.title}</td>
                <td>{booking.student.name}</td>
                <td>{booking.student.email}</td>
                {/* <td>{booking.startdate}</td>
                <td>{booking.enddate}</td> */}
                <td>{booking.bookedcapacity}</td>
                <td>{booking.status}</td>
                <td>{new Date(booking.bookingtime).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => updateStatus(booking.id, 'ACCEPTED')}
                    style={{ marginRight: '5px', backgroundColor: 'green', color: 'white' }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => updateStatus(booking.id, 'REJECTED')}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
