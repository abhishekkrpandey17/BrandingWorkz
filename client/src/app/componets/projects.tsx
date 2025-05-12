const projects = [
    {
      title: "E-Commerce Store",
      desc: "Developed a scalable storefront for an Indian fashion brand.",
    },
    {
      title: "EdTech CRM",
      desc: "Custom CRM for student tracking and class scheduling.",
    },
    {
      title: "Branding for NGO",
      desc: "Complete branding and site redesign for a social nonprofit.",
    },
  ];
  
  const Projects = () => {
    return (
      <section id="projects" className="bg-[#F4F4F9] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
            A few of our recent works helping businesses scale digitally.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{proj.title}</h3>
                <p className="text-gray-600">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Projects;
  