import React from 'react'
import Navbar from '../componets/navbar'
import ServicesHero from '../componets/serviceshero'
import Footer from '../componets/footer'
import Services from '../componets/service'

const page = () => {
  return (
    <>
    <Navbar/>
    <main className="mt-15">
    <ServicesHero/>
    </main>
    <Services/>
    <Footer/>

    </>
  )
}

export default page