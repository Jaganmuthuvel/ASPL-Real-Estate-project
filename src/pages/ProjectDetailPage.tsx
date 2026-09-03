import { useState } from 'react';
import { MapPin, CheckCircle, Calculator, Download, PhoneCall, School, Building2, Navigation, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

 
  const [propertyPrice, setPropertyPrice] = useState(12500000);
  const [downPayment, setDownPayment] = useState(2500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(20);

  
  const loanAmount = propertyPrice - downPayment;
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const emi = loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, totalMonths)) / (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Azure Heights" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
          <span className="bg-primary px-3 py-1 text-xs font-bold rounded uppercase tracking-wider mb-3 inline-block">New Launch</span>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Azure Heights</h1>
          <p className="flex items-center text-lg text-gray-200"><MapPin className="mr-2" size={20} /> Whitefield, Bengaluru</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="w-full lg:w-2/3">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-6 rounded-xl shadow-sm border border-border mb-8">
              <div>
                <p className="text-muted text-sm">Starting Price</p>
                <p className="font-bold text-lg text-text">₹1.25 Cr*</p>
              </div>
              <div>
                <p className="text-muted text-sm">Configuration</p>
                <p className="font-bold text-lg text-text">3 & 4 BHK</p>
              </div>
              <div>
                <p className="text-muted text-sm">Possession</p>
                <p className="font-bold text-lg text-text">Dec 2028</p>
              </div>
              <div>
                <p className="text-muted text-sm">Status</p>
                <p className="font-bold text-lg text-text">Under Construction</p>
              </div>
            </div>

            
            <div className="flex overflow-x-auto border-b border-border mb-8 hide-scrollbar">
              {['overview', 'gallery', 'floor-plans', 'amenities', 'specifications', 'location', 'construction', 'emi-calculator'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors border-b-2 ${
                    activeTab === tab 
                      ? 'border-primary text-primary' 
                      : 'border-transparent text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-border mb-8">
              
              {activeTab === 'overview' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Azure Heights offers premium luxury residences designed for those who appreciate the finer things in life. 
                    Situated in the heart of Whitefield, this project combines modern architecture with lush green spaces, 
                    creating an oasis of calm amidst the bustling city.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4 mt-8">Key Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {['Spread across 5 acres', '70% Open Space', 'IGBC Gold Pre-certified', 'Vastu Compliant Homes', 'Smart Home Automation', '3-Tier Security'].map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle size={18} className="text-success mr-2 shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'gallery' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Exterior" className="w-full h-32 md:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition" />
                    <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Interior" className="w-full h-32 md:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition" />
                    <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Amenities" className="w-full h-32 md:h-48 object-cover rounded-lg cursor-pointer hover:opacity-90 transition" />
                  </div>
                </div>
              )}

              
              {activeTab === 'floor-plans' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Floor Plans</h2>
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg p-4 flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-full md:w-1/3 bg-gray-100 h-40 flex items-center justify-center rounded">
                        <span className="text-gray-400 font-medium">3 BHK Blueprint</span>
                      </div>
                      <div className="w-full md:w-2/3">
                        <h3 className="text-xl font-bold mb-2">3 BHK Premium</h3>
                        <p className="text-gray-600 mb-2">Area: <span className="font-semibold text-text">1,850 sq.ft.</span></p>
                        <p className="text-gray-600 mb-4">Price: <span className="font-semibold text-text">₹1.25 Cr*</span></p>
                        <Link to={`/brochure-request?project=Azure Heights`} className="flex-1 text-center bg-white border-2 border-primary text-primary font-bold py-3 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                          <Download className="mr-2" size={20} /> Download Brochure
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              
              {activeTab === 'amenities' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Amenities</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {['Swimming Pool', 'Gymnasium', 'Clubhouse', 'Kids Play Area'].map((amenity, i) => (
                      <div key={i} className="text-center p-4 border border-gray-100 rounded-lg hover:shadow-sm bg-gray-50">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm text-primary">
                          <CheckCircle size={24} />
                        </div>
                        <p className="font-medium text-sm text-gray-800">{amenity}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              
              {activeTab === 'specifications' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Project Specifications</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-3 border-b pb-2">Structure & Flooring</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• RCC framed structure with seismic compliance</li>
                          <li>• Vitrified tiles in living, dining, and bedrooms</li>
                          <li>• Anti-skid ceramic tiles in balconies and bathrooms</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-3 border-b pb-2">Kitchen & Bathrooms</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Granite countertop with stainless steel sink</li>
                          <li>• Provision for water purifier and exhaust fan</li>
                          <li>• Premium CP fittings and sanitary ware (Jaquar/Kohler)</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-3 border-b pb-2">Doors & Windows</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Main Door: Teak wood frame with polished flush shutter</li>
                          <li>• Internal Doors: Hardwood frame with painted flush shutters</li>
                          <li>• UPVC sliding windows with mosquito mesh</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-primary mb-3 border-b pb-2">Electrical & Safety</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Concealed copper wiring with modular switches</li>
                          <li>• 100% DG power backup for common areas</li>
                          <li>• CCTV surveillance and fire safety systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              
              {activeTab === 'location' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Location & Connectivity</h2>
                  <div className="bg-gray-100 w-full h-64 rounded-xl flex items-center justify-center mb-8 relative overflow-hidden">
                    {/* Placeholder for Interactive Map */}
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Map Location" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-3 rounded-full shadow-lg text-primary">
                        <MapPin size={32} />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold flex items-center text-primary mb-3"><School className="mr-2" size={18} /> Education</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between"><span>Global International School</span> <span>2.5 km (5 mins)</span></li>
                        <li className="flex justify-between"><span>Tech Institute of Science</span> <span>4.0 km (10 mins)</span></li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold flex items-center text-primary mb-3"><HeartPulse className="mr-2" size={18} /> Healthcare</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between"><span>City Care Hospital</span> <span>1.5 km (3 mins)</span></li>
                        <li className="flex justify-between"><span>Apollo Clinic</span> <span>3.2 km (8 mins)</span></li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold flex items-center text-primary mb-3"><Building2 className="mr-2" size={18} /> Work / IT Parks</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between"><span>Cyber Tech Park</span> <span>5.0 km (15 mins)</span></li>
                        <li className="flex justify-between"><span>Innovation Hub</span> <span>6.5 km (20 mins)</span></li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold flex items-center text-primary mb-3"><Navigation className="mr-2" size={18} /> Transport</h3>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex justify-between"><span>Upcoming Metro Station</span> <span>0.5 km (Walkable)</span></li>
                        <li className="flex justify-between"><span>International Airport</span> <span>35 km (45 mins)</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              
              {activeTab === 'construction' && (
                <div className="animate-fadeIn">
                  <h2 className="text-2xl font-bold mb-6">Construction Progress</h2>
                  
                  <div className="mb-8">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-text">Overall Completion</span>
                      <span className="font-bold text-primary">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>

                  <div className="relative border-l-2 border-gray-200 ml-3 space-y-8">
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-success rounded-full -left-[9px] top-1"></div>
                      <h3 className="font-bold">Land Development</h3>
                      <p className="text-sm text-gray-500">Completed - Jan 2024</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-success rounded-full -left-[9px] top-1"></div>
                      <h3 className="font-bold">Foundation</h3>
                      <p className="text-sm text-gray-500">Completed - June 2024</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 ring-4 ring-primary/20"></div>
                      <h3 className="font-bold">Structure</h3>
                      <p className="text-sm text-gray-500">In Progress - Expected Dec 2025</p>
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <img src="https://placehold.co/300x200/e2e8f0/475569?text=Site+Work" alt="Construction site" className="rounded-md h-24 w-full object-cover" />
                        <img src="https://placehold.co/300x200/e2e8f0/475569?text=Structure+Built" alt="Construction progress" className="rounded-md h-24 w-full object-cover" />
                      </div>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-1"></div>
                      <h3 className="font-bold text-gray-500">Finishing</h3>
                      <p className="text-sm text-gray-400">Upcoming</p>
                    </div>
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-1"></div>
                      <h3 className="font-bold text-gray-500">Handover</h3>
                      <p className="text-sm text-gray-400">Expected Dec 2028</p>
                    </div>
                  </div>
                </div>
              )}

              
              {activeTab === 'emi-calculator' && (
                <div className="animate-fadeIn">
                  <div className="flex items-center gap-2 mb-6">
                    <Calculator className="text-primary" size={24} />
                    <h2 className="text-2xl font-bold">EMI Calculator</h2>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-6 rounded-xl">
                    <div className="w-full md:w-1/2 space-y-5">
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-700">Property Price</label>
                          <span className="font-bold">{formatCurrency(propertyPrice)}</span>
                        </div>
                        <input type="range" min="5000000" max="50000000" step="100000" value={propertyPrice} onChange={(e) => setPropertyPrice(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-700">Down Payment</label>
                          <span className="font-bold">{formatCurrency(downPayment)}</span>
                        </div>
                        <input type="range" min="1000000" max={propertyPrice * 0.8} step="100000" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-700">Interest Rate (%)</label>
                          <span className="font-bold">{interestRate}%</span>
                        </div>
                        <input type="range" min="6" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary" />
                      </div>

                      <div>
                        <div className="flex justify-between mb-1">
                          <label className="text-sm font-medium text-gray-700">Loan Tenure (Years)</label>
                          <span className="font-bold">{loanTenure} Years</span>
                        </div>
                        <input type="range" min="5" max="30" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-primary" />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm border border-border flex flex-col justify-center">
                      <div className="text-center mb-6">
                        <p className="text-muted mb-1">Your Monthly EMI</p>
                        <p className="text-4xl font-bold text-primary">{formatCurrency(emi)}</p>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-gray-600">Principal Amount</span>
                          <span className="font-medium">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                          <span>Total Amount Payable</span>
                          <span>{formatCurrency(emi * totalMonths)}</span>
                        </div>
                      </div>

                      <button className="w-full bg-secondary text-white py-3 rounded font-bold hover:bg-secondary/90 transition-colors">
                        Check Eligibility
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-border sticky top-24">
              <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
              <p className="text-sm text-gray-600 mb-6">Fill in your details and our property expert will get back to you shortly.</p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name*" required className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary" />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number (10 digits)*" 
                    required 
                    maxLength={10}
                    pattern="[0-9]{10}"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      target.value = target.value.replace(/[^0-9]/g, '');
                    }}
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary" 
                  />
                </div>
                <div>
                  <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-primary" />
                </div>
                
                <div className="flex gap-2">
                  <button type="submit" className="w-full bg-primary text-white py-3 rounded font-bold hover:bg-primary/90 transition-colors">
                    Request Pricing
                  </button>
                </div>
                <div className="pt-2">
                  <Link to={`/schedule-visit`} className="block text-center w-full bg-white border border-secondary text-secondary py-3 rounded font-bold hover:bg-orange-50 transition-colors mb-3">
                    Schedule a Site Visit
                  </Link>
                  <Link to={`/brochure-request?project=Azure Heights`} className="flex items-center justify-center w-full bg-white border border-primary text-primary py-3 rounded font-bold hover:bg-blue-50 transition-colors">
                    <Download className="mr-2" size={20} /> Download Brochure
                  </Link>
                </div>
              </form>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-600">
                <PhoneCall size={18} />
                <span className="font-medium">Or Call: +91 98434 06360</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
