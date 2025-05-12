const testimonials = [
    {
      name: "Rohit Mehta",
      role: "CEO, TechWiz",
      feedback: "BrandingWorkz transformed our digital presence with a stellar website and branding. Highly recommended!",
    },
    {
      name: "Anjali Rao",
      role: "Founder, Skincare Co.",
      feedback: "Their team was creative, strategic, and delivered results in both performance and design.",
    },
  ];
  
  const Testimonials = () => {
    return (
      <section id="testimonials" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">What Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
                <p className="text-gray-700 italic">“{t.feedback}”</p>
                <p className="mt-4 font-semibold text-indigo-600">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  