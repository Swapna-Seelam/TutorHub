import { useState } from 'react';
import './admin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import { useAuth } from '../contextapi/AuthContext'; 

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { setIsAdminLoggedIn } = useAuth();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");    // Clear previous error
    setMessage("");  // Clear previous message

    try {
      const response = await axios.post(`${config.url}/admin/checkadminlogin`, formData);

      if (response.status === 200) {
        setMessage("Login successful! Redirecting...");
        setIsAdminLoggedIn(true); // set admin logged-in status to true
        setTimeout(() => {
          navigate("/adminhome"); // Redirect after short delay
        }, 1000);
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid Username or Password.");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="admin-login-container">
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Admin Login</h3>

      {message && (
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p>
      )}
      {error && (
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      )}

      <form onSubmit={handleSubmit} className="admin-login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
