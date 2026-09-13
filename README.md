# Taskora AI

**Turn ideas into action, faster.**

Taskora AI is an AI-native project management platform that transforms goals into prioritized work, keeps teams aligned, and helps you ship with less planning overhead.

---

## Overview

Taskora AI combines real-time collaborative kanban boards with an integrated AI Planner that generates entire backlogs from a single goal description. Built for modern startups and developer teams who want to move fast without sacrificing clarity.

---

## Features

- **AI Task Generator** — Describe a goal in one line; get a full, prioritized backlog in seconds
- **AI Task Breakdown** — Expand any task into clear, estimable subtasks with one click
- **AI Sprint Summaries** — Auto-generated progress reports covering what's done, pending, and at risk
- **Real-Time Collaboration** — Live presence, drag-and-drop kanban, and instant activity feed
- **Command Menu** — Press `⌘K` to jump anywhere, search tasks, or create boards
- **Smart Prioritization** — AI Insights surface the highest-impact tasks automatically
- **Drag & Drop Boards** — Smooth kanban with Todo, In Progress, Review, and Done columns
- **Calendar View** — Timeline visualization of tasks and deadlines
- **Team Management** — Invite members, assign tasks, track contribution

---

## AI Capabilities

| Feature | Description |
|---|---|
| AI Planner | Converts a one-line goal into a full, structured backlog |
| Task Breakdown | Decomposes complex tasks into clear subtasks |
| Sprint Summaries | Generates progress narratives for stand-ups and stakeholders |
| Smart Prioritization | Surfaces high-impact, urgent tasks automatically |
| AI Insights | Identifies blockers, risks, and team bottlenecks |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS v4, Framer Motion |
| Backend | Node.js, Express, Socket.IO |
| Database | PostgreSQL (via Neon) |
| AI | Google Gemini API (`@google/genai`) |
| Auth | JWT (jsonwebtoken + bcryptjs) |
| Real-time | Socket.IO |
| Drag & Drop | dnd-kit |

---

## Project Structure

```
taskora-ai/
├── frontend/
│   └── AIKanbanBoard/         # Vite + React application
│       ├── public/            # Static assets (favicon, icons)
│       ├── src/
│       │   ├── components/
│       │   │   ├── ai/        # AI modals (Generate, Summary)
│       │   │   ├── auth/      # Auth aside panel
│       │   │   ├── board/     # Board & task components
│       │   │   ├── landing/   # Landing page sections
│       │   │   ├── layout/    # App shell (Sidebar, Topbar)
│       │   │   └── ui/        # Shared UI primitives
│       │   ├── context/       # React contexts (Auth, Boards)
│       │   ├── hooks/         # Custom hooks
│       │   ├── pages/         # Route-level pages
│       │   └── routes/        # Router configuration
│       └── index.html
└── backend/
    ├── src/
    │   ├── config/            # DB and app config
    │   ├── controllers/       # Route controllers
    │   ├── db/                # DB init & seed scripts
    │   ├── middleware/        # Auth middleware
    │   ├── routes/            # Express routes
    │   ├── services/          # AI service (Gemini)
    │   └── socket/            # Socket.IO handlers
    └── index.js
```

---

## Local Development

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Google Gemini API key

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd taskora-ai
```

### 2. Backend setup

```bash
cd backend
cp .env.example .env   # Fill in your credentials
npm install
npm run db:init        # Create tables
npm run db:seed        # Seed demo data
npm run dev            # Start on port 5050
```

### 3. Frontend setup

```bash
cd frontend/AIKanbanBoard
cp .env.example .env   # Set VITE_API_URL and VITE_SOCKET_URL
npm install
npm run dev            # Start on port 5173
```

---

## Environment Variables

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 5050) |
| `NODE_ENV` | `development` or `production` |
| `CLIENT_URL` | Frontend URL for CORS |
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret key for JWT signing |
| `JWT_EXPIRES_IN` | Token expiry (e.g. `7d`) |
| `GEMINI_API_KEY` | Google Gemini API key |
| `GEMINI_MODEL` | Gemini model name |

### Frontend (`frontend/AIKanbanBoard/.env`)

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend API URL (e.g. `http://localhost:5050/api`) |
| `VITE_SOCKET_URL` | Socket.IO server URL (e.g. `http://localhost:5050`) |

---

## Available Scripts

### Frontend

```bash
npm run dev       # Development server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # ESLint check
```

### Backend

```bash
npm run dev       # Development server with file watching
npm start         # Production start
npm run db:init   # Initialize database schema
npm run db:seed   # Seed demo data
```

---

## Deployment

### Frontend
Deploy the `frontend/AIKanbanBoard` directory to any static host (Vercel, Netlify, Cloudflare Pages). Set the environment variables in the platform dashboard.

### Backend
Deploy to any Node.js host (Railway, Render, Fly.io). Ensure `DATABASE_URL`, `GEMINI_API_KEY`, `JWT_SECRET`, and `CLIENT_URL` are set.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/ai-insights`)
3. Commit your changes (`git commit -m 'feat: add AI Insights panel'`)
4. Push to the branch (`git push origin feature/ai-insights`)
5. Open a Pull Request

---

## License

MIT
