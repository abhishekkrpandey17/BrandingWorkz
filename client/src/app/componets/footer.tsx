import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2F] text-white px-6 md:px-20 pt-16 pb-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="text-[#4F46E5]">Branding</span>Workz
          </h2>
          <p className="text-sm text-gray-400">
            Elevating brands with design, development, marketing and strategy.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#about">About</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
          <p className="text-sm text-gray-300">
            Kolkata, India<br />
            +91 98765 43210<br />
            hello@brandingworkz.in
          </p>
        </div>

        {/* Newsletter CTA */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">Get news, updates and special offers straight to your inbox.</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md bg-white text-gray-800 text-sm outline-none w-full"
            />
            <button className="bg-[#4F46E5] text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} BrandingWorkz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
