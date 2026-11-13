import React, { useEffect, useState } from 'react';
import './portfolio.css';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/AI-NovaNX', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/antonius-eko-indriarto', icon: 'linkedin' },
];

const experience = [
  {
    period: '1995 - 2004',
    role: 'QA/QC Manager',
    company: 'PT WIKA Gedung',
    href: 'https://www.wikagedung.co.id/',
    description:
      'Directly responsible for ensuring that projects met company quality standards and satisfied all quality requirements at handover. This experience strengthened my skills in quality assurance and project management.',
    skills: ['Quality Assurance', 'Quality Control', 'Project Management', 'ISO 9001:2015 QMS', 'Total Quality Management', 'Problem Solving'],
  },

];

const projects = [
  {
    title: 'Nexread- Every visit brings your next great read',
    href: 'https://nexread.ai-novanx.online/',
    image: '/images/official/nexread.png',
    description:
      'NexRead is a full stack library management application built with Next.js, TypeScript, NestJS, and PostgreSQL. It offers book search, borrowing and return tracking, and administrative tools through a responsive, user-friendly interface.',
    skills: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Responsive Design',
      'Shadcn UI',
      'Framer Motion',
    ],
  },
  {
    title: 'RevoShop - Modern Online Shopping',
    href: 'https://revoshop.ai-novanx.online/',
    image: '/images/official/Revoshop.png',
    description:
      'RevoShop is a modern e-commerce web application built with Next.js, React, TypeScript, Tailwind CSS, and mockup data. It showcases product catalog, category filtering, product detail, promotional deals, shopping cart flow, login UI, and admin section.',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'FinTrack API Documentation - Swagger',
    href: 'https://milestone-4-ai-novanx-production.up.railway.app/docs',
    image: '/images/official/Fintech-API.png',
    description:
      'Interactive Swagger/OpenAPI documentation for FinTrack API, a personal finance backend-only solution built with NestJS, Prisma, PostgreSQL, JWT authentication, role-based access control, and protected endpoints for users, accounts, categories, and transactions.',
    skills: ['NestJS', 'Prisma', 'PostgreSQL', 'JWT', 'Swagger', 'OpenAPI'],
  },
  {
    title: 'RevoFun - Browser-Based Gaming Website',
    href: 'https://ai-novanx.online/src/indeks.html',
    image: '/images/official/revofun.png',
    description:
      'Live demo of RevoFun, a browser-based gaming website built with HTML5, CSS3, Tailwind CSS, and Vanilla JavaScript. Includes a responsive landing page, mobile navigation, and three mini games: Battleship War, Avoid the Falling Objects, and Memory Card Game with score tracking and local leaderboard storage.',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
  },
  {
    title: 'Personal Portfolio Website - Live Demo',
    href: 'https://ai-novanx.github.io/milestone-1-AI-NovaNX/',
    image: '/images/official/portfolio-web.png',
    description:
      'Personal portfolio website built with HTML5, CSS3, Tailwind CSS, and Vanilla JavaScript. It features a responsive layout, project showcase, and a clean, user-friendly interface for presenting personal work and achievements.',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript'],
  },
];

/* const writing = [
  {
    year: '2026',
    title: 'Welcome to the AI Parade',
    href: 'https://medium.com/@bchiang7/welcome-to-the-ai-parade-765f79b00c30',
    image: '/images/official/ai-parade.png',
    alt: 'Welcome to Black Parade by My Chemical Romance with “Black” changed to “AI”',
  },
  {
    year: '2024',
    title: '5 Common Accessibility Pitfalls and How to Avoid Them',
    href: 'https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0',
    image: '/images/official/a11y.png',
    alt: 'Accessibility icon',
  },
  {
    year: '2020',
    title: 'Integrating Algolia Search with WordPress Multisite',
    href: 'https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c',
    image: '/images/official/algolia-search.jpeg',
    alt: 'Telescope',
  },
  {
    year: '2019',
    title: 'Building a Headless Mobile App CMS From Scratch',
    href: 'https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9',
    image: '/images/official/headless.jpeg',
    alt: 'Headless horseman',
  },
]; */

const writing = [];

const ExternalArrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="external-arrow">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

const SocialIcon = ({ type }) => {
  const paths = {
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="social-icon" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
};

const SectionHeading = ({ children }) => <h2 className="section-heading">{children}</h2>;

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const darkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    
    setIsDark(darkMode);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    const theme = newMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
};

const PortfolioHome = () => {
  const [active, setActive] = useState('about');

  useEffect(() => {
    const updateSpotlight = event => {
      document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
    };
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: '-25% 0px -65% 0px' },
    );
    document.querySelectorAll('[data-section]').forEach(section => observer.observe(section));
    window.addEventListener('pointermove', updateSpotlight, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', updateSpotlight);
    };
  }, []);

  return (
    <div className="portfolio-page">
      <div className="spotlight" aria-hidden="true" />
      <a className="skip-link" href="#content">
        Skip to Content
      </a>
      <div className="portfolio-shell">
        <div className="portfolio-columns">
          <header className="intro-panel">
            <div>
              <h1>
                <a href="/">Antonius Eko Indriarto</a>
              </h1>
              <h2>Frontend Engineer</h2>
              <p className="intro-tagline">
                Frontend Developer building reliable web experiences with React, Next.js, and
                TypeScript.
              </p>
              <nav className="section-nav" aria-label="In-page jump links">
                <a href="#about" className={active === 'about' ? 'is-active' : ''}>
                  <span />
                  About
                </a>
                <a href="#experience" className={active === 'experience' ? 'is-active' : ''}>
                  <span />
                  Experience
                </a>
                <a href="#projects" className={active === 'projects' ? 'is-active' : ''}>
                  <span />
                  Projects
                </a>
              </nav>
            </div>
            <ul className="social-list" aria-label="Social media">
              {socialLinks.map(({ name, href, icon }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noreferrer" aria-label={name}>
                    <SocialIcon type={icon} />
                  </a>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </header>

          <main id="content" className="main-content">
            <section
              id="about"
              data-section
              className="content-section about-section"
              aria-label="About me">
              <SectionHeading>About</SectionHeading>
              <div className="prose">
                <p>
                  Hi folks! I’m a Civil Engineering graduate with 25 years of experience in
                  construction Quality Management, Quality Assurance, and Quality Control. I was
                  directly responsible for ensuring that projects met company quality standards and
                  satisfied all quality requirements at handover. This experience strengthened my
                  skills in root cause analysis, structured problem-solving, disciplined execution
                  of procedures, and cross-functional collaboration.
                </p>
                <p>
                  I transitioned into software engineering and completed RevoU’s Full Stack Software
                  Engineering course, where I developed practical frontend and backend skills. I
                  built NexRead, a responsive web application, using React, Next.js, and TypeScript,
                  translated Figma designs into functional interfaces, and integrated REST APIs. I
                  also have experience with NestJS, PostgreSQL, and Prisma, including
                  authentication, database modeling, and API documentation.
                </p>
                <p>
                  I apply my quality-focused approach to debugging, testing, and building reliable,
                  maintainable software. Combining hands-on frontend development with 25 years of
                  quality-focused experience, I bring a disciplined, detail-oriented approach to
                  building reliable user interfaces. I bring systematic problem-solving, strong
                  ownership, and a commitment to continuous learning to my work as a Frontend
                  Engineer.
                </p>
                <p>
                  I enjoy playing pop music with my band in my free time. I’m also curious about how
                  software works and regularly explore new apps, especially those related to
                  automation and my personal interests. This curiosity helps me stay open to new
                  ideas and enjoy learning through hands-on exploration. I also enjoy traveling with
                  my family, especially to places with beautiful beaches.
                </p>
              </div>
            </section>

            <section
              id="experience"
              data-section
              className="content-section"
              aria-label="Work experience">
              <SectionHeading>Experience</SectionHeading>
              <ol className="experience-list">
                {experience.map(job => (
                  <li className="experience-card" key={job.period}>
                    <div className="period">{job.period}</div>
                    <div className="card-copy">
                      <h3>
                        <a href={job.href} target="_blank" rel="noreferrer">
                          {job.role} · {job.company}
                          <ExternalArrow />
                        </a>
                      </h3>
                      <p>{job.description}</p>
                      <SkillList skills={job.skills} />
                    </div>
                  </li>
                ))}
              </ol>
              <a
                className="resume-link"
                href="/Resume-ANTONIUS-EKO-INDRIARTO.pdf"
                target="_blank"
                rel="noreferrer">
                View Full Résumé <ExternalArrow />
              </a>
            </section>

            <section
              id="projects"
              data-section
              className="content-section"
              aria-label="Selected projects">
              <SectionHeading>Projects</SectionHeading>
              <ul className="project-list">
                {projects.map(project => (
                  <li className="project-card" key={project.title}>
                    <a
                      className="project-image"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={-1}
                      aria-hidden="true">
                      <img src={project.image} alt="" loading="lazy" />
                    </a>
                    <div className="card-copy">
                      <h3>
                        <a href={project.href} target="_blank" rel="noreferrer">
                          {project.title}
                          <ExternalArrow />
                        </a>
                      </h3>
                      <p>{project.description}</p>
                      {project.extra && (
                        <a
                          className="project-extra"
                          href={project.extra.href}
                          target="_blank"
                          rel="noreferrer">
                          {project.extra.label}
                          <ExternalArrow />
                        </a>
                      )}
                      {project.skills && <SkillList skills={project.skills} />}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="writing"
              className="content-section writing-section"
              aria-label="Blog posts">
              <SectionHeading>Writing</SectionHeading>
              <ul className="project-list">
                {writing.map(article => (
                  <li className="project-card writing-card" key={article.year}>
                    <a
                      className="project-image"
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                      tabIndex={-1}
                      aria-hidden="true">
                      <img src={article.image} alt={article.alt} loading="lazy" />
                    </a>
                    <div className="card-copy">
                      <p className="writing-year">{article.year}</p>
                      <h3>
                        <a href={article.href} target="_blank" rel="noreferrer">
                          {article.title}
                          <ExternalArrow />
                        </a>
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section
              id="contact"
              className="content-section contact-section"
              aria-label="Contact form">
              <SectionHeading>Get In Touch</SectionHeading>
              <p className="prose">
                I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <ContactForm />
            </section>

            <footer className="page-footer">
              <p>
                This web coded in{' '}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                  Visual Studio Code.
                </a>{' '}
                Built with{' '}
                <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">
                  Gatsby
                </a>{' '}
                and styled with{' '}
                <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
                  Styled Components
                </a>
                . All text is set in Inter.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
};

const SkillList = ({ skills }) => (
  <ul className="skill-list">
    {skills.map(skill => <li key={skill}>{skill}</li>)}
  </ul>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in all fields');
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatusMessage('Please enter a valid email address');
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xdegnwoz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatusMessage('Thanks for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatusMessage(''), 3000);
      } else {
        setStatusMessage('Something went wrong. Please try again.');
        setTimeout(() => setStatusMessage(''), 3000);
      }
    } catch (error) {
      setStatusMessage('Error sending message. Please try again.');
      setTimeout(() => setStatusMessage(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your.email@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="contact-submit"
        disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </button>
      {statusMessage && (
        <p className={`form-message ${statusMessage.includes('Thanks') || statusMessage.includes('valid') ? 'success' : 'error'}`}>
          {statusMessage}
        </p>
      )}
    </form>
  );
};

const IndexPage = () => <PortfolioHome />;

export const Head = () => (
  <>
    <html lang="en" />
    <title>Brittany Chiang</title>
    <meta name="description" content="Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web." />
  </>
);

export default IndexPage;
