"use client";

import React from "react";
import About from "./componets/about";
import ContactForm from "./componets/contact";
import ContactCTA from "./componets/cta";
import FAQ from "./componets/faq";
import FloatingCTA from "./componets/floatingcta";
import Footer from "./componets/footer";
import QuoteModal from "./componets/getaquote";
import Hero from "./componets/hero";
import Location from "./componets/location";
import Navbar from "./componets/navbar";
import Process from "./componets/proces";
import Projects from "./componets/projects";
import Services from "./componets/service";
import Stats from "./componets/states";


export default function Layout({ children }: { children: React.ReactNode }) {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  return (
    <>
      <header>
        <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
        <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      </header>
      <main className="mt-15">{children}
        <Hero/>
      </main>
      <About/>
      <Services/>
      <Stats/>
      <Projects/>
      <Process/>


      <ContactCTA onQuoteClick={() => setShowQuoteModal(true)} />

      
      <ContactForm/>
      <FAQ/>
      <Location/>
      <FloatingCTA/>
      <Footer/>
    </>
  );
}
