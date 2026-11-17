import {
  assetBase,
  profile,
  workIntro,
  featured,
  moreTitle,
  more,
  experience,
  skills,
  about,
  education,
  contact,
} from "./data";
import { JigsawPortrait, CopyEmail, NavMenu, LiveFrame } from "./client";
import {
  HydroFigure,
  OdeliaFigure,
  PortoFigure,
  SnowFigure,
  SkybiteFigure,
} from "./figures";

const diagrams = {
  hydro: HydroFigure,
  odelia: OdeliaFigure,
  porto: PortoFigure,
  snow: SnowFigure,
  skybite: SkybiteFigure,
};

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
];

const cvHref = `${assetBase}/cv.pdf`;
const cvName = "Paria_Zandihamedani_CV.pdf";

// Text wrapped in **double stars** becomes a yellow highlight.
function Marked({ text }) {
  return text
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part, i) =>
      part.startsWith("**") ? <mark key={i}>{part.slice(2, -2)}</mark> : part
    );
}

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Tools and topics">
      {items.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

function External({ href, children }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function Figure({ project }) {
  const Diagram = diagrams[project.figure];
  return (
    <figure className="figure">
      <LiveFrame className={project.image ? "fig-frame fig-frame-photo" : "fig-frame"}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${assetBase}${project.image.src}`}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <Diagram />
        )}
      </LiveFrame>
      {project.caption && (
        <figcaption className="fig-caption">{project.caption}</figcaption>
      )}
    </figure>
  );
}

function Plate({ project, compact = false }) {
  return (
    <article
      className={compact ? "plate plate-compact" : "plate"}
      aria-labelledby={`${project.id}-title`}
    >
      <Figure project={project} />
      <div className="plate-body">
        <h3 id={`${project.id}-title`}>{project.title}</h3>
        {project.context && <p className="plate-context">{project.context}</p>}

        {project.summary ? (
          <p className="plate-summary">
            <Marked text={project.summary} />
          </p>
        ) : (
          <dl className="case">
            <div>
              <dt>The task</dt>
              <dd>{project.task}</dd>
            </div>
            <div>
              <dt>What I built</dt>
              <dd>{project.built}</dd>
            </div>
            {project.result && (
              <div>
                <dt>Result</dt>
                <dd>
                  <Marked text={project.result} />
                </dd>
              </div>
            )}
          </dl>
        )}

        <Tags items={project.tags} />
        {project.link && (
          <External href={project.link}>View the code on GitHub</External>
        )}
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="nav">
          <a className="brand" href="#top">
            {profile.name}
          </a>
          <nav className="nav-links" aria-label="Main">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary btn-sm nav-cv" href={cvHref} download={cvName}>
            Download CV
          </a>
          <NavMenu links={navLinks} cv={cvHref} />
        </div>
      </header>

      <main id="main">
        {/* ------------------------------------------------ Hero */}
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <h1 id="hero-title">{profile.headline}</h1>
              <p className="hero-intro">{profile.intro}</p>

              <div className="hero-actions">
                <a className="btn btn-dark" href="#work">
                  See selected work
                </a>
                <a className="btn btn-primary" href={cvHref} download={cvName}>
                  Download CV
                </a>
              </div>

              <p className="status">
                <span className="status-dot" aria-hidden="true" />
                {profile.status}
              </p>

              <ul className="hero-links">
                <li>
                  <a className="link" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <External href={profile.github}>GitHub</External>
                </li>
                <li>
                  <External href={profile.linkedin}>LinkedIn</External>
                </li>
              </ul>
            </div>

            <JigsawPortrait
              photo={`${assetBase}/profile.webp`}
              alt={`Portrait of ${profile.name}`}
            />
          </div>
        </section>

        {/* ------------------------------------------------ Work */}
        <section className="section" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="work-title">Selected work</h2>
              <p>{workIntro}</p>
            </div>

            {featured.map((project) => (
              <Plate key={project.id} project={project} />
            ))}

            <h3 className="more-title">{moreTitle}</h3>
            {more.map((project) => (
              <Plate key={project.id} project={project} compact />
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ Experience */}
        <section
          className="section band"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="wrap">
            <h2 id="experience-title">Experience</h2>
            <ol className="road">
              {experience.map((job) => (
                <li key={`${job.role}-${job.dates}`}>
                  <p className="road-dates">{job.dates}</p>
                  <div className="road-body">
                    <h3>{job.role}</h3>
                    <p className="road-org">
                      {job.org}, {job.place}
                    </p>
                    <p className="road-text">{job.text}</p>
                    <Tags items={job.tags} />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ------------------------------------------------ Skills */}
        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 id="skills-title">Skills</h2>
            <div className="skills-grid">
              {skills.map((group) => (
                <div key={group.group}>
                  <h3>{group.group}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ About and education */}
        <section
          className="section about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="wrap about-grid">
            <div>
              <h2 id="about-title">About</h2>
              <div className="about-copy">
                {about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 id="education-title">Education</h2>
              <ol className="edu" aria-labelledby="education-title">
                {education.map((item) => (
                  <li key={`${item.school}-${item.degree}`}>
                    <p className="edu-dates">{item.dates}</p>
                    <h3>{item.degree}</h3>
                    <p className="edu-school">
                      {item.school}, {item.place}
                    </p>
                    <p className="edu-note">{item.note}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ Contact */}
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="wrap">
            <h2 id="contact-title">{contact.title}</h2>
            <p className="contact-lead">{contact.lead}</p>

            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <a className="btn btn-ghost" href={cvHref} download={cvName}>
                Download CV
              </a>
            </div>

            <p className="contact-email">
              <a className="link" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <CopyEmail email={profile.email} />
            </p>

            <ul className="contact-links">
              <li>
                <External href={profile.linkedin}>LinkedIn</External>
              </li>
              <li>
                <External href={profile.github}>GitHub</External>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer-inner">
          <p>{profile.name}</p>
          <p>Trondheim, Norway</p>
        </div>
      </footer>
    </>
  );
}
