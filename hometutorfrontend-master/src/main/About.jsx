import './About.css';

export default function About() {
  return (
    <main className="about-wrapper">
      <div className="about-container">
        <h2 className="about-title">About Home Tutor Finder</h2>
        <p className="about-description">
          Home Tutor Finder is your trusted platform designed to connect students with highly qualified and verified tutors across various subjects and levels. Whether you're preparing for exams, improving academi
        </p>your convenience.

        <h3 className="about-subheading">Key Benefits</h3>
        <ul className="benefits-list">
          <li>📘 <strong>Personalized Learning:</strong> Tailor-made lessons to match each student's pace and learning style.</li>
          <li>🧑‍🏫 <strong>Qualified Tutors:</strong> All tutors are verified, experienced, and passionate educators.</li>
          <li>🏠 <strong>Learn from Home:</strong> Study safely and comfortably with in-home or online tutoring options.</li>
          <li>⏰ <strong>Flexible Scheduling:</strong> Book sessions at times that work best for you.</li>
          <li>💰 <strong>Affordable Plans:</strong> High-quality education that doesn’t break the bank.</li>
          <li>📈 <strong>Progress Tracking:</strong> Monitor improvement with regular feedback and session reports.</li>
        </ul>

        <div className="about-call-to-action">
          <h4>JOIN THOUSANDS OF STUDENTS ACHIEVING ACADEMIC SUCCESS THROUGH HOME TUTOR FINDER.</h4>
          <p>Start your journey with us today!</p>
        </div>
      </div>
    </main>
  );
}
