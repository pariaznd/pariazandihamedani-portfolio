export default function Home() {
  const basePath =
    process.env.NODE_ENV === "production"
      ? "/paria-portfolio"
      : "";

  return (
    <main>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a className="logo" href="#">
          PZ.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            MACHINE LEARNING · AI · DATA
          </p>

          <h1>
            Paria
            <br />
            Zandihamedani
          </h1>

          <h2>
            Machine Learning & AI Engineer
            <span> / Data Science</span>
          </h2>

          <p className="location">
            Trondheim, Norway
          </p>

          <p className="intro">
            I work across machine learning, time-series forecasting,
            medical imaging, data engineering, and AI applications,
            with a focus on turning real-world data into useful models
            and systems.
          </p>

          <div className="buttons">

            <a
              href="#projects"
              className="btn primary"
            >
              Explore my work
            </a>

            <a
              href={`${basePath}/cv.pdf`}
              className="btn secondary"
              download="Paria_Zandihamedani_CV.pdf"
            >
              Download CV
            </a>

          </div>


          <div className="socials">

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

            <a href="mailto:paria.zandi.h@gmail.com">
              Email ↗
            </a>

          </div>

        </div>


        <div className="hero-visual">

          <div className="photo-card">

            <img
              src={`${basePath}/profile.png`}
              alt="Paria Zandihamedani"
            />

            <div className="photo-footer">
              <span>ML / AI / DATA</span>
              <span>2026</span>
            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section
        className="section about-section"
        id="about"
      >

        <div className="section-heading">

          <span>01</span>

          <div>
            <p>ABOUT</p>
            <h2>A little about me</h2>
          </div>

        </div>


        <div className="about-grid">

          <p className="about-lead">
            I am an MSc student in Electronic Engineering working
            at the intersection of machine learning, data and AI.
          </p>

          <p className="about-text">
            My projects include industrial time-series forecasting,
            breast cancer classification from DCE-MRI, large-scale
            trajectory analysis, computer vision, RAG systems,
            and distributed applications.
          </p>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section
        className="section"
        id="experience"
      >

        <div className="section-heading">

          <span>02</span>

          <div>
            <p>EXPERIENCE</p>
            <h2>Professional Experience</h2>
          </div>

        </div>


        <div className="experience-list">

          <article className="experience-item">

            <div className="experience-meta">
              <span>2026 — Present</span>
            </div>

            <div className="experience-content">

              <h3>
                Machine Learning Thesis Intern
              </h3>

              <h4>
                MIA Health · Trondheim, Norway
              </h4>

              <p>
                Working on personalized modeling and prediction
                from longitudinal health data, including individual
                baselines, trajectory analysis, and future-state prediction.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-meta">
              <span>2025 — 2026</span>
            </div>

            <div className="experience-content">

              <h3>
                AI Developer
              </h3>

              <h4>
                RAGdoll Project · IMTEL · Trondheim, Norway
              </h4>

              <p>
                Worked in an 8-member Scrum team on an AI-powered
                educational assistant using retrieval-augmented generation,
                embeddings, FastAPI, Git, and iterative client feedback.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-meta">
              <span>2021 — 2023</span>
            </div>

            <div className="experience-content">

              <h3>
                Data Engineer
              </h3>

              <h4>
                Behin Pardazeshgaran Mad Shahr · Iran
              </h4>

              <p>
                Managed and validated patient data across hospital systems
                and worked with Python, SQL, ClickHouse, and BigQuery
                for healthcare data processing and operational reporting.
              </p>

            </div>

          </article>


          <article className="experience-item">

            <div className="experience-meta">
              <span>2020 — 2021</span>
            </div>

            <div className="experience-content">

              <h3>
                Electronics Specialist Intern
              </h3>

              <h4>
                Maha Amvaje Darmangar · Iran
              </h4>

              <p>
                Worked on PCB design, AVR firmware development,
                hardware debugging, and system-level testing.
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}

      <section
        className="section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <span>03</span>

          <div>
            <p>SELECTED WORK</p>
            <h2>Featured Projects</h2>
          </div>

        </div>


        <div className="projects">

          {/* PROJECT 1 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                01
              </span>

              <span className="project-type">
                Machine Learning · Time-Series
              </span>

            </div>


            <h3>
              Industrial Raw Material
              Delivery Forecasting
            </h3>


            <p>
              Developed a cumulative forecasting model for Hydro ASA
              using a 90-day historical delivery baseline combined
              with LightGBM quantile regression.
            </p>


            <div className="metric">

              <strong>
                35.8%
              </strong>

              <span>
                lower P20 validation loss
              </span>

            </div>


            <div className="tags">
              <span>Python</span>
              <span>LightGBM</span>
              <span>Time-Series</span>
              <span>Quantile Regression</span>
            </div>


            <a
              className="project-link"
              href="https://github.com/pariaznd/Time-Series-Forecasting-using-Residual-Learning"
              target="_blank"
              rel="noreferrer"
            >
              View project ↗
            </a>

          </article>


          {/* PROJECT 2 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                02
              </span>

              <span className="project-type">
                Deep Learning · Medical Imaging
              </span>

            </div>


            <h3>
              Breast Cancer
              DCE-MRI Classification
            </h3>


            <p>
              Developed 3D ResNet18 and 2D MIP ResNet50 pipelines
              for breast cancer classification from multi-centre
              DCE-MRI data.
            </p>


            <div className="metric">

              <strong>
                0.78
              </strong>

              <span>
                AUROC · 5th of 28 teams
              </span>

            </div>


            <div className="tags">
              <span>PyTorch</span>
              <span>MONAI</span>
              <span>ResNet</span>
              <span>Medical Imaging</span>
            </div>


            <a
              className="project-link"
              href="https://github.com/pariaznd/Breast-Cancer-MRI-Classification"
              target="_blank"
              rel="noreferrer"
            >
              View project ↗
            </a>

          </article>


          {/* PROJECT 3 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                03
              </span>

              <span className="project-type">
                Data Engineering · SQL
              </span>

            </div>


            <h3>
              Porto Taxi
              Trajectory Analysis
            </h3>


            <p>
              Built a Python/MySQL pipeline to clean, restructure,
              and load 1.67 million taxi trips and 83.4 million
              GPS points into relational tables.
            </p>


            <div className="metric">

              <strong>
                8m → 23s
              </strong>

              <span>
                spatial query runtime
              </span>

            </div>


            <div className="tags">
              <span>Python</span>
              <span>MySQL</span>
              <span>SQL</span>
              <span>Geospatial</span>
            </div>

          </article>


          {/* PROJECT 4 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                04
              </span>

              <span className="project-type">
                Computer Vision · Object Detection
              </span>

            </div>


            <h3>
              Snow Pole Detection
              for Winter Road Perception
            </h3>


            <p>
              Developed and compared one-class snow-pole detection
              models for winter road scenes in Trøndelag using
              YOLO and RT-DETR.
            </p>


            <div className="metric">

              <strong>
                RT-DETR
              </strong>

              <span>
                strongest model in experiments
              </span>

            </div>


            <div className="tags">
              <span>Python</span>
              <span>YOLO</span>
              <span>RT-DETR</span>
              <span>SLURM</span>
            </div>

          </article>


          {/* PROJECT 5 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                05
              </span>

              <span className="project-type">
                Python · IoT · Distributed Systems
              </span>

            </div>


            <h3>
              SkyBite Autonomous
              Drone Delivery System
            </h3>


            <p>
              Contributed to the communication architecture and
              implemented fleet-management logic for drone coordination,
              mission states, and delivery updates.
            </p>


            <div className="metric">

              <strong>
                Fleet Manager
              </strong>

              <span>
                core coordination component
              </span>

            </div>


            <div className="tags">
              <span>Python</span>
              <span>MQTT</span>
              <span>Mosquitto</span>
              <span>Raspberry Pi</span>
            </div>


            <a
              className="project-link"
              href="https://github.com/pariaznd/SkyBite-Drone-Delivery"
              target="_blank"
              rel="noreferrer"
            >
              View project ↗
            </a>

          </article>


          {/* PROJECT 6 */}

          <article className="project-card">

            <div className="project-top">

              <span className="project-number">
                06
              </span>

              <span className="project-type">
                Deep Learning · Computer Vision
              </span>

            </div>


            <h3>
              Neural Jigsaw
              Image Reconstruction
            </h3>


            <p>
              Built models to reconstruct 96 × 96 RGB images
              from nine shuffled image patches and compared
              CNN, U-Net, and Transformer architectures.
            </p>


            <div className="metric">

              <strong>
                3 Models
              </strong>

              <span>
                CNN · U-Net · Transformer
              </span>

            </div>


            <div className="tags">
              <span>PyTorch</span>
              <span>CNN</span>
              <span>U-Net</span>
              <span>Transformer</span>
            </div>


            <a
              className="project-link"
              href="https://github.com/pariaznd/neural-jigsaw-image-reconstruction"
              target="_blank"
              rel="noreferrer"
            >
              View project ↗
            </a>

          </article>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section
        className="section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <span>04</span>

          <div>
            <p>TECHNICAL SKILLS</p>
            <h2>What I work with</h2>
          </div>

        </div>


        <div className="skills-grid">

          <div className="skill-group">
            <h3>Programming</h3>
            <p>
              Python, SQL, C, C++
            </p>
          </div>


          <div className="skill-group">
            <h3>Machine Learning</h3>
            <p>
              PyTorch, TensorFlow, scikit-learn,
              LightGBM, XGBoost, Time-Series Forecasting,
              Computer Vision, Object Detection
            </p>
          </div>


          <div className="skill-group">
            <h3>Generative AI</h3>
            <p>
              RAG, Embeddings, Semantic Retrieval,
              FastAPI, LLM Applications
            </p>
          </div>


          <div className="skill-group">
            <h3>Data Engineering</h3>
            <p>
              ETL Pipelines, Data Modeling,
              MySQL, BigQuery, ClickHouse, MongoDB
            </p>
          </div>


          <div className="skill-group">
            <h3>Data Analysis</h3>
            <p>
              EDA, Statistical Analysis, Power BI,
              pandas, NumPy, SQL Window Functions,
              Geospatial Queries
            </p>
          </div>


          <div className="skill-group">
            <h3>Tools</h3>
            <p>
              Docker, Git, SLURM
            </p>
          </div>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}

      <section
        className="section education-section"
        id="education"
      >

        <div className="section-heading">

          <span>05</span>

          <div>
            <p>EDUCATION</p>
            <h2>Academic Background</h2>
          </div>

        </div>


        <div className="education-list">

          <article className="education-item">

            <div className="education-year">
              2025 — Present
            </div>

            <div className="education-content">

              <h3>
                MSc in Electronic Engineering
                <span> · Exchange Student</span>
              </h3>

              <h4>
                Norwegian University of Science and Technology (NTNU)
              </h4>

              <p>
                Trondheim, Norway
              </p>

              <p className="education-note">
                MSc Thesis: Personalized Health Modeling and AI Agent Support
              </p>

            </div>

          </article>


          <article className="education-item">

            <div className="education-year">
              2024 — Present
            </div>

            <div className="education-content">

              <h3>
                MSc in Electronic Engineering
              </h3>

              <h4>
                University of Bologna
              </h4>

              <p>
                Bologna, Italy
              </p>

              <p className="education-note">
                Track: Electronics for Intelligent Systems,
                Big Data and Internet of Things
              </p>

            </div>

          </article>


          <article className="education-item">

            <div className="education-year">
              2019 — 2024
            </div>

            <div className="education-content">

              <h3>
                BSc in Electrical Engineering
              </h3>

              <h4>
                Hamedan University of Technology
              </h4>

              <p>
                Iran
              </p>

              <p className="education-note">
                Bachelor's Thesis: Comparative Study of Classical
                and Deep Learning-Based Medical Image Fusion Methods
              </p>

            </div>

          </article>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section
        className="contact"
        id="contact"
      >

        <p>
          LET&apos;S CONNECT
        </p>

        <h2>
          Interested in working together?
        </h2>

        <a href="mailto:paria.zandi.h@gmail.com">
          paria.zandi.h@gmail.com
        </a>

      </section>

    </main>
  );
}