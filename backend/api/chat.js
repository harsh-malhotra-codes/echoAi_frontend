const { GoogleGenerativeAI } = require('@google/generative-ai');

// Sanitize text to remove noisy artifacts like $, @, **, code backticks, and normalize whitespace
const sanitizeText = (text = '') => {
  let t = String(text);
  // Remove markdown code fences/backticks
  t = t.replace(/```+/g, '').replace(/`+/g, '');
  // Remove repeated decorative symbols (keep normal punctuation)
  t = t.replace(/[@$*_~^|=#]+/g, '');
  // Collapse multiple punctuation like !!!!!! or ????? to max 3
  t = t.replace(/([!?.])\1{2,}/g, '$1$1$1');
  // Normalize whitespace
  t = t.replace(/[\t ]+/g, ' ');
  t = t.replace(/\n{3,}/g, '\n\n');
  // Trim stray leading/trailing symbols and spaces
  t = t.replace(/^[^\p{L}\p{N}()\[\]{}'"\-]+/u, '').replace(/[^\p{L}\p{N})\]\}'".!?\-]+$/u, '');
  return t.trim();
};

module.exports = async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    // Get AI response
    const result = await model.generateContent(message);
    const aiResponse = result.response.text();

    // Return sanitized response
    res.status(200).json({
      response: sanitizeText(aiResponse)
    });

  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
