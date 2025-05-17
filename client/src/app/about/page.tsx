"use client";
import React from 'react'
import Navbar from '../componets/navbar'
import About from '../componets/about'
import AboutHero from '../componets/abouthero'
import TeamPage from '../componets/team'
import Footer from '../componets/footer'
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
    <AboutHero/>
    </main>
    <About/>

    <TeamPage/>

    <Footer/>
    </>
  )
}

export default Page