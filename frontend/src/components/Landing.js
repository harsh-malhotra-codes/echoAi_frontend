import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={{ height: 'calc(100vh - 64px)', width: '100%', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Animated stars */}
      <div className="star white" style={{ position: 'absolute', top: '10%', left: '10%', width: '8px', height: '8px' }}></div>
      <div className="star white" style={{ position: 'absolute', top: '20%', right: '20%', width: '4px', height: '4px' }}></div>
      <div className="star white" style={{ position: 'absolute', top: '50%', left: '25%', width: '4px', height: '4px' }}></div>
      <div className="star white" style={{ position: 'absolute', bottom: '33%', right: '33%', width: '8px', height: '8px' }}></div>

      <div style={{ textAlign: 'center' }}>
        <h1 className="title-gradient-pixel" style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '2px' }}>
          EchoAI
        </h1>
        <p className="font-sans text-outline" style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '36rem', lineHeight: '1.6', color: '#e5e7eb', marginLeft: 'auto', marginRight: 'auto' }}>
          Your intelligent space companion. Explore the cosmos with AI-powered conversations.
        </p>
        <button
          onClick={() => navigate('/chat')}
          style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', color: 'white', padding: '0.5rem 2rem', borderRadius: '0.5rem', fontSize: '1.125rem', fontWeight: '600', transition: 'transform 0.3s', border: 'none', cursor: 'pointer' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Start Chatting
        </button>
        <div style={{ height: '0.75rem' }} />
        <button
          onClick={() => navigate('/about')}
          style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white', padding: '0.5rem 2rem', borderRadius: '0.5rem', fontSize: '1.0rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'transform 0.3s' }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Learn More About EchoAI
        </button>
      </div>
    </div>
  );
};

export default Landing;
