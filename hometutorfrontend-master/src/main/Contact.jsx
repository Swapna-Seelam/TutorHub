import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
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
      const response = await axios.post(`${config.url}/sendemail`, formData);
      setMessage(response.data);
      setError('');
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
        location: ''
      });
    } catch (err) {
      setError('Failed to send email');
      setMessage('');
      console.error(err);
    }
  };

  return (
    <div className="form-wrapper"> {/* Removed the outer white container */}
      <h3 className="form-title">Contact Us</h3>
      {message && <p className="success-msg">{message}</p>}
      {error && <p className="error-msg">{error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <div>
  <label>Message</label>
  <textarea
    id="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows="5"
    cols="33"
    style={{ resize: 'vertical' }}
  />
</div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
