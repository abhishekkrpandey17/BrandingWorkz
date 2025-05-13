import About from "./componets/about";
import ContactForm from "./componets/contact";
import ContactCTA from "./componets/cta";
import FAQ from "./componets/faq";
import FloatingCTA from "./componets/floatingcta";
import Footer from "./componets/footer";
import Hero from "./componets/hero";
import Location from "./componets/location";
import Navbar from "./componets/navbar";
import Process from "./componets/proces";
import Projects from "./componets/projects";
import Services from "./componets/service";
import Stats from "./componets/states";
import Testimonials from "./componets/testimonial";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mt-16">{children}
        <Hero/>
      </main>
      <About/>
      <Services/>
      <Stats/>
      <Projects/>
      <Process/>
      <Testimonials/>
      <ContactCTA/>
      <ContactForm/>
      <FAQ/>
      <Location/>
      <FloatingCTA/>
      <Footer/>
    </>
  );
}
