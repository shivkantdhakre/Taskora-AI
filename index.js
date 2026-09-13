// Taskora AI - Root entrypoint for Railway and cloud container deployment
const path = require("path");

// Switch current working directory to backend so dotenv and relative paths locate backend/.env
try {
  process.chdir(path.join(__dirname, "backend"));
} catch (_) {}

require("./backend/index.js");
