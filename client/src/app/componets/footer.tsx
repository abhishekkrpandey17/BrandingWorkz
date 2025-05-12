import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E2F] text-white py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">BrandingWorkz</h3>
          <p className="text-sm text-gray-400">
            Digital marketing, branding, and custom software solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#services">Services</Link></li>
            <li><Link href="#projects">Projects</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-gray-300">
            Kolkata, India<br />
            +91 98765 43210<br />
            hello@brandingworkz.in
          </p>
        </div>
      </div>

      <p className="text-center mt-10 text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BrandingWorkz. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
