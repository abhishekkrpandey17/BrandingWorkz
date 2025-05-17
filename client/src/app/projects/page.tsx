import React from 'react'
import Navbar from '../componets/navbar'
import Footer from '../componets/footer'
import ProjectsHero from '../componets/projecthero'
import Projects from '../componets/projects'

const page = () => {
  return (
    <>
    <Navbar/>
    <main className="mt-15">
    <ProjectsHero/>
    </main>
    <Projects/>

    <Footer/>
    </>
  )
}

export default page