# 🚀 Project Complexity Intelligence Engine

A premium **Expert System** that analyzes software project ideas and generates complexity score, difficulty level, timeline estimate, budget signal, risks, roadmap, and improvement suggestions.

This project helps students, developers, hackathon teams, and project planners estimate project complexity before development starts.

---

## 🌐 Live Demo

🔗 **Frontend Live Link:**  
https://project-complexity-engine-8zce.vercel.app/

🔗 **Backend API Link:**  
https://project-complexity-engine.onrender.com/

---

## 📌 Project Overview

The **Project Complexity Intelligence Engine** is a web-based expert system designed to help users understand how difficult a software project may be before they start building it.

Many beginners, students, and developers underestimate:

- project scope
- timeline
- team requirements
- technical risks
- third-party dependencies
- budget complexity
- deployment challenges

This system solves that problem by analyzing project inputs and generating a structured expert report.

---

## 🎯 Problem Statement

Students and developers often struggle to accurately estimate the complexity of their projects. This leads to:

- unrealistic planning
- poor time management
- missed deadlines
- incomplete MVPs
- weak resource allocation
- unexpected technical risks

A smart decision-support system is needed to analyze project complexity and provide practical recommendations before development begins.

---

## 💡 Proposed Solution

Our solution is a **web-based rule-based expert system** that evaluates project details using a structured knowledge engine.

The user enters project information such as:

- domain
- number of modules
- number of features
- team size
- team experience
- timeline
- security level
- integrations
- AI/realtime/payment features
- uncertainty level

The system then generates:

- complexity score
- difficulty level
- expert explanation
- triggered rule trace
- risk analysis
- timeline estimate
- budget estimate
- roadmap
- scope reduction plan
- what-if simulation
- project comparison
- AI copilot-style guidance

---

## ✨ Key Features

### 🧠 Expert System Analysis

Uses a rule-based knowledge engine to analyze project inputs and generate intelligent results.

### 📊 Complexity Score

Generates a score from **0 to 100** based on scope, technical complexity, timeline pressure, team strength, dependencies, security, and uncertainty.

### 🎯 Difficulty Classification

Classifies projects into:

- Easy
- Medium
- Hard
- Very Hard

### 🔍 Why This Score?

Shows exactly which expert rules were triggered and how each rule affected the final score.

### 🧪 What-if Simulator

Allows users to simulate changes such as:

- increasing team size
- reducing integrations
- extending timeline
- reducing modules

This helps users understand how planning changes affect complexity.

### ⚖️ Project Comparison

Compares two project ideas side by side and helps decide which project is more practical.

### 🗺️ Weekly Roadmap

Generates a phase-wise and weekly roadmap for project execution.

### 💸 Budget Estimation

Provides an estimated budget tier and highlights major cost drivers.

### 📉 Scope Reduction Plan

Suggests which features should be moved to later phases to make the MVP more realistic.

### 🧾 Analysis History

Stores previous analyses locally in the browser.

### 🤖 AI Copilot Style Guidance

Provides quick expert-style answers based on the generated project analysis.

---

## 🏗️ System Architecture

```txt
User Input
   ↓
React Frontend
   ↓
API Request
   ↓
Node.js + Express Backend
   ↓
Rule-Based Expert Engine
   ↓
Score + Risks + Timeline + Roadmap + Suggestions
   ↓
Interactive Dashboard
```

---

## 🧠 Expert System Components

This project follows the classic structure of an expert system.

### 1. Knowledge Base

Contains predefined expert rules.

Example:

```txt
If project has high security and payment integration,
then increase technical complexity and security risk.
```

### 2. Inference Engine

Matches user input with rules and calculates:

- triggered rules
- complexity score
- difficulty level
- risk categories

### 3. Explanation System

Explains why the system gave a particular score.

Example:

```txt
The project is classified as Very Hard because it has many modules,
high security requirements, multiple integrations, and a short timeline.
```

### 4. Recommendation Engine

Generates improvement suggestions and planning advice.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|---|---|
| React.js | Frontend UI |
| Vite | Fast development and build tool |
| Tailwind CSS | Styling and responsive design |
| Framer Motion | Animations |
| Recharts | Graphs and charts |
| Lucide React | Icons |
| Axios | API communication |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express.js | Backend API |
| CORS | Frontend-backend connection |
| JavaScript | Expert system logic |

### Deployment

| Platform | Purpose |
|---|---|
| GitHub | Source code hosting |
| Vercel | Frontend deployment |
| Render | Backend deployment |

---

## 📂 Folder Structure

```txt
project-complexity-engine/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── input/
│   │   │   ├── dashboard/
│   │   │   └── action/
│   │   │
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── data/
│   │   ├── engine/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   │
│   └── package.json
│
└── README.md
```

---

## 📊 Complexity Scoring Model

The system calculates complexity using different factors.

| Category | Description |
|---|---|
| Scope Complexity | Modules, features, user roles |
| Technical Complexity | AI, realtime, payments, analytics |
| Timeline Pressure | Deadline vs estimated effort |
| Team Capability | Team size and experience |
| Dependency Risk | APIs and third-party services |
| Security Risk | Authentication, payments, data sensitivity |
| Uncertainty Risk | Requirement clarity and external dependency |

---

## 📈 Difficulty Levels

| Score Range | Difficulty |
|---|---|
| 0 - 25 | Easy |
| 26 - 50 | Medium |
| 51 - 75 | Hard |
| 76 - 100 | Very Hard |
