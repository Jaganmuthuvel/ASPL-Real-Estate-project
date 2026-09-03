import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';

const BrochureRequestPage = () => {
  const [searchParams] = useSearchParams();
  const projectName = searchParams.get('project') || 'Premium Project';
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-lg">
        <Link to="/properties" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft size={16} className="mr-1" /> Back to Properties
        </Link>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
          {isSubmitted ? (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Your brochure is ready.</h2>
              <p className="text-gray-500 mb-8">We have also sent a copy to your email address.</p>
              <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition shadow-sm">
                Download PDF Now
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Request Brochure</h2>
              <p className="text-gray-500 mb-8">Get the complete floor plans, pricing details, and amenities list for <strong className="text-primary">{projectName}</strong>.</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +91
                    </span>
                    <input 
                      required 
                      type="tel" 
                      maxLength={10}
                      pattern="[0-9]{10}"
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, '');
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="10 digit mobile number" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interested Project</label>
                  <input type="text" readOnly value={projectName} className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 focus:outline-none" />
                </div>
                
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition shadow-sm mt-4">
                  Get Brochure & Pricing
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrochureRequestPage;
