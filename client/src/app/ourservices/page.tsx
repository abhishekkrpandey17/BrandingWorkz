"use client";
import React from 'react'
import Navbar from '../componets/navbar'
import ServicesHero from '../componets/serviceshero'
import Footer from '../componets/footer'
import Services from '../componets/service'
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
        <ServicesHero/>
      </main>
      <Services/>
      <Footer/>
    </>
  )
}

export default Page