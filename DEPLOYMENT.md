# Taskora AI — Live Deployment Guide

This guide walks you through deploying **Taskora AI** to production using **Vercel** (Frontend) and **Render** (Backend) with your existing **Neon PostgreSQL** database.

---

## Architecture Overview

* **Frontend**: React 19 + Vite (Hosted on Vercel)
* **Backend**: Node.js + Express + Socket.IO (Hosted on Render Web Service)
* **Database**: Managed PostgreSQL on Neon (Cloud-hosted AWS `ap-southeast-1`)
* **AI Engine**: Google Gemini API (`gemini-3.6-flash`)

---

## Step 1: Push Code to GitHub

Both Vercel and Render deploy directly from GitHub with automatic continuous deployment (CI/CD):

1. Go to [github.com/new](https://github.com/new) and create a new repository (e.g., `taskora-ai`).
2. Run the following commands in your project terminal:

```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/taskora-ai.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy Backend to Render

1. Go to [render.com](https://render.com) and log in.
2. Click **New +** → **Web Service**.
3. Select your `taskora-ai` GitHub repository.
4. Configure the service:
   * **Name**: `taskora-ai-backend` (or your preferred name)
   * **Region**: `Singapore` *(matches your Neon DB region)*
   * **Root Directory**: `backend`
   * **Runtime**: `Node`
   * **Build Command**: `npm install`
   * **Start Command**: `node index.js`
   * **Instance Type**: `Free`
5. Under **Environment Variables**, copy the values from your local `backend/.env` file:

| Key | Value Description | Notes |
|---|---|---|
| `PORT` | `5050` | Port for Express & Socket.IO |
| `NODE_ENV` | `production` | Production environment flag |
| `DATABASE_URL` | *(Copy from your local `backend/.env`)* | Your Neon cloud database connection string |
| `JWT_SECRET` | *(Copy from your local `backend/.env`)* | Secure random signing key |
| `JWT_EXPIRES_IN` | `7d` | Token expiry duration |
| `GEMINI_API_KEY` | *(Copy from your local `backend/.env`)* | Google Gemini API key |
| `GEMINI_MODEL` | `gemini-3.6-flash` | Gemini model |
| `CLIENT_URL` | `*` *(or your Vercel URL once generated in Step 3)* | Allowed CORS origin |

6. Click **Deploy Web Service**.
7. Once deployed, copy your backend URL (e.g., `https://taskora-ai-backend.onrender.com`).
   * *Health check*: Open `https://<your-backend-url>/` in your browser. You should see `{"name":"Taskora AI API","status":"running"}`.

---

## Step 3: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New…** → **Project**.
3. Import your `taskora-ai` GitHub repository.
4. In the project setup screen:
   * **Framework Preset**: `Vite`
   * **Root Directory**: Click **Edit** and choose `frontend/AIKanbanBoard`
   * **Build Command**: `npm run build`
   * **Output Directory**: `dist`
5. Expand **Environment Variables** and add:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://<YOUR_RENDER_BACKEND_URL>/api` |
| `VITE_SOCKET_URL` | `https://<YOUR_RENDER_BACKEND_URL>` |

6. Click **Deploy**.
7. Vercel will build the frontend and provide your live production domain (e.g., `https://taskora-ai.vercel.app`).

---

## Step 4: Link Frontend Domain in Backend

1. Return to your Render dashboard for `taskora-ai-backend`.
2. Go to **Environment** and update:
   * `CLIENT_URL`: `https://<YOUR_VERCEL_DOMAIN>.vercel.app`
3. Click **Save Changes**. Render will automatically redeploy with the updated CORS policy.

---

## Verification Checklist

- [ ] Visit `https://<YOUR_VERCEL_DOMAIN>.vercel.app/`
- [ ] Test registration / login
- [ ] Create a new board
- [ ] Generate AI tasks using the AI generator
- [ ] Test drag and drop between columns
- [ ] Switch between Light and Dark mode using the theme toggle
