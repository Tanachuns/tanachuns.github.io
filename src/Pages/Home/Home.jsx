import React from 'react'
import Stats from './Stats'
import Hero from './Hero'
import About from './About'

export default function Home() {
  return (
    <div className="grid gap-4">
      {/* <Header /> */}
      <Hero />
      <About />
      <Stats />
    </div>
  )
}
