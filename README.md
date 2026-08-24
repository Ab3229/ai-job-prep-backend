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

## Requirements

- Node.js 18 or newer
- A MongoDB deployment or local MongoDB instance
- A Google Gemini API key

## Setup

```bash
git clone https://github.com/Ab3229/ai-job-prep-backend.git
cd ai-job-prep-backend
npm install
```

Create a `.env` file from `.env.example`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_gemini_api_key
PORT=3000
FRONTEND_URL=http://localhost:5173
```

Start the server:

```bash
npm run dev
```

The API is available at `http://localhost:3000` by default.

## API Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | Create an account | No |
| `POST` | `/api/auth/login` | Sign in and set the auth cookie | No |
| `POST` | `/api/auth/logout` | Clear and blacklist the auth cookie | No |
| `GET` | `/api/auth/me` | Get the current user | Yes |

Registration accepts `name` (or `username`), `email`, and `password`. Passwords must contain at least six characters.

### Interview Preparation

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| `POST` | `/api/interview/generate` | Generate and save an interview report | Yes |
| `GET` | `/api/interview/reports` | List the signed-in user's reports | Yes |

Example request:

```json
{
	"jobDescription": "Backend developer with Node.js and MongoDB experience",
	"resumeText": "Candidate resume text goes here",
	"selfDescription": "I enjoy building reliable APIs"
}
```

The authentication cookie is HTTP-only. API clients must send cookies with requests to protected endpoints. For browser clients using `fetch`, set `credentials: "include"`.

## Project Structure

```text
server.js                 Application entry point
src/app.js                Express app and middleware setup
src/config/database.js    MongoDB connection
src/models/                Mongoose models
src/routes/                Authentication and interview routes
src/service/ai.service.js Gemini integration and report normalization
```

## Development Notes

Resume input is currently submitted as extracted text in `resumeText`. A multipart file-upload and resume text-extraction endpoint, plus ATS-specific resume content generation, are planned extensions.

The automated test script is not configured yet. Run `npm start` for the production-style start command.