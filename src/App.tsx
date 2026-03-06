import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './pages/Home';
import AllTreks from './pages/AllTreks';
import TrekDetail from './pages/TrekDetail';
import About from './pages/About';
import InfluencerProgram from './pages/InfluencerProgram';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/treks" element={<AllTreks />} />
            <Route path="/trek/:id" element={<TrekDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/influencer" element={<InfluencerProgram />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
