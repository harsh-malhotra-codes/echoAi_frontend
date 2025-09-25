import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Chat from './components/Chat';
import BackgroundVideo from './components/BackgroundVideo';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <Router>
      {/* Global background video across all routes */}
      <BackgroundVideo />
      {/* Foreground content */}
      <div className="page-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
