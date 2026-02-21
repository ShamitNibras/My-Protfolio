import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Experience from '../Components/Experience'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'
/*
import Education from '../Components/Education'


import ResearchPaper from '../Components/ResearchPaper'
*/

const Home = () => {
  return (
    <div>
      <Hero />
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  )
}

export default Home