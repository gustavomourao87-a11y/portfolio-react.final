import "./App.css";

function App() {
  const projects = [
    {
      title: "NoteFlow — SaaS Notes Dashboard",
      category: "React Application",
      description:
        "A modern SaaS-style dashboard for creating, editing, deleting and searching notes with LocalStorage persistence.",
      tech: ["React", "JavaScript", "CSS", "LocalStorage"],
      github: "https://github.com/gustavomourao87-a11y/NoteFlow-SaaS-Notes-Dashboard",
      demo: "#"
    },
    {
      title: "Premium Landing Page",
      category: "Frontend Website",
      description:
        "A high-converting landing page focused on clean design, responsive layout and service presentation.",
      tech: ["React", "CSS", "Responsive"],
      github: "#",
      demo: "#"
    },
    {
      title: "Business Website",
      category: "WordPress / Elementor",
      description:
        "A professional business website concept for local companies with contact section, services and modern layout.",
      tech: ["WordPress", "Elementor", "SEO"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">GM</div>

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
              Frontend Developer focused on{" "}
              <span>React, WordPress and modern websites.</span>
            </h1>

            <p>
              I build clean, responsive and professional web interfaces for
              businesses, landing pages and SaaS-style applications.
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
            <div className="card-line"></div>
            <h3>Gustavo Mourão</h3>
            <p>Frontend Developer</p>

            <div className="skills">
              <span>React</span>
              <span>WordPress</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive UI</span>
            </div>
          </div>
        </section>

        <section className="stats">
          <div>
            <strong>3+</strong>
            <span>Portfolio Projects</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive Design</span>
          </div>

          <div>
            <strong>Clean</strong>
            <span>Modern UI</span>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-header">
            <span>Selected Work</span>
            <h2>Projects built to attract real freelance clients</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={index}>
                <div className="project-number">0{index + 1}</div>

                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.demo}>Live Demo</a>
                  <a href={project.github}>GitHub</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div>
            <span>About Me</span>

            <h2>I create professional websites and frontend interfaces.</h2>

            <p>
              I'm a frontend developer focused on building clean, responsive and
              modern web experiences using React, WordPress, HTML, CSS and
              JavaScript.
            </p>

            <p>
              My goal is to help businesses and clients improve their online
              presence with websites that look trustworthy, work well on mobile
              and are easy to use.
            </p>
          </div>

          <div className="about-box">
            <h3>Main Services</h3>

            <ul>
              <li>React dashboards</li>
              <li>Landing pages</li>
              <li>WordPress websites</li>
              <li>Responsive layouts</li>
              <li>Business websites</li>
              <li>Frontend UI development</li>
            </ul>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Let’s build something professional.</h2>

          <p>
            Send me a message and let's talk about your website or frontend
            project.
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