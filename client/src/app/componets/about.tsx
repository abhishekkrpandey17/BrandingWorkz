const About = () => {
    return (
      <section id="about" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            BrandingWorkz is a creative tech agency specializing in brand building,
            digital marketing, and custom software development. We empower startups,
            businesses, and enterprises with scalable web, app, and ad solutions.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To deliver smart, effective digital solutions that help businesses grow in a
                connected world.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Why Choose Us</h3>
              <p className="text-gray-600">
                Expertise across design, development, and marketing. 100+ successful projects. Trusted by Indian startups and global brands.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  