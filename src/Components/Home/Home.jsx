import React from 'react'
import Hero from './Hero/Hero.jsx'
import Features from './Features/Features.jsx'
import Solution from './Solutions/Solution.jsx'
import Outcomes from './Outcomes/Outcomes.jsx'
import Proof from './Proof/Proof.jsx'
import Call from './Call/Call.jsx'


export const Home = () => {
  return (
    <div>
      <section id='Hero'> <Hero /> </section>
      <section id='Features'> <Features /> </section>
      <section id='Solution'> <Solution /> </section>
      <section id='Outcomes'> <Outcomes /> </section>
      <section id='Proof'> <Proof /> </section>
      <section id='Call'> <Call /> </section>
    </div>
  )
}

export default Home;