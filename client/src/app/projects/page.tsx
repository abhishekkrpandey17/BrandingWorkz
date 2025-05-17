"use client";
import React from 'react'
import Navbar from '../componets/navbar'
import Footer from '../componets/footer'
import ProjectsHero from '../componets/projecthero'
import Projects from '../componets/projects'
import QuoteModal from '../componets/getaquote'

const Page = () => {
  const [showQuoteModal, setShowQuoteModal] = React.useState(false);
  return (
    <>
    <header>
        <Navbar onQuoteClick={() => setShowQuoteModal(true)} />
        <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      </header>
    <main className="mt-15">
    <ProjectsHero/>
    </main>
    <Projects/>

    <Footer/>
    </>
  )
}

export default Page