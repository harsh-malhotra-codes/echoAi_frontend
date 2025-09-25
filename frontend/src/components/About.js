import React from 'react';

const About = () => {
  return (
    <div className="font-sans" style={{ height: 'calc(100vh - 64px)', color: 'white', position: 'relative', zIndex: 3, overflow: 'hidden' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '2rem 1rem' }}>
        <h1 className="text-outline title-gradient-pixel" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
          About EchoAI
        </h1>

        <div className="card bg-transparent border-0" style={{ backdropFilter: 'blur(2px)' }}>
          <div className="card-body p-0">
            <p style={{ lineHeight: 1.7, color: '#e5e7eb', marginBottom: '1rem' }}>
              EchoAI is your intelligent space companion. It blends natural language understanding with a cosmic aesthetic to make chatting feel out of this world.
            </p>
            <p style={{ lineHeight: 1.7, color: '#e5e7eb', marginBottom: '1rem' }}>
              This project demonstrates a simple full-stack chatbot experience with a themed UI, including a video background, star field, and a clean chat interface.
            </p>

            <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

            <h2 className="h5 text-outline" style={{ color: '#ffffff' }}>Open Source</h2>
            <p style={{ lineHeight: 1.7, color: '#e5e7eb' }}>
              EchoAI is open-source. You can explore, clone, and contribute to the source code on GitHub.
            </p>
            <div className="d-flex flex-wrap gap-2 mb-3">
              <a
                href="https://github.com/harsh-malhotra-codes"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-light"
              >
                View GitHub Profile
              </a>
              <a
                href="https://github.com/harsh-malhotra-codes"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary"
                style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', border: 'none' }}
              >
                Get the Source Code
              </a>
            </div>

            <h2 className="h5 text-outline" style={{ color: '#ffffff' }}>Contact</h2>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <span style={{ color: '#9ca3af' }}>Email:</span>
                <a href="mailto:vermaharsh78898@gmail.com" className="ms-2" style={{ color: '#93c5fd', textDecoration: 'none' }}>
                  vermaharsh78898@gmail.com
                </a>
              </li>
              <li>
                <span style={{ color: '#9ca3af' }}>GitHub:</span>
                <a href="https://github.com/harsh-malhotra-codes" target="_blank" rel="noreferrer" className="ms-2" style={{ color: '#93c5fd', textDecoration: 'none' }}>
                  @harsh-malhotra-codes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
