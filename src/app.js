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

// CORS
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin.replace(/\/$/, ""))) {
        return callback(null, true);
      }

      return callback(new Error("CORS origin is not allowed"));
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