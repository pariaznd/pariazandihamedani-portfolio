export default function Home() {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/pariazandihamedani-portfolio"
      : "";

  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <a className="logo" href="#">
          PZ<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>

        <a
          className="nav-contact"
          href="mailto:paria.zandi.h@gmail.com"
        >
          Let&apos;s talk ↗
        </a>

      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-copy">

          <div className="hero-label-row">

            <span className="hero-dot"></span>

            <p>
              MACHINE LEARNING · AI · DATA
            </p>

          </div>


          <div className="hero-name">

            <span className="first-name">
              Paria
            </span>

            <h1>
              Zandihamedani
            </h1>

          </div>


          <div className="hero-role">

            <span>
              Machine Learning
            </span>

            <span className="role-divider">
              /
            </span>

            <span>
              AI Engineering
            </span>

            <span className="role-divider">
              /
            </span>

            <span>
              Data Science
            </span>

          </div>


          <p className="hero-intro">
            I build machine learning and data-driven systems
            across time-series forecasting, medical imaging,
            computer vision, data engineering and AI applications.
          </p>


          <div className="hero-actions">

            <a
              href="#projects"
              className="button button-dark"
            >
              Selected work
              <span>↓</span>
            </a>

            <a
              href={`${basePath}/cv.pdf`}
              className="button button-light"
              download="Paria_Zandihamedani_CV.pdf"
            >
              Download CV
              <span>↗</span>
            </a>

          </div>


          <div className="hero-links">

            <span className="hero-location">
              Trondheim, Norway
            </span>

            <a
              href="https://github.com/pariaznd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/paria-zandi/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}

        <div className="hero-visual">

          <div className="visual-watermark">
            PZ
          </div>

          <div className="photo-shell">

            <div className="photo-index">
              01
            </div>

            <img
              src={`${basePath}/profile.png`}
              alt="Paria Zandihamedani"
            />

            <div className="photo-caption">

              <div>
                <span>BASED IN</span>
                <strong>TRONDHEIM</strong>
              </div>

              <div>
                <span>FOCUS</span>
                <strong>ML · AI · DATA</strong>
              </div>

            </div>

          </div>

          <div className="decor-line decor-line-one"></div>
          <div className="decor-line decor-line-two"></div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="section-label">
          <span>01</span>
          <p>ABOUT</p>
        </div>


        <div className="about-layout">

          <h2>
            Engineering background.
            <br />
            Machine learning focus.
          </h2>


          <div className="about-copy">

            <p>
              I am an MSc student in Electronic Engineering
              working at the intersection of machine learning,
              data and AI.
            </p>

            <p>
              My work ranges from industrial forecasting and
              medical imaging to large-scale trajectory data,
              computer vision, RAG systems and distributed
              applications.
            </p>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section experience-section"
        id="experience"
      >

        <div className="section-label">
          <span>02</span>
          <p>EXPERIENCE</p>
        </div>


        <div className="section-title-row">

          <h2>
            Professional
            <br />
            Experience
          </h2>

          <p>
            Selected roles across machine learning,
            data and engineering.
          </p>

        </div>


        <div className="experience-list">


          <article className="experience-item">

            <div className="experience-date">
              2026 — PRESENT
            </div>

            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-main">

              <h3>
                Machine Learning Thesis Intern
              </h3>

              <h4>
                MIA Health
                <span> · Trondheim, Norway</span>
              </h4>

              <p>
                Working on personalized modeling and prediction
                from longitudinal health data, including individual
                baselines, trajectory analysis and future-state prediction.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-date">
              2025 — 2026
            </div>

            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-main">

              <h3>
                AI Developer
              </h3>

              <h4>
                RAGdoll · IMTEL
                <span> · Trondheim, Norway</span>
              </h4>

              <p>
                Worked in an 8-member Scrum team on an
                educational assistant using retrieval-augmented
                generation, embeddings, FastAPI, Git and iterative
                client feedback.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-date">
              2021 — 2023
            </div>

            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-main">

              <h3>
                Data Engineer
              </h3>

              <h4>
                Behin Pardazeshgaran Mad Shahr
                <span> · Iran</span>
              </h4>

              <p>
                Managed and validated patient data across hospital
                systems and worked with Python, SQL, ClickHouse and
                BigQuery for healthcare data processing and
                operational reporting.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-date">
              2020 — 2021
            </div>

            <div className="experience-marker">
              <span></span>
            </div>

            <div className="experience-main">

              <h3>
                Electronics Specialist Intern
              </h3>

              <h4>
                Maha Amvaje Darmangar
                <span> · Iran</span>
              </h4>

              <p>
                Worked on PCB design, AVR firmware development,
                hardware debugging and system-level testing.
              </p>

            </div>

          </article>


        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="projects-section"
        id="projects"
      >

        <div className="projects-inner">

          <div className="section-label">
            <span>03</span>
            <p>SELECTED WORK</p>
          </div>


          <div className="projects-header">

            <h2>
              Projects with
              <br />
              measurable impact.
            </h2>

            <p>
              A selection of work across ML, deep learning,
              data engineering, computer vision and distributed systems.
            </p>

          </div>


          {/* FEATURED PROJECT */}

          <article className="featured-project">

            <div className="featured-number">
              01
            </div>


            <div className="featured-copy">

              <span className="project-category">
                MACHINE LEARNING · TIME-SERIES
              </span>

              <h3>
                Industrial Raw Material
                <br />
                Delivery Forecasting
              </h3>

              <p>
                Developed a cumulative forecasting model for
                Hydro ASA using a 90-day historical delivery
                baseline combined with LightGBM quantile regression.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>LightGBM</span>
                <span>Time-Series</span>
                <span>Quantile Regression</span>
              </div>

              <a
                href="https://github.com/pariaznd/Time-Series-Forecasting-using-Residual-Learning"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View GitHub repository ↗
              </a>

            </div>


            <div className="featured-result">

              <span>
                VALIDATION IMPROVEMENT
              </span>

              <strong>
                35.8
                <small>%</small>
              </strong>

              <p>
                lower P20
                <br />
                quantile loss
              </p>

            </div>

          </article>


          {/* OTHER PROJECTS */}

          <div className="project-grid">


            <article className="project-card">

              <div className="card-top">
                <span>02</span>
                <p>DEEP LEARNING · MEDICAL IMAGING</p>
              </div>

              <h3>
                Breast Cancer
                DCE-MRI Classification
              </h3>

              <p className="card-description">
                Developed 3D ResNet18 and 2D MIP ResNet50
                pipelines for breast cancer classification
                from multi-centre DCE-MRI data.
              </p>

              <div className="card-result">
                <strong>0.78</strong>
                <span>AUROC · 5th of 28 teams</span>
              </div>

              <div className="project-tags">
                <span>PyTorch</span>
                <span>MONAI</span>
                <span>ResNet</span>
              </div>

              <a
                href="https://github.com/pariaznd/Breast-Cancer-MRI-Classification"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project ↗
              </a>

            </article>


            <article className="project-card">

              <div className="card-top">
                <span>03</span>
                <p>DATA ENGINEERING · SQL</p>
              </div>

              <h3>
                Porto Taxi
                Trajectory Analysis
              </h3>

              <p className="card-description">
                Built a Python/MySQL pipeline for 1.67 million
                taxi trips and 83.4 million GPS points.
              </p>

              <div className="card-result">
                <strong>8m → 23s</strong>
                <span>spatial query runtime</span>
              </div>

              <div className="project-tags">
                <span>Python</span>
                <span>MySQL</span>
                <span>SQL</span>
              </div>

            </article>


            <article className="project-card">

              <div className="card-top">
                <span>04</span>
                <p>COMPUTER VISION</p>
              </div>

              <h3>
                Snow Pole Detection
                for Winter Roads
              </h3>

              <p className="card-description">
                Compared one-class snow-pole detection models
                for winter road scenes in Trøndelag using
                YOLO and RT-DETR.
              </p>

              <div className="card-result">
                <strong>RT-DETR</strong>
                <span>strongest model in experiments</span>
              </div>

              <div className="project-tags">
                <span>YOLO</span>
                <span>RT-DETR</span>
                <span>SLURM</span>
              </div>

            </article>


            <article className="project-card">

              <div className="card-top">
                <span>05</span>
                <p>DISTRIBUTED SYSTEMS · IOT</p>
              </div>

              <h3>
                SkyBite Autonomous
                Drone Delivery
              </h3>

              <p className="card-description">
                Implemented fleet-management logic for drone
                coordination, mission states and delivery updates.
              </p>

              <div className="card-result">
                <strong>Fleet Manager</strong>
                <span>core coordination component</span>
              </div>

              <div className="project-tags">
                <span>Python</span>
                <span>MQTT</span>
                <span>Raspberry Pi</span>
              </div>

              <a
                href="https://github.com/pariaznd/SkyBite-Drone-Delivery"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project ↗
              </a>

            </article>


            <article className="project-card project-card-wide">

              <div className="card-top">
                <span>06</span>
                <p>DEEP LEARNING · COMPUTER VISION</p>
              </div>

              <h3>
                Neural Jigsaw
                Image Reconstruction
              </h3>

              <p className="card-description">
                Reconstructed 96 × 96 RGB images from nine
                shuffled image patches and compared CNN,
                U-Net and Transformer architectures.
              </p>

              <div className="card-result">
                <strong>3 Models</strong>
                <span>CNN · U-Net · Transformer</span>
              </div>

              <div className="project-tags">
                <span>PyTorch</span>
                <span>CNN</span>
                <span>U-Net</span>
                <span>Transformer</span>
              </div>

              <a
                href="https://github.com/pariaznd/neural-jigsaw-image-reconstruction"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View project ↗
              </a>

            </article>


          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-label">
          <span>04</span>
          <p>TECHNICAL SKILLS</p>
        </div>


        <div className="skills-layout">

          <div className="skills-heading">

            <h2>
              Tools I use to
              <br />
              build things.
            </h2>

          </div>


          <div className="skills-list">

            <div className="skill-row">
              <span>01</span>
              <h3>Programming</h3>
              <p>Python · SQL · C · C++</p>
            </div>

            <div className="skill-row">
              <span>02</span>
              <h3>Machine Learning</h3>
              <p>
                PyTorch · TensorFlow · scikit-learn ·
                LightGBM · XGBoost
              </p>
            </div>

            <div className="skill-row">
              <span>03</span>
              <h3>Generative AI</h3>
              <p>
                RAG · Embeddings · Semantic Retrieval ·
                FastAPI · LLM Applications
              </p>
            </div>

            <div className="skill-row">
              <span>04</span>
              <h3>Data Engineering</h3>
              <p>
                ETL · Data Modeling · MySQL · BigQuery ·
                ClickHouse · MongoDB
              </p>
            </div>

            <div className="skill-row">
              <span>05</span>
              <h3>Data Analysis</h3>
              <p>
                EDA · Statistical Analysis · Power BI ·
                pandas · NumPy
              </p>
            </div>

            <div className="skill-row">
              <span>06</span>
              <h3>Tools</h3>
              <p>Docker · Git · SLURM</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-label">
          <span>05</span>
          <p>EDUCATION</p>
        </div>


        <div className="section-title-row">

          <h2>
            Academic
            <br />
            Background
          </h2>

        </div>


        <div className="education-list">


          <article className="education-item">

            <span className="education-date">
              2025 — PRESENT
            </span>

            <div>

              <h3>
                MSc in Electronic Engineering
              </h3>

              <h4>
                Norwegian University of Science and Technology
              </h4>

              <p>
                Exchange Student · Trondheim, Norway
              </p>

              <small>
                MSc Thesis — Personalized Health Modeling
                and AI Agent Support
              </small>

            </div>

          </article>


          <article className="education-item">

            <span className="education-date">
              2024 — PRESENT
            </span>

            <div>

              <h3>
                MSc in Electronic Engineering
              </h3>

              <h4>
                University of Bologna
              </h4>

              <p>
                Bologna, Italy
              </p>

              <small>
                Electronics for Intelligent Systems,
                Big Data and Internet of Things
              </small>

            </div>

          </article>


          <article className="education-item">

            <span className="education-date">
              2019 — 2024
            </span>

            <div>

              <h3>
                BSc in Electrical Engineering
              </h3>

              <h4>
                Hamedan University of Technology
              </h4>

              <p>
                Iran
              </p>

              <small>
                Bachelor&apos;s Thesis — Comparative Study
                of Classical and Deep Learning-Based
                Medical Image Fusion Methods
              </small>

            </div>

          </article>


        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <footer
        className="contact-section"
        id="contact"
      >

        <div className="contact-inner">

          <span className="contact-label">
            06 · CONTACT
          </span>

          <h2>
            Have a project,
            <br />
            opportunity or idea?
          </h2>

          <a
            href="mailto:paria.zandii.h@gmail.com"
            className="contact-email"
          >
            paria.zandii.h@gmail.com
            <span>↗</span>
          </a>


          <div className="contact-bottom">

            <p>
              Paria Zandihamedani
            </p>

            <div>

              <a
                href="https://github.com/pariaznd"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/paria-zandi/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

            <p>
              Trondheim · Norway
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}