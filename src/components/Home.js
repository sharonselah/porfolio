import React from 'react'


import Header from './Header'
import Main from './Main'
import About from './About'
import Projects from './Projects'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}
