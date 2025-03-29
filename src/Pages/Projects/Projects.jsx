import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfolio-server-delta-three.vercel.app/projects');
        setProjects(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  // Format date for display
  const formatDisplayDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
    });
  };

  // Sort projects by uploadDate and filter only published projects
  const sortedProjects = [...projects]
    .filter(project => project.viewMode === "Published")
    .sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      if (sortBy === 'oldest') return new Date(a.lastUpdated) - new Date(b.lastUpdated);
      return 0;
    });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Najatul islam | Projects</title>
        <meta
          name="description"
          content="Welcome to the official website of Najatul Islam. Explore my portfolio, projects, and blogs."
        />
      </Helmet>
      
      {/* Page Header */}
      <header className="pb-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-blue-light">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of my latest work across different categories
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Sort Controls */}
        <div className="flex flex-col sm:flex-row justify-end items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* Projects Grid */}
        {sortedProjects.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            No published projects found.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <div 
                key={project._id}
                className="relative group overflow-hidden rounded-lg shadow-up"
              >
                {/* Image with zoom effect */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.imageURL}
                    alt={project.title}
                    className="w-full  object-center transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Centered overlay content */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-2xl font-bold text-white capitalize translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs rounded-full backdrop-blur-sm">
                      {project.viewMode.toUpperCase()}
                    </span>
                    <span className="ml-2 inline-block px-3 py-1 bg-white/10 text-white text-xs rounded-full backdrop-blur-sm">
                      {formatDisplayDate(project.uploadDate)}
                    </span>
                  </div>
                  
                  <div className="flex gap-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                    {project.gitLink && (
                      <a
                        href={project.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1 16.947v1.053h-1v-1.053c-3.946-.477-7-3.458-7-7.447 0-.553.447-1 1-1s1 .447 1 1c0 3.038 2.477 5.5 5.5 5.5.553 0 1 .447 1 1s-.447 1-1 1zm5.5-5.5c0 .553-.447 1-1 1s-1-.447-1-1c0-3.038-2.477-5.5-5.5-5.5-.553 0-1-.447-1-1s.447-1 1-1c3.042 0 5.5 2.458 5.5 5.5z"/>
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;