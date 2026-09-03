import { Award, Users, Building, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About ASPL Real Estate</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building premium lifestyles and redefining the skyline with trust and innovation.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="w-full md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="ASPL Office" 
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to transform the real estate landscape, ASPL Tech Solutions Private Limited has emerged as one of the most trusted names in premium real estate development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the years, we have delivered iconic residential and commercial projects that stand as a testament to our commitment to quality, timely delivery, and customer satisfaction. Our focus remains heavily on building trust and credibility with every brick we lay.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <p className="text-3xl font-bold text-text">15+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <p className="text-3xl font-bold text-text">50+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</p>
              </div>
              <div className="border-l-4 border-success pl-4">
                <p className="text-3xl font-bold text-text">10k+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Customers</p>
              </div>
              <div className="border-l-4 border-warning pl-4">
                <p className="text-3xl font-bold text-text">20+</p>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Industry Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the most admired and trusted real estate developer, known for creating spaces that enhance the quality of life and deliver exceptional value to our stakeholders.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To consistently deliver premium, innovative, and sustainable real estate projects while maintaining the highest standards of transparency, ethics, and customer service.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our everyday actions and decisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <ShieldCheck size={40} className="mx-auto text-primary mb-4" />
            <h4 className="font-bold text-lg mb-2">Trust</h4>
            <p className="text-sm text-gray-600">Building lasting relationships based on transparency and integrity.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Award size={40} className="mx-auto text-secondary mb-4" />
            <h4 className="font-bold text-lg mb-2">Quality</h4>
            <p className="text-sm text-gray-600">Uncompromising commitment to construction excellence.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Users size={40} className="mx-auto text-success mb-4" />
            <h4 className="font-bold text-lg mb-2">Customer First</h4>
            <p className="text-sm text-gray-600">Putting our customers' needs at the center of everything we do.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Building size={40} className="mx-auto text-warning mb-4" />
            <h4 className="font-bold text-lg mb-2">Innovation</h4>
            <p className="text-sm text-gray-600">Constantly evolving to build smarter and better spaces.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
