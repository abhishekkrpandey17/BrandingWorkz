"use client"
import React from 'react'
import Navbar from '../componets/navbar'
import SocialLinksPage from '../componets/sociallinks'
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
    <SocialLinksPage/>
    </main>
    <Footer/>
    </>
  )
}

export default Page