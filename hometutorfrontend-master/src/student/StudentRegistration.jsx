import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './Student.css'; // Assuming you placed the CSS here

export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    contactno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/student/registration`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          contactno: '',
          location: ''
        });
      }
    } catch (error) {
      if (error.response) {
        setMessage('');
        setError(error.response.data);
      } else {
        setMessage('');
        setError('An unexpected error occurred.');
      }
    }
  };

  return (
    <div className="main-content">
      <div className="student-registration-container">
        <form onSubmit={handleSubmit} className="student-registration-form">
          <h3>Student Registration</h3>
          
          {message && <p className="message success">{message}</p>}
          {error && <p className="message error">{error}</p>}

          <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select id="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="contactno">Mobile No</label>
            <input type="number" id="contactno" value={formData.contactno} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" value={formData.location} onChange={handleChange} required />
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}