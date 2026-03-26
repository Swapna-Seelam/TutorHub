import { useState,useEffect } from 'react';
import './Student.css';

export default function StudentHome() 
{
     const [student, setStudent] = useState("");
     
     useEffect(() => {
       const storedStudent = sessionStorage.getItem('student');
       if (storedStudent) {
        setStudent(JSON.parse(storedStudent));
       }
     }, []);
     
  return (
    <div>
      <h3>Hello {student.name}!</h3>
    </div>
  )
}