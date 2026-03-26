import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ViewTutors() 
{
    const [tutors, setTutors] = useState([]);
    const [error, setError] = useState("");

    const displayTutors = async () => 
    {
        try 
        {
            const response = await axios.get(`${config.url}/admin/viewallcoursetutors`);
            setTutors(response.data);
        } 
        catch (err) 
        {
            setError("Failed to fetch course tutors data ... " + err.message);
        } 
    };

    useEffect(() => {
        displayTutors();
    }, []);

    const deleteTutor = async (tid) => 
    {
        try 
        {
            const response = await axios.delete(`${config.url}/admin/deletetutor?tid=${tid}`);
            toast.success(response.data);  // show success toast
            displayTutors();               // refresh tutors list
        } 
        catch (err) 
        {
            console.log(err);
            setError("Unexpected Error Occurred... " + err.message);
            toast.error("Deletion failed: " + err.message); // show error toast
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h3 style={{ textAlign: "center", color: "black", fontWeight: "bolder" }}>
                <u>View All Course Tutors</u>
            </h3>

            <ToastContainer position="top-center" autoClose={4000} />

            {error ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    {error}
                </p>
            ) : tutors.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    No Course Tutors Data Found
                </p>
            ) : (
                <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>DOB</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Contact No</th>
                            <th>Location</th>
                            <th>Subject Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tutors.map((tutor) => (
                            <tr key={tutor.id}>
                                <td>{tutor.id}</td>
                                <td>{tutor.name}</td>
                                <td>{tutor.gender}</td>
                                <td>{tutor.dob}</td>
                                <td>{tutor.email}</td>
                                <td>{tutor.username}</td>
                                <td>{tutor.mobileno}</td>
                                <td>{tutor.location}</td>
                                <td>{tutor.subject_name}</td>
                                <td>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => deleteTutor(tutor.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
