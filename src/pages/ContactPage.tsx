import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300">We're here to help you find your dream property.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Whether you're looking for a new home, commercial space, or have a general inquiry, our team is ready to assist you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Corporate Office</h3>
                  <p className="text-gray-600">305, 1st floor, Parappana Agrahara Main Road,<br />Sai Sree Layout, Electronic City,<br />Bengaluru, Karnataka - 560 100</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone</h3>
                  <p className="text-gray-600">+91 98434 06360</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@aspltech.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:30 AM to 6:30 PM<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="bg-success/10 border border-success text-success p-6 rounded-lg text-center">
                  <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                  <p>Your enquiry has been submitted successfully. Our property advisor will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input type="text" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        maxLength={10}
                        pattern="[0-9]{10}"
                        onInput={(e) => {
                          const target = e.target as HTMLInputElement;
                          target.value = target.value.replace(/[^0-9]/g, '');
                        }}
                        placeholder="10 digit mobile number"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interested Project</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary">
                      <option value="">Select a Project</option>
                      <option value="azure-heights">Azure Heights</option>
                      <option value="serene-villas">Serene Villas</option>
                      <option value="apex-tech">Apex Tech Park</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary"></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary/90 transition-colors w-full md:w-auto"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
