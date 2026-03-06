import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-secondary pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Garhwal Hikes</h3>
            <p className="text-gray-100 leading-relaxed">Trek to the heart of Himalayas with expert guides and unforgettable experiences.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Trek Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/treks?category=yatra" className="text-gray-100 hover:text-white transition-colors duration-300">Yatra Treks</Link></li>
              <li><Link to="/treks?category=winter" className="text-gray-100 hover:text-white transition-colors duration-300">Winter Treks</Link></li>
              <li><Link to="/treks?category=monsoon" className="text-gray-100 hover:text-white transition-colors duration-300">Monsoon Treks</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-100 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/influencer" className="text-gray-100 hover:text-white transition-colors duration-300">Influencer Program</Link></li>
              <li><Link to="/contact" className="text-gray-100 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/917455062107" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" className="text-gray-100 hover:text-white transition-colors duration-300">
                  WhatsApp: +91 7455 062 107
                </a>
              </li>
              <li>
                <a href="mailto:info@garhwalhikes.com" aria-label="Email us at info@garhwalhikes.com" className="text-gray-100 hover:text-white transition-colors duration-300">
                  Email: info@garhwalhikes.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-light pt-6 text-center text-gray-100">
          <p>&copy; {currentYear} Garhwal Hikes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
