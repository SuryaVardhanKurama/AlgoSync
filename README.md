# AlgoSync

A full-stack collaborative coding platform for competitive programmers to explore, solve, and discuss algorithmic problems in real-time.

## Features

- **Real-Time Code Collaboration** — Join rooms, code together with live cursor sync via Socket.IO
- **AI Code Assistant** — Get instant explanations, debugging help, and code fixes powered by Google Gemini
- **Instant Compilation** — Run code in the browser across multiple languages (Python, Java, C++, C#, Go, Rust, and more)
- **Whiteboard** — Collaborative system design canvas using tldraw
- **Problem Library** — Browse and filter Codeforces problems by tag and difficulty
- **Bookmarks** — Save problems for later with persistent storage
- **User Profiles** — Showcase Codeforces and LeetCode stats

## Tech Stack

**Backend:** Node.js, Express, Socket.IO, MongoDB, Mongoose, JWT Auth

**Frontend:** React, CodeMirror, Socket.IO Client, tldraw, React Router, Axios

**External APIs:** Google Gemini (AI), Judge0 via RapidAPI (Compilation), Codeforces API, LeetCode API

## Getting Started

### Prerequisites

- Node.js v14+
- MongoDB (local or Atlas)
- API keys: Google Gemini, RapidAPI (Judge0)

### Installation

```bash
git clone https://github.com/SuryaVardhanKurama/AlgoSync.git
cd AlgoSync
```

### Backend

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_API_KEY=your_google_gemini_api_key
RAPID_API_KEY=your_rapidapi_key
```

### Frontend

```bash
cd ../frontend
npm install
```

### Run

```bash
# Terminal 1 — Backend
cd backend
npm start

# Terminal 2 — Frontend
cd frontend
npm start
```

The app will be available at `http://localhost:3000` with the backend on port `5000`.

## Project Structure

```
AlgoSync/
├── backend/
│   ├── controllers/      # Route handlers (Auth, User, Bookmark, Problem, Chat)
│   ├── middleware/        # JWT auth, file upload (multer)
│   ├── models/           # Mongoose schemas (User, Bookmark, Problem, ChatMessage)
│   ├── routers/          # Express route definitions
│   ├── socket/           # Socket.IO event actions
│   ├── utils/            # Codeforces API, Gemini AI, code compilation
│   └── index.js          # Server entry point
└── frontend/
    ├── public/           # Static assets
    └── src/
        ├── components/   # Navbar, Footer, ProblemCard
        ├── context/      # Auth context (JWT)
        ├── pages/        # Home, Login, Signup, Problems, Bookmarks, Profile
        └── Coderoom/     # Real-time editor, whiteboard, socket logic
```

