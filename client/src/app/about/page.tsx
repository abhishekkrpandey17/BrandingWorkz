import React from 'react'
import Navbar from '../componets/navbar'
import About from '../componets/about'
import AboutHero from '../componets/abouthero'
import TeamPage from '../componets/team'
import Footer from '../componets/footer'

const page = () => {
  return (
    <>
    <Navbar/>
    <main className="mt-15">
    <AboutHero/>
    </main>
    <About/>

    <TeamPage/>

    <Footer/>
    </>
  )
}

export default page