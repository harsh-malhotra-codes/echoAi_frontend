# EchoAI Chatbot

A space-themed AI chatbot built with React, Node.js, and Express.

## Features

- Space-themed UI with animations
- Real-time chat with Google Gemini AI
- Responsive design

## Setup

### Prerequisites

- Node.js
- Git

### Backend Setup

1. Navigate to backend directory: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` and add your Google Gemini API key
4. Start the server: `npm run dev`

### Frontend Setup

1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Running Locally

1. Install dependencies: `npm install`
2. Start development servers: `npm run dev`
   - Backend runs on http://localhost:5000
   - Frontend runs on http://localhost:3000

Open http://localhost:3000 in your browser.

### Deploying to Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add your `GEMINI_API_KEY` environment variable in Vercel dashboard
4. Deploy - Vercel will automatically build and deploy both frontend and backend

Your app will be available at `https://your-project.vercel.app`
