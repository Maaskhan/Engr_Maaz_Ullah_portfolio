import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contactInfo, portfolioData, profile } from "@/content/portfolioData";

const nav = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
const aiInternship = portfolioData.experiences.find(
  (experience) => experience.id === "exp-dps",
);

export default function Home() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Maaz Ullah home">MU<span>.</span></a>
        <nav aria-label="Main navigation">
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="header-link" href={`mailto:${contactInfo.email}`}>Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for remote &amp; relocation opportunities</p>
          <h1>Building useful<br />things with <em>code.</em></h1>
          <p className="hero-intro">I&apos;m <strong>Maaz Ullah</strong>, a software engineer focused on Python, AI, and computer vision. I turn interesting problems into practical software.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">See my work <ArrowDown size={16} /></a>
            <a className="text-link" href={profile.resumePath} target="_blank" rel="noreferrer">Download résumé <ArrowUpRight size={15} /></a>
          </div>
          <div className="hero-meta"><span><MapPin size={15} /> Pakistan</span><span>BS Software Engineering · MUST</span></div>
        </div>
        <div className="hero-photo-wrap">
          <div className="photo-note">SOFTWARE ENGINEER<br />AI · PYTHON · VISION</div>
          <Image className="hero-photo" src={profile.heroImage} alt="Maaz Ullah" width={520} height={520} priority />
          <div className="photo-caption">Curious by nature. Engineer by practice.</div>
        </div>
        <div className="hero-index">01 / INTRODUCTION</div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="about-copy">
          <div>
            <h2>Engineering with<br /><em>purpose.</em></h2>
            <Image
              src={profile.aboutImage}
              alt="Maaz Ullah at his workstation"
              width={600}
              height={480}
              sizes="(max-width: 560px) 100vw, 50vw"
              className="mt-7 w-full aspect-[5/4] object-cover"
            />
          </div>
          <div>
            {profile.aboutNarrative[0] && <p>{profile.aboutNarrative[0]}</p>}
            {aiInternship && (
              <p>
                I completed an AI internship as {aiInternship.role} at {aiInternship.company.replace(/\.$/, "")}.
              </p>
            )}
            {profile.aboutNarrative[1] && <p>{profile.aboutNarrative[1]}</p>}
            <a className="text-link" href="#experience">View experience <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap">
        <div className="section-label"><span>02</span> WHAT I WORK WITH</div>
        <div className="section-heading"><h2>A practical<br /><em>toolkit.</em></h2><p>Tools and ideas I use to build thoughtful software, from model experiments to the interface people actually use.</p></div>
        <div className="skill-grid">{portfolioData.skills.map((group, i) => <article className="skill-card" key={group.id}><span className="card-number">0{i + 1}</span><h3>{group.category}</h3><div className="tag-list">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </div></section>

      <section className="section-wrap experience-section" id="experience">
        <div className="section-label"><span>03</span> WHERE I&apos;VE BEEN</div>
        <div className="section-heading"><h2>Learning by<br /><em>doing.</em></h2><p>Hands-on experience building software with teams and applying engineering fundamentals to real projects.</p></div>
        <div className="timeline">{portfolioData.experiences.map((exp) => <article className="timeline-item" key={exp.id}><span className="period">{exp.period}</span><div><h3>{exp.role}</h3><p className="company">{exp.company}</p><ul>{exp.responsibilities.map((line) => <li key={line}>{line}</li>)}</ul></div></article>)}</div>
      </section>

      <section className="projects-section" id="projects"><div className="section-wrap">
        <div className="section-label"><span>04</span> SELECTED WORK</div>
        <div className="section-heading"><h2>Made to solve<br /><em>real problems.</em></h2><p>A few projects where software engineering meets machine learning and computer vision.</p></div>
        <div className="project-grid">{portfolioData.projects.map((project, i) => <article className="project-card" key={project.id}><div className="project-top"><span>PROJECT 0{i + 1}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.techStack.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={15} /></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> Source code <ArrowUpRight size={15} /></a>}</div></article>)}</div>
      </div></section>

      <section className="section-wrap education-section" id="education">
        <div className="section-label"><span>05</span> THE FOUNDATION</div>
        <div className="section-heading"><h2>Always a<br /><em>student.</em></h2><p>My education gave me a strong base in software engineering and the curiosity to keep exploring what technology can do.</p></div>
        <div className="education-list">{portfolioData.education.map((edu) => <article key={edu.id}><span>{edu.year}{edu.accreditation ? ` · ${edu.accreditation}` : ""}</span><div><h3>{edu.degree}</h3><p>{edu.institution}</p></div></article>)}</div>
      </section>

      <footer className="contact-section" id="contact"><div className="section-wrap contact-inner">
        <div className="section-label"><span>06</span> GET IN TOUCH</div><h2>Have a good idea?<br /><em>Let&apos;s build it.</em></h2><p>I&apos;m open to software engineering opportunities, collaborations, and interesting conversations.</p>
        <a className="button button-light" href={`mailto:${contactInfo.email}`}>Write me an email <ArrowUpRight size={16} /></a>
        <div className="contact-bottom"><a href={`mailto:${contactInfo.email}`}><Mail size={16} /> {contactInfo.email}</a><div><a href={contactInfo.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href={contactInfo.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a></div><span>© {new Date().getFullYear()} Maaz Ullah</span></div>
      </div></footer>
    </main>
  );
}
