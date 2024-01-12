import React from 'react'
import Stats from './Stats'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Articles from './Articles'

export default function Home() {
  return (
    <div className="grid gap-4">
      {/* <Header /> */}
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Articles />
    </div>
  )
}
