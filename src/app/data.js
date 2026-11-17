// All the words on the site live in this file.
// To change the text, edit it here. You do not need to touch page.js.
//
// A word wrapped in **double stars** gets a yellow highlight (use it for key results).

// The site is hosted in a sub-folder on GitHub Pages, so files need this prefix there.
export const assetBase =
  process.env.NODE_ENV === "production" ? "/pariazandihamedani-portfolio" : "";

export const profile = {
  name: "Paria Zandihamedani",
  email: "paria.zandii.h@gmail.com",
  github: "https://github.com/pariaznd",
  linkedin: "https://www.linkedin.com/in/paria-zandi/",
  headline: "Data engineer turned ML engineer.",
  intro:
    "I'm Paria. I build forecasting and medical-imaging models on messy, real-world data, and I'm finishing my MSc thesis in Trondheim.",
  status: "Open to Data Engineer and ML Engineer roles in Norway.",
};

// ---------------------------------------------------------------------------
// Projects. The first three are shown large, the rest are shown smaller.
// Every number here was checked against the code or README of that project.
// ---------------------------------------------------------------------------

export const workIntro =
  "Six projects. For each one: the task, what I built, and how it went.";

export const featured = [
  {
    id: "jigsaw",
    title: "Neural Jigsaw: rebuilding images from shuffled patches",
    context: "Deep learning course at NTNU",
    image: {
      src: "/projects/jigsaw-results.webp",
      width: 1200,
      height: 918,
      alt: "Three example photos. Each row shows the scrambled patches, the model's soft canvas, its prediction and the original image.",
    },
    caption:
      "Test examples. From left to right: the scrambled patches, the model's soft canvas, its prediction, and the original image.",
    task: "Nine shuffled 28×28 patches go in, and a full 96×96 colour image has to come out. The model must work out where each patch belongs and fill in the missing borders.",
    built:
      "One model, trained from scratch with under 6 million parameters. Residual CNN encoders read each patch. A Transformer-style attention block lets the patches reason about each other. A differentiable soft reassembly places them, and a U-Net-style decoder draws the final image.",
    result:
      "**88.3%** of patches placed in the right position, with a test error (MAE) of 0.029 on STL-10 images.",
    tags: ["TensorFlow", "Computer vision", "Transformer attention", "U-Net decoder"],
    link: "https://github.com/pariaznd/neural-jigsaw-image-reconstruction",
  },
  {
    id: "hydro",
    figure: "hydro",
    title: "Forecasting raw-material deliveries for Hydro",
    context: "NTNU course project, scored in a Kaggle competition",
    caption:
      "How the forecast is built, and why the loss is asymmetric. This is an illustration, not real data.",
    task: "Predict how much raw material will be delivered to Hydro's plants over future time periods, using years of delivery records and purchase-order data. The loss is asymmetric: forecasting too high costs four times more than forecasting too low.",
    built:
      "A residual-learning model. A 90-day average gives the baseline, and a LightGBM quantile model learns the correction on top of it. It uses 14 features: recent delivery volumes, trend, variability, open purchase orders, season and forecast length.",
    result:
      "Kaggle score of **6227**. The score is the P20 loss, so lower is better.",
    // The old site also said "35.8% lower loss". That number is not reproduced by the code
    // in the repo, so it is left out. Add it back only after you re-run the baseline check.
    tags: ["Python", "LightGBM", "Quantile regression", "Time series"],
    link: "https://github.com/pariaznd/Time-Series-Forecasting-using-Residual-Learning",
  },
  {
    id: "odelia",
    figure: "odelia",
    title: "Breast cancer classification from DCE-MRI",
    context: "ODELIA 2025 challenge, 28 teams",
    caption:
      "How the two models are combined. This is a diagram only. No patient data is shown.",
    task: "Classify breast cancer from multi-centre DCE-MRI scans. The scans come from several centres, so the model has to cope with differences between them.",
    built:
      "Two models, combined. A 3D ResNet18 trained from scratch reads the MRI volume. A 2D ResNet50 reads 4-channel maximum-intensity projections (MIPs). Their logits are averaged with weights 0.6 and 0.4, with five rounds of test-time augmentation.",
    // ADD THE RESULT HERE only after you check the official leaderboard.
    // Your repo README says 9th of 28 (score about 0.57).
    // Your CV and the old site said 5th of 28 (AUROC about 0.78).
    // Example: result: "Ranked **5th of 28** teams.",
    tags: ["PyTorch", "MONAI", "3D CNN", "Ensembling"],
    link: "https://github.com/pariaznd/Breast-Cancer-MRI-Classification",
  },
];

export const moreTitle = "More projects";

export const more = [
  {
    id: "porto",
    figure: "porto",
    title: "Porto taxi trajectories",
    context: "Data engineering",
    summary:
      "A Python and MySQL pipeline for 1.67 million taxi trips and 83.4 million GPS points. A spatial query that took 8 minutes now runs in **23 seconds**.",
    tags: ["Python", "MySQL", "SQL", "Spatial queries"],
  },
  {
    id: "snow",
    figure: "snow",
    title: "Snow pole detection for winter roads",
    context: "Computer vision",
    summary:
      "I compared one-class detectors for snow poles in winter road scenes from Trøndelag, using YOLO and RT-DETR models trained on a SLURM cluster. **RT-DETR** was the strongest in the experiments.",
    tags: ["YOLO", "RT-DETR", "SLURM", "Object detection"],
  },
  {
    id: "skybite",
    figure: "skybite",
    title: "SkyBite drone delivery",
    context: "Team project at NTNU",
    summary:
      "I built the Fleet Manager for a drone delivery system. It is a state machine that plans the route for each order, assigns a drone, and reroutes when a no-fly zone appears. Drones, orders and the dashboard talk to it over MQTT.",
    tags: ["Python", "MQTT", "State machines"],
    link: "https://github.com/pariaznd/SkyBite-Drone-Delivery",
  },
];

// ---------------------------------------------------------------------------
// Experience, skills, about, education
// ---------------------------------------------------------------------------

export const experience = [
  {
    dates: "2026 – present",
    role: "Machine Learning Thesis Intern",
    org: "MIA Health",
    place: "Trondheim, Norway",
    text: "Working on personalized modeling and prediction from longitudinal health data, including individual baselines, trajectory analysis and future-state prediction.",
    tags: ["Longitudinal data", "Trajectory analysis", "Prediction"],
  },
  {
    dates: "2025 – 2026",
    role: "AI Developer",
    org: "RAGdoll, IMTEL",
    place: "Trondheim, Norway",
    text: "Worked in an 8-member Scrum team on an educational assistant using retrieval-augmented generation, embeddings, FastAPI, Git and iterative client feedback.",
    tags: ["RAG", "Embeddings", "FastAPI", "Scrum"],
  },
  {
    dates: "2021 – 2023",
    role: "Data Engineer",
    org: "Behin Pardazeshgaran Mad Shahr",
    place: "Iran",
    text: "Managed and validated patient data across hospital systems and worked with Python, SQL, ClickHouse and BigQuery for healthcare data processing and operational reporting.",
    tags: ["Python", "SQL", "ClickHouse", "BigQuery"],
  },
  {
    dates: "2020 – 2021",
    role: "Electronics Specialist Intern",
    org: "Maha Amvaje Darmangar",
    place: "Iran",
    text: "Worked on PCB design, AVR firmware development, hardware debugging and system-level testing.",
    tags: ["PCB design", "AVR firmware"],
  },
];

export const skills = [
  { group: "Data engineering", items: ["ETL", "Data modeling", "MySQL", "BigQuery", "ClickHouse", "MongoDB"] },
  { group: "Machine learning", items: ["PyTorch", "TensorFlow", "scikit-learn", "LightGBM", "XGBoost"] },
  { group: "Generative AI", items: ["RAG", "Embeddings", "Semantic retrieval", "FastAPI", "LLM applications"] },
  { group: "Programming", items: ["Python", "SQL", "C", "C++"] },
  { group: "Data analysis", items: ["EDA", "Statistical analysis", "Power BI", "pandas", "NumPy"] },
  { group: "Tools", items: ["Docker", "Git", "SLURM"] },
];

export const about = [
  "I started in data engineering, working with Python, SQL and healthcare data. During my MSc I moved toward machine learning, and I now work on forecasting, medical imaging and retrieval-augmented generation.",
  "I'm an MSc student in Electronic Engineering, finishing my thesis at NTNU in Trondheim on machine learning for wearable health data. I like projects where the data is messy and the model has to work in practice.",
];

export const education = [
  {
    degree: "MSc in Electronic Engineering",
    school: "Norwegian University of Science and Technology (NTNU)",
    place: "Trondheim, Norway",
    dates: "2025 – present",
    note: "Exchange student. Thesis: Personalized Health Modeling and AI Agent Support.",
  },
  {
    degree: "MSc in Electronic Engineering",
    school: "University of Bologna",
    place: "Bologna, Italy",
    dates: "2024 – present",
    note: "Electronics for Intelligent Systems, Big Data and Internet of Things.",
  },
  {
    degree: "BSc in Electrical Engineering",
    school: "Hamedan University of Technology",
    place: "Iran",
    dates: "2019 – 2024",
    note: "Bachelor's thesis: Comparative Study of Classical and Deep Learning-Based Medical Image Fusion Methods.",
  },
];

export const contact = {
  title: "I'm looking for a Data Engineer or ML Engineer role in Norway.",
  lead: "If your team is hiring, I'd like to hear from you.",
};
