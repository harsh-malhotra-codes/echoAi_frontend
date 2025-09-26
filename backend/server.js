require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL connection
// const dbConfig = {
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// };

// let db;
// async function connectDB() {
//   try {
//     db = await mysql.createConnection(dbConfig);
//     console.log('Connected to MySQL database');
//   } catch (error) {
//     console.error('Database connection failed:', error);
//   }
// }

// Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// API Endpoints
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    // Get AI response
    const result = await model.generateContent(message);
    const aiResponse = result.response.text();

    // Save to database
    // await db.execute(
    //   'INSERT INTO messages (user_message, ai_response) VALUES (?, ?)',
    //   [message, aiResponse]
    // );

    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/history', async (req, res) => {
  // try {
  //   const [rows] = await db.execute('SELECT * FROM messages ORDER BY timestamp DESC');
  //   res.json(rows);
  // } catch (error) {
  //   console.error('History error:', error);
  //   res.status(500).json({ error: 'Internal server error' });
  // }
  res.json([]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
