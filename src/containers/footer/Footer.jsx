import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

export default function Footer() {
  return (
    <footer className='nexusAI__footer section__padding' >
      <title className='nexusAI__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </title>

      <div className='nexusAI__footer-button'>
        <p>Request Early Access</p>
      </div>

      <section className='nexusAI__footer-links'>
          <div className='nexusAI__footer-links_logo'>
            <img src={gpt3Logo} alt="logo" />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className='nexusAI__footer-links_div'>
              <h4>Links</h4>
              <p>Overons</p>
              <p>Social Media</p>
              <p>Counters</p>
              <p>Contact</p>
          </div>

          <div className='nexusAI__footer-links_div'>
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Contracts</p>
          </div>

          <div className='nexusAI__footer-links_div'>
              <h4>Get In Touch</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@nexusai.net</p>
          </div>
      </section>
      <div className='nexusAI__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </footer>
  )
}
