import { useState, useEffect, useRef } from 'react';

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
  t = t.replace(/^[^\p{L}\p{N}()[\]{}'"\-]+/u, '').replace(/[^\p{L}\p{N})\]\}'".!?\-]+$/u, '');
  return t.trim();
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: sanitizeText(input) };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      const aiMessage = { type: 'ai', text: sanitizeText(data.response) };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { type: 'ai', text: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  // Generate stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 98 + 1, // clamp within 1%..99% to avoid overflow
    y: Math.random() * 98 + 1,
    size: Math.random() * 3 + 1,
    speed: Math.random() * 0.5 + 0.1,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%', color: 'white', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Star Field */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'white',
            borderRadius: '50%',
            opacity: star.opacity,
            zIndex: 2
          }}
        />
      ))}

      {/* Navbar is rendered globally in App.js */}

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '1rem', paddingBottom: '7rem', position: 'relative', zIndex: 10 }}>
        <div style={{ width: '100%', maxWidth: '100%', padding: '0 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', overflowX: 'hidden' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start', width: '100%' }}>
              <div className="font-sans" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', maxWidth: '80%', background: msg.type === 'user' ? '#3b82f6' : '#374151', color: 'white', whiteSpace: 'pre-wrap', wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div className="font-sans" style={{ padding: '0.5rem 1rem', borderRadius: '0.5rem', background: '#374151', color: 'white' }}>
                Thinking...
              </div>
            </div>
          )}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chat-input-bar">
        <div className="chat-input-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="font-sans chat-input"
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="chat-send"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
