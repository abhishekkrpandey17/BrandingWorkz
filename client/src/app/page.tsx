import About from "./componets/about";
import ContactCTA from "./componets/contact";
import Footer from "./componets/footer";
import Hero from "./componets/hero";
import Navbar from "./componets/navbar";
import Projects from "./componets/projects";
import Services from "./componets/service";
import Stats from "./componets/states";
import Testimonials from "./componets/testimonial";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mt-15">{children}
        <Hero/>
      </main>
      <About/>
      <Services/>
      <Stats/>
      <Projects/>
      <Testimonials/>
      <ContactCTA/>
      <Footer/>
    </>
  );
}
