const Projects = () => {
  // Sample project data (you can replace this with your own data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Project 2",
      description: "Description for Project 2",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 3,
      title: "Project 3",
      description: "Description for Project 2",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 1,
      title: "Project 4",
      description: "Description for Project 1",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 1,
      title: "Project 5",
      description: "Description for Project 1",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
    {
      id: 1,
      title: "Project 6",
      description: "Description for Project 1",
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-200 to-pink-300 py-12">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-white-500">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
