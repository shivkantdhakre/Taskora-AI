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
  res.json({ name: "Taskora AI API", status: "running" }),
);
app.use("/api", apiRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const server = http.createServer(app);
initSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 API + Socket.IO listening on http://localhost:${PORT}`);
});

module.exports = app;
