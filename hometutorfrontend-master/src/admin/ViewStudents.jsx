import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './admin.css';


export default function ViewStudents() 
{
    const [students, setStudents] = useState([]);
    const [error, setError] = useState("");

    const displayStudents = async () => 
    {
        try 
        {
            const response = await axios.get(`${config.url}/admin/viewallstudents`);
            setStudents(response.data);
        } 
        catch (err) 
        {
            setError("Failed to fetch customers data ... " + err.message);
        }
    };

    useEffect(() => {
        displayStudents();
    }, []);

    const deleteStudent = async (sid) => 
    {
        try 
        {
            const response = await axios.delete(`${config.url}/admin/deletestudent?sid=${sid}`);
            toast.success(response.data);  // show success toast
            displayStudents();           // refresh customer list
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
                <u>View All Students</u>
            </h3>

            <ToastContainer position="top-center" autoClose={4000} />

            {error ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    {error}
                </p>
            ) : students.length === 0 ? (
                <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "red" }}>
                    No Student Data Found
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.gender}</td>
                                <td>{student.dob}</td>
                                <td>{student.email}</td>
                                <td>{student.username}</td>
                                <td>{student.mobileno}</td>
                                <td>{student.location}</td>
                                <td>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteIcon />}
                                        onClick={() => deleteStudent(student.id)}
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