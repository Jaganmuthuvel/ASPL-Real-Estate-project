import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-secondary mb-4">ASPL Real Estate</h3>
          <p className="text-gray-400 mb-4">
            Building premium residential and commercial spaces that redefine luxury and comfort.
          </p>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/properties" className="text-gray-400 hover:text-white transition-colors">All Projects</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Developer</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & Insights</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Properties</h4>
          <ul className="space-y-2">
            <li><Link to="/properties?type=residential" className="text-gray-400 hover:text-white transition-colors">Residential</Link></li>
            <li><Link to="/properties?type=commercial" className="text-gray-400 hover:text-white transition-colors">Commercial</Link></li>
            <li><Link to="/properties?type=villas" className="text-gray-400 hover:text-white transition-colors">Luxury Villas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Info</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <MapPin className="mr-2 text-primary shrink-0" size={20} />
              <span className="text-gray-400">305, 1st floor, Parappana Agrahara Main Road, Bengaluru, 560100</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 text-primary shrink-0" size={20} />
              <span className="text-gray-400">+91 98434 06360</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 text-primary shrink-0" size={20} />
              <span className="text-gray-400">info@aspltech.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ASPL Tech Solutions Private Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
