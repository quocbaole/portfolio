import React from 'react'
import Advantage from '../components/Advantage'
import Contact from '../components/Contact'
import EduAndEx from '../components/EduAndEx'
import Overall from '../components/Overall'
import Projects from '../components/Projects'
import Quotes from '../components/Quotes'

const Home = () => {
  return (
    <>
      <Overall />

      <Advantage />

      <EduAndEx />
      <Projects />
      <Quotes />
      <Contact />
    </>
  )
}

export default Home
