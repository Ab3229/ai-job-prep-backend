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

## Deployment

Set these variables in Render:

```text
NODE_ENV=production
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
FRONTEND_URLS=https://your-production-vercel-domain.vercel.app,https://genai-job-prep-frontend-git-main-ab3229s-projects.vercel.app
ALLOW_VERCEL_PREVIEW=true
```

`FRONTEND_URLS` accepts a comma-separated list of allowed origins.
If you set `ALLOW_VERCEL_PREVIEW=true`, preview deployments on `*.vercel.app`
are also allowed.

The frontend must call the Render API URL, for example
`https://your-backend.onrender.com/api/auth/login`, and send cookies with
`credentials: "include"` (or `withCredentials: true` in Axios).

## Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- Google Gemini API through `@google/genai`
- JWT and bcrypt password hashing
- CORS, cookie-parser, dotenv, and Zod

