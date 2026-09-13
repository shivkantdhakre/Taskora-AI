# Taskora AI — Live Deployment Guide

This guide walks you through deploying **Taskora AI** to production using **Vercel** (Frontend), **Render** (Primary Backend), and **Railway** (High-Availability Fallback Backend) connected to your shared **Neon PostgreSQL** database.

---

## High-Availability Architecture

* **Frontend**: React 19 + Vite (Hosted on Vercel with automatic failover)
* **Primary Backend**: Render Web Service (Node.js + Socket.IO)
* **Fallback Backend**: Railway Web Service (Instant failover if Render is sleeping or down)
* **Shared Database**: Cloud PostgreSQL on Neon (`ap-southeast-1`) — keeps both backends 100% in sync!
* **AI Engine**: Google Gemini API (`gemini-3.6-flash`)

### How Automatic Failover Works
The frontend is equipped with an automated failover engine:
1. All API and WebSocket requests default to the **Primary Backend (Render)**.
2. If Render is sleeping (cold start), times out, or encounters a 502/503/504 error, the frontend **instantly switches to the Fallback Backend (Railway)** without dropping the user's session.
3. Both backends point to the **same Neon database**, so all boards, tasks, and members are identical across both servers!

---

## Step 1: Push Code to GitHub

Make sure your latest code is pushed to your GitHub repository:

```bash
git add .
git commit -m "feat: add railway fallback and auto-failover engine"
git push origin main
```

---

## Step 2: Deploy Primary Backend to Render

1. Go to [render.com](https://render.com) and log in.
2. Click **New +** → **Web Service**.
3. Select your `taskora-ai` repository.
4. Configure the service:
   * **Name**: `taskora-ai-backend`
   * **Region**: `Singapore` *(matches your Neon DB region)*
   * **Root Directory**: `backend`
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `node index.js`
   * **Instance Type**: `Free`
5. Under **Environment Variables**, add the values from your local `backend/.env`:

| Key | Value Description |
|---|---|
| `PORT` | `5050` |
| `NODE_ENV` | `production` |
| `DATABASE_URL` | *(Copy from your local `backend/.env`)* |
| `JWT_SECRET` | *(Copy from your local `backend/.env`)* |
| `JWT_EXPIRES_IN` | `7d` |
| `GEMINI_API_KEY` | *(Copy from your local `backend/.env`)* |
| `GEMINI_MODEL` | `gemini-3.6-flash` |
| `CLIENT_URL` | `*` *(or update to your Vercel URL in Step 5)* |

6. Click **Deploy Web Service** and note your Render URL (e.g., `https://taskora-ai-backend.onrender.com`).

---

## Step 3: Deploy Fallback Backend to Railway

1. Go to [railway.com](https://railway.com) and log in with GitHub.
2. Click **New Project** → **Deploy from GitHub repo**.
3. Select your `taskora-ai` repository.
4. Click on the newly created service and go to **Settings**:
   * **Root Directory**: Set to `/backend`
5. Go to the **Variables** tab and click **New Variable** (or **RAW Editor** to paste all):

```env
NODE_ENV=production
DATABASE_URL=<Paste your exact Neon DATABASE_URL from backend/.env>
JWT_SECRET=<Paste your exact JWT_SECRET from backend/.env>
JWT_EXPIRES_IN=7d
GEMINI_API_KEY=<Paste your exact GEMINI_API_KEY from backend/.env>
GEMINI_MODEL=gemini-3.6-flash
CLIENT_URL=*
```
*(Note: Railway automatically assigns and manages the `PORT` variable).*

6. In **Settings** under **Networking**, click **Generate Domain**.
7. Railway will generate your public domain (e.g., `https://taskora-ai-backend-production.up.railway.app`).
   * *Quick Check*: Opening `https://<YOUR_RAILWAY_DOMAIN>/` in your browser will return `{"name":"Taskora AI API","status":"running"}`.

---

## Step 4: Deploy Frontend to Vercel (with Dual Backend Failover)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New…** → **Project** and import your `taskora-ai` repository.
3. In the project setup screen:
   * **Framework Preset**: `Vite`
   * **Root Directory**: Click **Edit** and select `frontend/AIKanbanBoard`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
4. Expand **Environment Variables** and add both backend URLs:

| Key | Value | Purpose |
|---|---|---|
| `VITE_API_URL` | `https://<YOUR_RENDER_URL>/api` | Primary REST API |
| `VITE_SOCKET_URL` | `https://<YOUR_RENDER_URL>` | Primary WebSocket Server |
| `VITE_FALLBACK_API_URL` | `https://<YOUR_RAILWAY_DOMAIN>/api` | Fallback REST API (Railway) |
| `VITE_FALLBACK_SOCKET_URL` | `https://<YOUR_RAILWAY_DOMAIN>` | Fallback WebSocket Server (Railway) |

5. Click **Deploy**. Vercel will build and provide your live URL (e.g. `https://taskora-ai.vercel.app`).

---

## Step 5: Final CORS Link

To lock down CORS for production security:
1. In your **Render Dashboard** → `taskora-ai-backend` → **Environment**:
   * Set `CLIENT_URL` to `https://<YOUR_VERCEL_DOMAIN>.vercel.app`
2. In your **Railway Dashboard** → Service → **Variables**:
   * Set `CLIENT_URL` to `https://<YOUR_VERCEL_DOMAIN>.vercel.app`

---

## Verification Checklist

- [ ] Visit your Vercel URL
- [ ] Test registration / login
- [ ] Create a new board and generate AI tasks
- [ ] Test real-time drag and drop
- [ ] **Failover Test**: If Render spins down or goes offline, your app will automatically fall back to Railway with zero downtime!
