// UpdateProfile.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';
import './UpdateProfile.css';

export default function UpdateProfile() {
  const [formData, setFormData] = useState({
    id: '',
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

  useEffect(() => {
    const storedStudent = sessionStorage.getItem('student');
    if (storedStudent) {
      setFormData(JSON.parse(storedStudent));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${config.url}/student/updateprofile`, formData);
      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        sessionStorage.setItem('student', JSON.stringify(formData));
      }
    } catch (error) {
      setMessage('');
      setError(error.response ? error.response.data : "An unexpected error occurred.");
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <h3>Update Profile</h3>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}

        <form onSubmit={handleSubmit}>
  <div>
    <label>Full Name</label>
    <input type="text" id="name" value={formData.name} onChange={handleChange} required />
  </div>
  <div>
    <label>Gender</label>
    <select id="gender" value={formData.gender} onChange={handleChange} disabled>
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
  </div>
  <div>
    <label>Date of Birth</label>
    <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
  </div>
  <div>
    <label>Email</label>
    <input type="email" id="email" value={formData.email} onChange={handleChange} required />
  </div>
  <div>
    <label>Username</label>
    <input type="text" id="username" value={formData.username} onChange={handleChange} disabled />
  </div>
  <div>
    <label>Password</label>
    <input type="password" id="password" value={formData.password} onChange={handleChange} required />
  </div>
  <div>
    <label>Mobile No</label>
    <input type="number" id="contactno" value={formData.contactno} onChange={handleChange} required />
  </div>
  <div>
    <label>Location</label>
    <input type="text" id="location" value={formData.location} onChange={handleChange} required />
  </div>
  <button type="submit">Update</button>
</form>

      </div>
    </div>
  );
}
