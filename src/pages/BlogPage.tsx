import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: 'Top 5 Emerging Real Estate Markets in Bengaluru',
      excerpt: 'Discover the next big investment hotspots in India\'s Silicon Valley.',
      author: 'Ravi Kumar',
      date: 'Aug 15, 2026',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Investment'
    },
    {
      id: 2,
      title: 'A Guide to Home Loans and EMI Calculations',
      excerpt: 'Everything you need to know before applying for a home loan.',
      author: 'Priya Sharma',
      date: 'Sep 02, 2026',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Finance'
    },
    {
      id: 3,
      title: 'The Rise of Smart Homes in Luxury Real Estate',
      excerpt: 'How home automation is changing the way we live.',
      author: 'ASPL Team',
      date: 'Sep 03, 2026',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Lifestyle'
    }
  ];

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Insights</h1>
          <p className="text-gray-300">Latest news, investment tips, and real estate guides.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden flex flex-col hover:shadow-md transition">
              <div className="h-48 relative overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded">
                  {blog.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{blog.excerpt}</p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span className="flex items-center mr-4"><User size={14} className="mr-1" /> {blog.author}</span>
                  <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                </div>
                
                <Link to={`/blog/${blog.id}`} className="text-primary font-medium flex items-center hover:underline mt-auto">
                  Read Article <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
