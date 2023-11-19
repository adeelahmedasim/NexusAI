import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

export default function Possibility() {
  return (
    <section className='nexusAI__possibility section__padding' id='possibility'>
      <div className='nexusAI__possibility-image'>
        <img src={possibilityImage} alt="Possibility" />
      </div>
      <article className='nexusAI__possibility-content'>
    
        <h1 className='gradient__text'>The Possibilities Are Beyond Your Imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <h4>Request Early Access to Get Started</h4>
      </article>
    </section>
  )
}
