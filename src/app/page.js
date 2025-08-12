"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ExternalLink,
  Menu,
  X,
  Play,
} from "lucide-react";
import "./styles.css";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "resume", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Virtual Mall Lahore",
      description:
        "A fully responsive e-commerce platform built using Next.js, Firebase, Prisma, and MUI.",
      features: [
        "User authentication with Firebase",
        "Product listings and search",
        "Shopping cart and checkout",
        "Admin dashboard for managing products",
      ],
      tech: ["Next.js", "Firebase", "Prisma", "Material UI", "Tailwind CSS"],
      github: "https://github.com/areebafatima27/virtual-mall",
      demo: "#",
      video: "/videos/virtual-mall-lahore.mp4", // Added video demo
    },
    {
      title: "Audio processor",
      description:
        "An AI-powered tool that transcribes and summarizes multilingual meeting audio using Whisper and NLP.",
      features: [
        "Upload and transcribe audio files",
        "Summarize content with Gemini API",
        "Support for multiple languages",
        "Simple and intuitive UI",
      ],
      tech: ["Python", "Whisper", "Gemini API", "React", "Flask"],
      github: "https://github.com/areebafatima27/auth-app",
      demo: "#",
      video: "/videos/emo.mp4", // Added video demo
    },
    {
      title: "Digital Calendar Website",
      description:
        "A modern, interactive calendar application with event management, scheduling, and notification features built with React and Node.js.",
      features: [
        "Interactive calendar interface with month/week/day views",
        "Event creation and management system",
        "Responsive design for all devices",
      ],
      tech: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Calendar API",
        "Socket.io",
        "Tailwind CSS",
      ],
      github: "https://github.com/areebafatima27/digital-calendar",
      demo: "https://digital-calendar-demo.vercel.app",
      video: "/videos/calendar.mp4", // Added video demo
    },
  ];

  const skills = {
    "Web Development": [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Firebase",
    ],
    "AI & Machine Learning": [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Speech-to-Text",
      "Whisper API",
      "Gemini API",
      "Botpress",
    ],
    "Tools & Technologies": [
      "Git",
      "GitHub",
      "VS Code",
      "Chrome DevTools",
      "npm",
      "Vercel",
    ],
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="nav-links desktop-nav">
              {["home", "projects", "skills", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`nav-link ${
                      activeSection === item ? "active" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="mobile-nav">
              {["home", "projects", "skills", "resume", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="mobile-nav-link"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="gradient-text">Computer Science</span>
              <br />
              <span className="hero-subtitle">Graduate</span>
            </h1>
            <p className="hero-description">
              Passionate about web development and AI/ML with hands-on
              experience in building real-world applications that solve
              meaningful problems.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection("projects")}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-outline"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="scroll-indicator">
            <ChevronDown
              size={32}
              className="bounce-animation"
              onClick={() => scrollToSection("projects")}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Real-world applications showcasing my technical skills
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                {project.video && (
                  <div className="project-video">
                    <video controls className="demo-video">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="video-overlay">
                      <Play size={48} className="play-icon" />
                    </div>
                  </div>
                )}

                <div className="card-header">
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-description">{project.description}</p>
                </div>
                <div className="card-content">
                  <div className="features-section">
                    <h4 className="features-title">Key Features:</h4>
                    <ul className="features-list">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="feature-item">
                          <span className="feature-dot"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-section">
                    <h4 className="tech-title">Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline btn-small">
                          <Github size={16} />
                          Code
                        </button>
                      </a>
                    )}
                    {project.demo && project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="btn btn-outline btn-small">
                          <ExternalLink size={16} />
                          Demo
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-description">
              Technologies I work with and continuously learning
            </p>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h3 className="skill-category">{category}</h3>
                </div>
                <div className="skill-content">
                  <div className="skill-items">
                    {skillList.map((skill, idx) => (
                      <div key={idx} className="skill-item">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="resume-section">
        <div className="resume-container">
          <h2 className="section-title">Resume</h2>
          <p className="section-description">
            Download my resume to learn more about my experience and
            qualifications
          </p>
          <br />
          <a
            href="/CV.pdf"
            download
            className="btn btn-primary btn-large flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Let&#39;s discuss opportunities and collaborate on exciting
              projects
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-card">
              <div className="card-header">
                <h3 className="card-title">Send a Message</h3>
              </div>
              <div className="card-content">
                <form
                  className="contact-form"
                  action="https://formspree.io/f/xyzpzdop"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-item">
                  <Mail className="contact-icon" size={24} />
                  <div className="contact-details">
                    <h3 className="contact-label">Email</h3>
                    <p className="contact-value">afsbibi@example.com</p>
                  </div>
                </div>
              </div>

              <div className="social-section">
                <h3 className="social-title">Connect with me</h3>
                <div className="social-buttons flex gap-4">
                  <a
                    href="https://github.com/areebafatima27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-social flex items-center gap-2"
                  >
                    <Github size={20} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/areeba-fatima-027930275/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-social flex items-center gap-2"
                  >
                    <Linkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="opportunity-card">
                <h3 className="opportunity-title">Open to Opportunities</h3>
                <p className="opportunity-text">
                  I am currently looking for internship opportunities and
                  exciting projects to work on. Let&#39;s build something
                  amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            © 2025 Portfolio. Built with Next.js and CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
