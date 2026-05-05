import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Business Website",
      type: "WordPress / Elementor",
      description:
        "A modern responsive website for a local business, focused on clean design, lead generation and WhatsApp contact.",
      tags: ["WordPress", "Elementor", "SEO", "Responsive"],
    },
    {
      title: "SaaS Notes Dashboard",
      type: "React Application",
      description:
        "A professional dashboard for managing notes, with clean UI, cards, stats and organized user experience.",
      tags: ["React", "CSS", "Dashboard", "Frontend"],
    },
    {
      title: "Banking App Interface",
      type: "UI / Frontend",
      description:
        "A premium banking-style interface with modern layout, balance cards, transactions and mobile-first design.",
      tags: ["HTML", "CSS", "JavaScript", "UI Design"],
    },
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">GM.</div>

        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <span className="badge">Available for freelance projects</span>

            <h1>
              I build modern websites and interfaces with{" "}
              <span>WordPress & React.</span>
            </h1>

            <p>
              Frontend developer focused on clean design, responsive layouts and
              websites that help businesses look professional online.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View Projects
              </a>

              <a
                href="mailto:gustavo.mourao.dev@gmail.com"
                className="btn secondary"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="profile-box">
              <div className="avatar">G</div>
              <h3>Gustavo Mourão</h3>
              <p>Frontend Developer</p>
            </div>

            <div className="skills">
              <div>
                <strong>React</strong>
                <small>Frontend Apps</small>
              </div>

              <div>
                <strong>WordPress</strong>
                <small>Business Websites</small>
              </div>

              <div>
                <strong>HTML/CSS</strong>
                <small>Responsive UI</small>
              </div>
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <h2>3+</h2>
            <p>Portfolio Projects</p>
          </div>

          <div>
            <h2>100%</h2>
            <p>Responsive Layouts</p>
          </div>

          <div>
            <h2>Fast</h2>
            <p>Clean Delivery</p>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <span>Selected Work</span>
            <h2>Projects built to attract real clients</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <div className="project-number">0{index + 1}</div>

                <h3>{project.title}</h3>
                <strong>{project.type}</strong>
                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>

                <button>View Case Study</button>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-text">
            <span>About Me</span>

            <h2>I create clean, professional and responsive web experiences.</h2>

            <p>
              I'm a frontend developer focused on WordPress, React, HTML and
              CSS. My goal is to help businesses and clients have websites that
              look modern, work well on mobile and feel trustworthy.
            </p>

            <p>
              I focus on clear communication, fast delivery and building
              interfaces that are simple, beautiful and functional.
            </p>
          </div>

          <div className="about-box">
            <h3>Main Skills</h3>

            <ul>
              <li>WordPress websites</li>
              <li>React interfaces</li>
              <li>Responsive design</li>
              <li>Landing pages</li>
              <li>Business websites</li>
              <li>Clean HTML/CSS</li>
            </ul>
          </div>
        </section>

        <section className="cta" id="contact">
          <h2>Need a modern website or frontend interface?</h2>

          <p>
            Send me a message and let's talk about your project.
          </p>

          <a href="mailto:gustavo.mourao.dev@gmail.com">
            gustavo.mourao.dev@gmail.com
          </a>
        </section>
      </main>
    </div>
  );
}

export default App;