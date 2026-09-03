import { Link } from 'react-router-dom';
import { Search, MapPin, Building, ShieldCheck, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [propertyType, setPropertyType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const types = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'villas', label: 'Villa' }
  ];

  const selectedLabel = types.find(t => t.value === propertyType)?.label || 'Property Type';

  return (
    <div className="bg-background">
      <section className="relative h-[80vh] flex items-center bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Discover Your Premium Dream Home
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Exclusive residential and commercial properties designed for luxury, comfort, and a modern lifestyle.
            </p>
            
            
            <div className="bg-white p-2 rounded-lg flex flex-col md:flex-row gap-2 relative">
              <div className="flex-grow flex items-center px-3 bg-gray-100 rounded">
                <MapPin className="text-gray-500 mr-2" size={20} />
                <input 
                  type="text" 
                  placeholder="Location (e.g., Electronic City)" 
                  className="bg-transparent w-full py-3 focus:outline-none text-gray-800"
                />
              </div>
              <div className="flex-grow flex items-center px-3 bg-gray-100 rounded relative cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <Building className="text-gray-500 mr-2" size={20} />
                <div className="w-full py-3 text-gray-800 flex justify-between items-center">
                  <span>{selectedLabel}</span>
                  <ChevronDown size={16} className="text-gray-500" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-full bg-white shadow-lg rounded border border-gray-200 z-50">
                    <div className="py-1">
                      <div className="px-4 py-2 hover:bg-gray-100 text-gray-800" onClick={() => setPropertyType('')}>Any Type</div>
                      {types.map(t => (
                        <div key={t.value} className="px-4 py-2 hover:bg-gray-100 text-gray-800" onClick={() => setPropertyType(t.value)}>{t.label}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link 
                to={`/properties${propertyType ? `?type=${propertyType}` : ''}`} 
                className="bg-primary text-white flex items-center justify-center px-8 py-3 rounded hover:bg-primary/90 transition-colors font-medium whitespace-nowrap"
              >
                <Search className="mr-2" size={20} /> Search
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-text mb-2">Featured Projects</h2>
            <p className="text-muted">Explore our most sought-after premium developments.</p>
          </div>
          <Link to="/properties" className="text-primary font-medium hover:underline hidden md:block">
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Luxury Residences" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
                New Launch
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold drop-shadow-md">Azure Heights</h3>
                <p className="flex items-center text-sm drop-shadow-md"><MapPin size={14} className="mr-1" /> Whitefield, Bengaluru</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-muted text-sm">Starting from</p>
                  <p className="text-xl font-bold text-text">₹1.25 Cr*</p>
                </div>
                <div className="text-right">
                  <p className="text-muted text-sm">Configuration</p>
                  <p className="font-medium text-text">3 & 4 BHK</p>
                </div>
              </div>
              <Link to="/properties/1" className="block w-full text-center bg-gray-100 text-text font-medium py-2 rounded hover:bg-gray-200 transition-colors">
                View Details
              </Link>
            </div>
          </div>

          
          <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Premium Villas" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded">
                Ready to Move
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold drop-shadow-md">Serene Villas</h3>
                <p className="flex items-center text-sm drop-shadow-md"><MapPin size={14} className="mr-1" /> Electronic City, Bengaluru</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-muted text-sm">Starting from</p>
                  <p className="text-xl font-bold text-text">₹3.50 Cr*</p>
                </div>
                <div className="text-right">
                  <p className="text-muted text-sm">Configuration</p>
                  <p className="font-medium text-text">4 BHK Villas</p>
                </div>
              </div>
              <Link to="/properties/1" className="block w-full text-center bg-gray-100 text-text font-medium py-2 rounded hover:bg-gray-200 transition-colors">
                View Details
              </Link>
            </div>
          </div>

          
          <div className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Commercial Spaces" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded">
                Commercial
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold drop-shadow-md">Apex Tech Park</h3>
                <p className="flex items-center text-sm drop-shadow-md"><MapPin size={14} className="mr-1" /> ORR, Bengaluru</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-border">
                <div>
                  <p className="text-muted text-sm">Starting from</p>
                  <p className="text-xl font-bold text-text">₹8,000 / sq.ft</p>
                </div>
                <div className="text-right">
                  <p className="text-muted text-sm">Spaces</p>
                  <p className="font-medium text-text">Office & Retail</p>
                </div>
              </div>
              <Link to="/properties/1" className="block w-full text-center bg-gray-100 text-text font-medium py-2 rounded hover:bg-gray-200 transition-colors">
                View Details
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/properties" className="text-primary font-medium hover:underline inline-flex items-center">
            View All Projects &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">Why Choose ASPL</h2>
            <p className="text-muted max-w-2xl mx-auto">We build more than just concrete structures; we build trust, relationships, and homes that last generations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Uncompromised Quality</h3>
              <p className="text-muted">Premium materials and world-class construction standards that ensure durability and elegance.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Prime Locations</h3>
              <p className="text-muted">Strategically chosen locations that offer great connectivity, lifestyle, and appreciation potential.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-50 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Building size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-muted">A proven track record of delivering projects on schedule without compromising on quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text mb-4">What Our Customers Say</h2>
            <p className="text-muted max-w-2xl mx-auto">Read stories from families who found their dream homes with ASPL.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-600 italic mb-6">"Buying a home with ASPL was a breeze. They kept us updated on construction progress and delivered our apartment 2 months before the promised date."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">RA</div>
                <div>
                  <h4 className="font-bold text-gray-800">Jagan</h4>
                  <p className="text-xs text-gray-500">Residents, Azure Heights</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-600 italic mb-6">"The premium amenities at Serene Villas are truly world-class. It feels like living in a luxury resort every day. Best investment decision we've made."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">VK</div>
                <div>
                  <h4 className="font-bold text-gray-800">Usha</h4>
                  <p className="text-xs text-gray-500">Owner, Serene Villas</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="flex text-yellow-400 mb-4">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-gray-600 italic mb-6">"As an investor, I was looking for premium commercial space. Apex Tech Park offered great value, excellent location, and smooth documentation."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">SM</div>
                <div>
                  <h4 className="font-bold text-gray-800">Abinaya</h4>
                  <p className="text-xs text-gray-500">Investor, Apex Tech Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
