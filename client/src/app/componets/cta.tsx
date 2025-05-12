import Link from "next/link";

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-indigo-600 py-20 px-6 md:px-20 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Something Amazing</h2>
      <p className="text-lg mb-6">
        Need a website, app, or help with branding? Talk to our experts today.
      </p>
      <Link
        href="#quote"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition"
      >
        Get a Free Quote
      </Link>
    </section>
  );
};

export default ContactCTA;
