require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { authrouter } = require("./routes/auth.router");
const { interviewRouter } = require("./routes/interview.router");

const app = express();

// Frontend URL
const allowedOrigin =
  process.env.FRONTEND_URL || "http://localhost:5173";

// CORS
app.use(
  cors({
    origin: allowedOrigin,
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