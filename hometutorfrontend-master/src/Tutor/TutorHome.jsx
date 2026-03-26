import { useState, useEffect } from 'react';

export default function TutorHome() {
  const [tutor, setTutor] = useState("");

  useEffect(() => {
    const storedTutor = sessionStorage.getItem('tutor');
    if (storedTutor) {
      setTutor(JSON.parse(storedTutor));
    }
  }, []);

  return (
    <div>
      <h3>Hello {tutor.name}</h3>
    </div>
  );
}
