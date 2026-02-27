# TechNova: Social Engineering Risk Scorer

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)

## 📌 Project Description
In today’s digital world, people often share personal information on social media—such as birthdays, travel plans, workplace details, and family information—without a second thought. Although these posts seem harmless, attackers can harvest this publicly available data to craft highly targeted social engineering and phishing attacks. 

**TechNova** bridges the gap in personal digital security by providing a simple, intuitive tool to measure online exposure. Our system analyzes social media text to detect sensitive data and evaluates how vulnerable a user is to scams, identity theft, and cyber fraud.

## 🚀 Features
- **PII Detection:** Automatically identifies sensitive personal information within social media text.
- **NLP-Driven Analysis:** Utilizes advanced Natural Language Processing to understand context and intent.
- **Risk Scoring:** Calculates a comprehensive Social Engineering Risk Score.
- **Visual Feedback:** Categorizes vulnerability into **Low, Medium, or High** risk levels.
- **Actionable Insights:** Provides recommendations on how to reduce digital footprints.

## 🛠️ Technologies Used
- **Frontend:** HTML5, CSS3, JavaScript, TypeScript, React.js
- **Backend:** Python, FastAPI, Axios
- **AI/ML:** TensorFlow, PyTorch, Scikit-learn, NLP (Spacy/NLTK)
- **Styling:** Global CSS (Custom Tech-Nova Theme)

## 📂 Project Structure
```text
├── ai/                # NLP & Machine Learning models
├── backend/           # Risk analysis & scoring logic (FastAPI)
├── docs/              # Project documentation & architecture diagrams
├── frontend/          # User interface (React Dashboard)
│   └── src/
│       └── styles/    # Global styling and themes
└── README.md

```

## 🏗️ System Architecture

1. **User Interaction:** User inputs text/profile data via the React Dashboard.
2. **API Layer:** Axios triggers an API call to the FastAPI server.
3. **Analysis Engine:** The backend runs PII Detection, Location Detection, and Professional Exposure checks.
4. **Risk Logic:** A dedicated module calculates the score based on data sensitivity and potential attack simulations.
5. **Visualization:** Results are sent back to the frontend for real-time visualization (Charts & Risk Gauges).

## 👥 Team: Tech-Nova

* **Yelem Venkata Rachika** – Backend Development
* **Vellanki Shashank** – Frontend Development
* **Y. Vikranth Reddy** – AI/ML Engineering
* **M. Sri Krishna** – Strategy, Pitch & System Integration

---

*Developed for ACM KLH 24Hr Hackathon 2026 - Securing the digital future.*

```

```