require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");

const apiRoutes = require("./src/routes");
const {
  errorHandler,
  notFoundHandler,
} = require("./src/middleware/errorHandler");
const { initSocket } = require("./src/socket");

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((u) => u.trim().replace(/\/+$/, ""));

app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        cb(null, true);
      } else {
        cb(null, true);
      }
    },
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/", (_req, res) =>
  res.status(200).json({
    name: "Taskora AI API",
    status: "running",
    timestamp: new Date().toISOString(),
  })
);

app.get("/health", (_req, res) =>
  res.status(200).json({ status: "ok" })
);

app.use("/api", apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const server = http.createServer(app);
initSocket(server);

const PORT = Number(process.env.PORT) || 5000;
const HOST = process.env.HOST || "0.0.0.0";

server.on("error", (err) => {
  console.error("❌ Fatal server error:", err);
});

server.listen(PORT, HOST, () => {
  console.log(`🚀 Taskora AI API + Socket.IO listening on http://${HOST}:${PORT}`);
});

process.on("unhandledRejection", (reason) => {
  console.error("⚠️ Unhandled Rejection:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});

module.exports = app;
