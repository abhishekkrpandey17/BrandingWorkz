const services = [
    {
      title: "Web Development",
      desc: "Custom websites, eCommerce, and CMS using modern stacks.",
    },
    {
      title: "App Development",
      desc: "React Native and Flutter apps tailored to your business needs.",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, SEM, Social Media & Ad campaigns with ROI-driven strategies.",
    },
    {
      title: "Brand Strategy",
      desc: "Identity design, tone, voice and storytelling for your brand.",
    },
    {
      title: "Custom Software",
      desc: "Internal tools, ERPs, CRMs, dashboards, and automation systems.",
    },
    {
      title: "Consulting & Strategy",
      desc: "Get expert guidance to scale or modernize your business digitally.",
    },
  ];
  
  const Services = () => {
    return (
      <section id="services" className="bg-[#F9FAFB] py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We offer a full suite of digital services to help you build, grow, and optimize your brand presence.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  