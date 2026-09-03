import { Link } from 'react-router-dom';
import { ArrowLeft, Check, X, MapPin } from 'lucide-react';
import { useCompare } from '../context/CompareContext';

const ComparePage = () => {
  const { compareList: selectedProjects, removeFromCompare } = useCompare();

  const allAmenities = ['Pool', 'Private Pool', 'Gym', 'Clubhouse', 'Kids Area', 'Garden'];

  
  const emptySlots = Array.from({ length: Math.max(0, 3 - selectedProjects.length) });

  return (
    <div className="bg-background min-h-screen pb-16">
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <Link to="/properties" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft size={16} className="mr-1" /> Back to Properties
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Compare Projects</h1>
              <p className="text-gray-300 mt-2">Side-by-side comparison of your shortlisted properties.</p>
            </div>
            {selectedProjects.length < 3 && (
              <Link to="/properties" className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 transition text-center whitespace-nowrap">
                + Add Project to Compare
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 overflow-x-auto">
        {selectedProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-border">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">No projects to compare</h2>
            <p className="text-gray-500 mb-6">Add projects from the property listing page to compare them here.</p>
            <Link to="/properties" className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
              Browse Properties
            </Link>
          </div>
        ) : (
          <div className="min-w-[900px]">
            <div className="grid grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col justify-end pb-4">
                <h2 className="text-xl font-bold text-gray-700">Project Attributes</h2>
              </div>
              
              {selectedProjects.map(project => (
                <div key={project.id} className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
                  <div className="relative h-40">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                    <button onClick={() => removeFromCompare(project.id)} className="absolute top-2 right-2 bg-white/80 p-1 rounded-full text-gray-600 hover:text-error transition">
                      <X size={18} />
                    </button>
                    <div className="absolute bottom-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded font-bold">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-4 text-center border-b border-border">
                    <h3 className="font-bold text-lg truncate">{project.name}</h3>
                    <Link to={`/properties/${project.id}`} className="text-primary text-sm font-medium hover:underline">View Details</Link>
                  </div>
                </div>
              ))}
              
              {emptySlots.map((_, index) => (
                <div key={`empty-header-${index}`} className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mb-3 text-2xl font-light">+</div>
                  <h3 className="font-bold text-gray-600 mb-2">Add Project</h3>
                  <p className="text-sm text-gray-500 mb-4">Select another project</p>
                  <Link to="/properties" className="bg-white border border-gray-300 px-4 py-2 rounded shadow-sm text-sm font-medium hover:bg-gray-50">Browse</Link>
                </div>
              ))}
            </div>

            
            <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
              
              
              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r border-gray-100 flex items-center">Location</div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100 flex items-center truncate">
                    <MapPin size={16} className="text-gray-400 mr-2 shrink-0" /> <span className="truncate">{project.location}</span>
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-loc-${index}`} className="p-4 bg-gray-50/50"></div>)}
              </div>

             
              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r border-gray-100">Starting Price</div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100 font-bold text-primary">
                    {project.price}
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-price-${index}`} className="p-4 bg-gray-50/50"></div>)}
              </div>

              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r border-gray-100">Configuration</div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100">
                    {project.config}
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-config-${index}`} className="p-4 bg-gray-50/50"></div>)}
              </div>

              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r border-gray-100">Area</div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100">
                    {project.area}
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-area-${index}`} className="p-4 bg-gray-50/50"></div>)}
              </div>

              <div className="grid grid-cols-4 border-b border-gray-100">
                <div className="p-4 bg-gray-50 font-medium text-gray-700 border-r border-gray-100">Possession</div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100">
                    {project.possession}
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-poss-${index}`} className="p-4 bg-gray-50/50"></div>)}
              </div>

              <div className="border-b border-gray-200">
                <div className="p-3 bg-gray-100 font-bold text-gray-800 uppercase tracking-wider text-sm">Amenities</div>
              </div>
              
              {allAmenities.map((amenity, idx) => (
                <div key={idx} className="grid grid-cols-4 border-b border-gray-100">
                  <div className="p-4 bg-gray-50 text-gray-700 border-r border-gray-100">{amenity}</div>
                  {selectedProjects.map(project => (
                    <div key={project.id} className="p-4 border-r border-gray-100 text-center">
                      {project.amenities?.includes(amenity) ? (
                        <Check size={20} className="text-success mx-auto" />
                      ) : (
                        <X size={20} className="text-gray-300 mx-auto" />
                      )}
                    </div>
                  ))}
                  {emptySlots.map((_, index) => <div key={`empty-amenity-${idx}-${index}`} className="p-4 bg-gray-50/50 border-r border-gray-100"></div>)}
                </div>
              ))}

              <div className="grid grid-cols-4">
                <div className="p-4 bg-gray-50 border-r border-gray-100"></div>
                {selectedProjects.map(project => (
                  <div key={project.id} className="p-4 border-r border-gray-100">
                    <Link to="/contact" className="block text-center w-full bg-primary text-white py-2 rounded font-medium hover:bg-primary/90 transition">
                      Enquire Now
                    </Link>
                  </div>
                ))}
                {emptySlots.map((_, index) => <div key={`empty-action-${index}`} className="p-4 bg-gray-50/50 border-r border-gray-100"></div>)}
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComparePage;
