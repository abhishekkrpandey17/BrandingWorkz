const Location = () => {
    return (
      <section id="location" className="bg-white py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visit Us</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            We&apos;d love to meet you. Find our office at the heart of Greater Noida.
          </p>
  
          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-md max-w-full w-full h-[400px] mx-auto mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112198.84223976444!2d77.4212981!3d28.4743878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71e4f4ebea1%3A0x87e3fcacbb2bdf5f!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1715707740005"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
  
          <p className="text-gray-700 font-medium">
            BrandingWorkz HQ, Greater Noida, Uttar Pradesh
          </p>
        </div>
      </section>
    );
  };
  
  export default Location;
  