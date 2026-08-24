require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { authrouter } = require("./routes/auth.router");
const { interviewRouter } = require("./routes/interview.router");

const app = express();

// Accept one or more frontend URLs, with or without a trailing slash.
const allowedOrigins = (process.env.FRONTEND_URLS || process.env.FRONTEND_URL || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);
const allowVercelPreview = String(process.env.ALLOW_VERCEL_PREVIEW || "false").toLowerCase() === "true";

function isOriginAllowed(origin) {
  if (!origin) return true;

  const normalizedOrigin = String(origin).replace(/\/$/, "");
  if (allowedOrigins.includes(normalizedOrigin)) {
    return true;
  }

  if (allowVercelPreview && /^https:\/\/[a-z0-9-]+\.vercel\.app$/i.test(normalizedOrigin)) {
    return true;
  }

  return false;
}

// CORS
app.use(
  cors({
    origin(origin, callback) {
      if (isOriginAllowed(origin)) {
        return callback(null, true);
      }

      // Reject silently instead of bubbling as a 500 error.
      return callback(null, false);
    },
    credentials: true,
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authrouter);
app.use("/api/interview", interviewRouter);

// Home route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Export app
module.exports = app;