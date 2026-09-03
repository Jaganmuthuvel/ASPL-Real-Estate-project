import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Calendar, Clock, MapPin, User, CheckCircle } from 'lucide-react';

const ScheduleVisitPage = () => {
  const [step, setStep] = useState(1);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [contactDetails, setContactDetails] = useState({ name: '', phone: '', email: '' });

  const projects = [
    { id: '1', name: 'Azure Heights', location: 'Whitefield' },
    { id: '2', name: 'Serene Villas', location: 'Electronic City' },
    { id: '3', name: 'Apex Tech Park', location: 'ORR' }
  ];

  const timeSlots = ['10:00 AM', '11:30 AM', '02:00 PM', '04:00 PM', '05:30 PM'];
  
  
  const dates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      date: d.toISOString().split('T')[0],
      display: d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
    };
  });

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <Link to={step === 1 ? "/properties/1" : "#"} onClick={step > 1 ? (e) => { e.preventDefault(); prevStep(); } : undefined} className="inline-flex items-center text-primary hover:underline mb-8 font-medium">
          <ArrowLeft size={16} className="mr-1" /> {step === 1 ? 'Back to Project' : 'Back'}
        </Link>

        <div className="bg-white rounded-xl shadow-lg border border-border overflow-hidden">
          
          <div className="bg-primary p-6 text-white text-center">
            <h1 className="text-2xl font-bold mb-2">Schedule a Site Visit</h1>
            <p className="text-primary-50 text-sm opacity-90">Experience the property firsthand with our expert advisors</p>
          </div>

          
          <div className="bg-gray-50 px-6 py-4 border-b border-border flex justify-between">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex flex-col items-center flex-1 relative">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 font-bold text-sm ${
                  step > i ? 'bg-success text-white' : 
                  step === i ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > i ? <Check size={16} /> : i}
                </div>
                {i < 5 && (
                  <div className={`absolute top-4 left-1/2 w-full h-1 -z-0 ${
                    step > i ? 'bg-success' : 'bg-gray-200'
                  }`}></div>
                )}
                <span className="text-xs mt-2 text-gray-500 hidden sm:block">
                  {i === 1 && 'Project'}
                  {i === 2 && 'Date'}
                  {i === 3 && 'Time'}
                  {i === 4 && 'Details'}
                  {i === 5 && 'Confirm'}
                </span>
              </div>
            ))}
          </div>

          
          <div className="p-6 md:p-8 min-h-[300px]">
            
            
            {step === 1 && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold mb-6 flex items-center"><MapPin className="mr-2 text-primary" /> Select Project</h2>
                <div className="space-y-3">
                  {projects.map(p => (
                    <label key={p.id} className={`block p-4 border rounded-lg cursor-pointer transition ${
                      selectedProject === p.id ? 'border-primary bg-blue-50/50 ring-1 ring-primary' : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <div className="flex items-center">
                        <input type="radio" name="project" value={p.id} checked={selectedProject === p.id} onChange={(e) => setSelectedProject(e.target.value)} className="w-5 h-5 text-primary focus:ring-primary mr-4" />
                        <div>
                          <p className="font-bold text-lg">{p.name}</p>
                          <p className="text-gray-500 text-sm">{p.location}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                <button 
                  onClick={nextStep} 
                  disabled={!selectedProject}
                  className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition"
                >
                  Continue
                </button>
              </div>
            )}

            
            {step === 2 && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold mb-6 flex items-center"><Calendar className="mr-2 text-primary" /> Select Date</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {dates.map((d, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedDate(d.date)}
                      className={`py-3 px-2 border rounded-lg text-center transition ${
                        selectedDate === d.date ? 'border-primary bg-primary text-white' : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <span className="block font-medium">{d.display.split(',')[0]}</span>
                      <span className="block text-sm">{d.display.split(',')[1]}</span>
                    </button>
                  ))}
                </div>
                <button 
                  onClick={nextStep} 
                  disabled={!selectedDate}
                  className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold mb-6 flex items-center"><Clock className="mr-2 text-primary" /> Select Time Slot</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {timeSlots.map((time, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 border rounded-lg text-center transition font-medium ${
                        selectedTime === time ? 'border-primary bg-primary text-white' : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={nextStep} 
                  disabled={!selectedTime}
                  className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition"
                >
                  Continue
                </button>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fadeIn">
                <h2 className="text-xl font-bold mb-6 flex items-center"><User className="mr-2 text-primary" /> Your Details</h2>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input 
                      type="text" required 
                      value={contactDetails.name} onChange={e => setContactDetails({...contactDetails, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
                    <input 
                      type="tel" required 
                      maxLength={10}
                      pattern="[0-9]{10}"
                      value={contactDetails.phone} 
                      onChange={e => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setContactDetails({...contactDetails, phone: val});
                      }}
                      placeholder="10 digit mobile number"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      value={contactDetails.email} onChange={e => setContactDetails({...contactDetails, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="mt-8 w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition"
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            )}

            {step === 5 && (
              <div className="animate-fadeIn text-center py-8">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-bold mb-4">Visit Scheduled!</h2>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Your site visit has been scheduled successfully. Our property advisor will call you shortly to confirm the details.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg inline-block text-left mb-8 border border-gray-200">
                  <p className="mb-2"><span className="text-gray-500 w-20 inline-block">Project:</span> <span className="font-bold">{projects.find(p => p.id === selectedProject)?.name}</span></p>
                  <p className="mb-2"><span className="text-gray-500 w-20 inline-block">Date:</span> <span className="font-bold">{new Date(selectedDate).toLocaleDateString()}</span></p>
                  <p><span className="text-gray-500 w-20 inline-block">Time:</span> <span className="font-bold">{selectedTime}</span></p>
                </div>
                <div>
                  <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded font-bold hover:bg-primary/90 transition">
                    Back to Home
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleVisitPage;
