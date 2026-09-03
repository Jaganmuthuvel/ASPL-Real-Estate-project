import { useState, useEffect } from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';

const PropertyListingPage = () => {
  const { addToCompare } = useCompare();
  const [searchParams] = useSearchParams();
  const urlType = searchParams.get('type');

  
  const initialFilter = urlType === 'residential' ? 'Residential' :
                        urlType === 'commercial' ? 'Commercial' :
                        urlType === 'villas' ? 'Villa' : 'All';
  
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [tempFilter, setTempFilter] = useState(initialFilter);
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    
    const typeMap: Record<string, string> = {
      residential: 'Residential',
      commercial: 'Commercial',
      villas: 'Villa'
    };

    if (urlType && typeMap[urlType]) {
      setTimeout(() => {
        setActiveFilter(typeMap[urlType]);
        setTempFilter(typeMap[urlType]);
      }, 0);
    }
  }, [urlType]);

  const properties = [
    {
      id: 1,
      name: 'Azure Heights',
      location: 'Whitefield, Bengaluru',
      price: '₹1.25 Cr*',
      config: '3 & 4 BHK',
      status: 'New Launch',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Serene Villas',
      location: 'Electronic City, Bengaluru',
      price: '₹3.50 Cr*',
      config: '4 BHK Villas',
      status: 'Ready to Move',
      type: 'Villa',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Apex Tech Park',
      location: 'ORR, Bengaluru',
      price: '₹8,000 / sq.ft',
      config: 'Office & Retail',
      status: 'Under Construction',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Oasis Meadows',
      location: 'Sarjapur Road, Bengaluru',
      price: '₹95 Lakhs*',
      config: '2 & 3 BHK',
      status: 'Under Construction',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  
  const handleApplyFilters = () => {
    setActiveFilter(tempFilter);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProperties = properties.filter(p => {
    const matchType = activeFilter === 'All' || p.type === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Discover Properties</h1>
          <p className="text-gray-300">Find your perfect home or commercial space</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <Filter size={20} className="text-primary" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>
              
              <div className="space-y-6">
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Project or location..." 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
                  </div>
                </div>

                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <div className="space-y-2">
                    {['All', 'Residential', 'Villa', 'Commercial'].map(type => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="radio" 
                          name="propertyType"
                          checked={tempFilter === type}
                          onChange={() => setTempFilter(type)}
                          className="text-primary focus:ring-primary"
                        />
                        <span className={tempFilter === type ? 'text-primary font-medium' : 'text-gray-600'}>
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
                  <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary">
                    <option>Any Budget</option>
                    <option>Under ₹1 Cr</option>
                    <option>₹1 Cr - ₹3 Cr</option>
                    <option>Above ₹3 Cr</option>
                  </select>
                </div>
                
                <button 
                  onClick={handleApplyFilters}
                  className="w-full bg-primary text-white py-2 rounded font-bold hover:bg-primary/90 transition"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-xl font-bold text-text">Showing {filteredProperties.length} Properties</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="border border-gray-300 rounded p-1 text-sm focus:outline-none">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-surface rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={property.image} 
                      alt={property.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
                      {property.status}
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-1">{property.name}</h3>
                    <p className="flex items-center text-sm text-muted mb-4">
                      <MapPin size={14} className="mr-1" /> {property.location}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-border mt-auto">
                      <div>
                        <p className="text-muted text-xs uppercase tracking-wider">Starting Price</p>
                        <p className="font-bold text-text">{property.price}</p>
                      </div>
                      <div>
                        <p className="text-muted text-xs uppercase tracking-wider">Configuration</p>
                        <p className="font-medium text-text">{property.config}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <Link to="/contact" className="flex-1 text-center bg-white border border-primary text-primary font-medium py-2 rounded hover:bg-blue-50 transition-colors">
                          Enquire
                        </Link>
                        <Link to={`/properties/${property.id}`} className="flex-1 text-center bg-primary text-white font-medium py-2 rounded hover:bg-primary/90 transition-colors">
                          View Details
                        </Link>
                      </div>
                      <button 
                        onClick={() => addToCompare({
                          ...property,
                          area: '1850 - 2450 sq.ft', // Default mock
                          possession: property.status === 'New Launch' ? 'Dec 2028' : 'Ready',
                          amenities: ['Pool', 'Gym', 'Clubhouse']
                        })}
                        className="w-full text-center bg-gray-100 text-gray-700 font-medium py-2 rounded hover:bg-gray-200 transition-colors text-sm flex justify-center items-center"
                      >
                        + Add to Compare
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProperties.length === 0 && (
              <div className="bg-white p-12 text-center rounded-xl border border-border">
                <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setTempFilter('All');
                    setActiveFilter('All');
                    setSearchQuery('');
                  }} 
                  className="mt-4 text-primary font-medium hover:underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default PropertyListingPage;
