import React from 'react';
import './style.css';
import './selfweb.css';
// If you have animations later, you can import AOS here
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// AOS.init();

const Portfolio = () => {
  return (
    <div>

      {/* Header Section */}
      <header id="home">
        <nav>
          <div className="logo">MyPortfolio</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="intro">
          <h1>Hello, I'm Mohan Dhonnar</h1>
          <p>Cloud Computing and Web Developer ☁️</p>
          <img src="WhatsApp Image 2025-04-27 at 13.39.53_7f6e7b39.jpg" alt="Your Photo" className="profile-pic" />
        </div>
      </header>

      {/* About Section */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a beginner Cloud Engineer passionate about starting my career in Cloud Computing.
          Solid foundation in AWS (EC2, S3, IAM), Linux systems, Git & GitHub, and basic frontend development with HTML, CSS, and JavaScript.
          I'm currently improving my skills in Docker, Jenkins, and cloud deployments.
          Looking for an internship to apply my knowledge and grow as a Cloud Engineer.
        </p>

        <h3>Skills</h3>
        <ul>
          <li>AWS</li>
          <li>HTML (strong), CSS (moderate), JavaScript (basic)</li>
          <li>Linux Basics</li>
          <li>JAVA</li>
          <li>Git & GitHub</li>
          <li>Docker Basics</li>
          <li>Jenkins Basics</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>

        <div className="project-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>Project 1: AWS S3 Static Website Hosting</h3>
            <img src="image.png" alt="AWS S3 Hosting Setup" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
            <h5>Image of AWS S3 Hosting</h5>

            <img src="Screenshot 2025-04-27 142533.png" alt="Deployed Static Website Screenshot" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
            <h5>Screenshot of the Deployed Webpage</h5>

            <video src="Console Home _ Console Home _ us-east-1 - Google Chrome 2025-04-27 03-20-47.mp4" width="100%" controls style={{ marginBottom: '10px' }} />
            <h5>Video Showing Project Deployment</h5>

            <p>Successfully deployed a static website using AWS S3 with full configuration and public access management.</p>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Project 2: Roadmap of IT Professions Website</h3>
            <p>
              <a href="http://montyweb.s3-website-us-east-1.amazonaws.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#0077cc', textDecoration: 'none', fontWeight: 'bold' }}>
                Visit Project 2 Website
              </a>
            </p>

            <img src="Screenshot 2025-04-27 142533.png" alt="Project 2 Screenshot" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
            <h5>Screenshot of Project 2</h5>

            <p>This project presents detailed roadmaps for IT careers like DevOps Engineer, Cloud Engineer, Full Stack Developer, and more.</p>
          </div>

        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications">
        <h2>Certifications</h2>
        <ul>
          <li><a href="https://www.trainwithshubham.com/share-certificate?serialno=KH3RUHGD" target="_blank" rel="noopener noreferrer">Linux for DevOps (Certificate)</a></li>
          <li><a href="https://www.credly.com/badges/4b143cbd-548c-493b-83e7-dd58cf551a57/linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Educate Introduction to Cloud 101 (Certificate)</a></li>
          <li><a href="https://www.trainwithshubham.com/share-certificate?serialno=R1PANPSJ" target="_blank" rel="noopener noreferrer">Computer Networking (Feb 2025) (Certificate)</a></li>
          <li><a href="https://www.simplilearn.com/free-java-beginners-course-skillup" target="_blank" rel="noopener noreferrer">Introduction to Programming Using Java (Certificate)</a></li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>

        <div className="education-item">
          <h3>Bachelor's Degree in Information Technology</h3>
          <p>Savitribai Phule Pune University, 2027 (Expected)</p>
          <p><strong>College:</strong> MET Bhujbal Knowledge City, Nashik</p>
          <p>SGPA: SEM 1 = 8.05, SEM 2 = 9.14, SEM 3 = 6.64</p>
        </div>

        <div className="education-item">
          <h3>12th Grade</h3>
          <p><strong>College:</strong> MVP GMD Arts, Commerce and Science College, Sinnar (2023)</p>
          <p><strong>Grade:</strong> B+</p>
        </div>

        <div className="education-item">
          <h3>10th Grade</h3>
          <p><strong>School:</strong> P.R. Bhor Vidhyalaya Thangoan (2021)</p>
          <p><strong>Grade:</strong> A+ (80%)</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>

        <form id="contact-form">
          <input type="text" id="name" placeholder="Mohan Dhonnar" required />
          <input type="email" id="email" placeholder="mohandhonnar98@gmail.com" required />
          <textarea id="message" placeholder="Write your message here..." required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <h2>Connect with Me</h2>
          <a href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a><br />
          <a href="https://github.com/your-github-id" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Mohan Dhonnar. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Portfolio;
