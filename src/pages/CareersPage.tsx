import { Briefcase, Users, Zap, Award } from 'lucide-react';

const CareersPage = () => {
  const openPositions = [
    { id: 1, title: 'Senior Sales Manager', department: 'Sales & Marketing', experience: '5-8 Years', location: 'Bengaluru' },
    { id: 2, title: 'Civil Engineer', department: 'Engineering', experience: '3-5 Years', location: 'Site Locations' },
    { id: 3, title: 'Customer Success Executive', department: 'Customer Relations', experience: '1-3 Years', location: 'Bengaluru' }
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Build Your Career With Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">Join a team of passionate professionals dedicated to redefining the real estate landscape.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-10">Why ASPL Tech Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-border">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold mb-2">Great Culture</h3>
              <p className="text-sm text-gray-500">Collaborative and inclusive work environment.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-border">
              <div className="w-12 h-12 bg-green-50 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h3 className="font-bold mb-2">Growth</h3>
              <p className="text-sm text-gray-500">Continuous learning and fast-tracked career growth.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-border">
              <div className="w-12 h-12 bg-orange-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold mb-2">Rewards</h3>
              <p className="text-sm text-gray-500">Competitive salary and performance bonuses.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center border border-border">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={24} />
              </div>
              <h3 className="font-bold mb-2">Impact</h3>
              <p className="text-sm text-gray-500">Work on landmark projects that shape the city.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-border flex flex-col md:flex-row justify-between items-center hover:shadow-md transition">
                <div className="mb-4 md:mb-0 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                  <div className="text-sm text-gray-500 mt-1 flex flex-wrap justify-center md:justify-start gap-4">
                    <span>{job.department}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{job.experience}</span>
                    <span className="hidden md:inline">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <button className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-primary/90 transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
