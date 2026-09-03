import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

const BlogDetailPage = () => {
  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft size={16} className="mr-1" /> Back to Blog
          </Link>
          <div className="max-w-3xl">
            <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded mb-4 inline-block">Investment</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Top 5 Emerging Real Estate Markets in Bengaluru</h1>
            <div className="flex items-center text-sm text-gray-300 gap-6">
              <span className="flex items-center"><User size={16} className="mr-2" /> Ravi Kumar</span>
              <span className="flex items-center"><Calendar size={16} className="mr-2" /> Aug 15, 2026</span>
              <span className="flex items-center"><Share2 size={16} className="mr-2" /> 5 Min Read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Real Estate Market" 
            className="w-full h-auto rounded-xl mb-10 object-cover max-h-[500px]"
          />

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl text-gray-600 mb-8 font-medium">
              Bengaluru's real estate market continues to defy expectations. With IT corridors expanding and infrastructure projects like the Metro getting completed, new micro-markets are emerging as the best investment spots.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Whitefield Extension</h2>
            <p className="mb-6">
              Once considered the outskirts, Whitefield has now expanded further. The upcoming metro purple line extension has drastically improved connectivity. Properties here are seeing an annual appreciation of 8-10%.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Sarjapur Road</h2>
            <p className="mb-6">
              Sarjapur Road remains the favorite for IT professionals due to its proximity to major tech parks. The planned Peripheral Ring Road (PRR) is expected to solve the current traffic bottlenecks, making it a goldmine for long-term investors.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Devanahalli</h2>
            <p className="mb-6">
              Driven by the proximity to the Kempegowda International Airport and the upcoming Aerospace Park, Devanahalli is transforming into a commercial and residential hub. Land plots and luxury villas are in high demand here.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 my-8">
              <h3 className="font-bold text-lg text-primary mb-2">Expert Tip</h3>
              <p className="text-sm">When investing in emerging markets, look for properties by Grade-A developers to ensure timely delivery and superior build quality, which significantly impacts rental yields.</p>
            </div>

            <p className="mb-6">
              Investing in the right location at the right time is crucial. If you're looking for premium properties in these emerging corridors, ASPL Tech Solutions offers a range of residential and commercial spaces tailored to your needs.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Share this article</h3>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-blue-600">f</button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-blue-400">t</button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition text-blue-800">in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
