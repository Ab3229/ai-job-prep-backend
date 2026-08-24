# AI Job Prep Backend

Node.js backend for AI-assisted job and interview preparation. The API combines JWT authentication, MongoDB persistence, and Google Gemini to generate personalized interview reports from a candidate's resume and a job description.

## Features

- JWT authentication with HTTP-only cookies
- User registration, login, logout, and protected profile access
- Resume and job description analysis through Gemini
- Technical and behavioral interview question generation
- Skill-gap detection with severity levels
- Day-wise interview preparation plans
- MongoDB persistence for users, token blacklists, and interview reports
- CORS support for a configured frontend origin

## Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- Google Gemini API through `@google/genai`
- JWT and bcrypt password hashing
- CORS, cookie-parser, dotenv, and Zod

