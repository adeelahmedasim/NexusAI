import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import Blog01 from '../../assets/blog01.jpg'
import Blog02 from '../../assets/blog02.jpg'
import Blog03 from '../../assets/blog03.jpg'
import Blog04 from '../../assets/blog04.jpg'
import Blog05 from '../../assets/blog05.jpg'


export default function Blog() {
  return (
    <section className='nexusAI__blog section__padding' id='blog'>
      <div className='nexusAI__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, </h1>
        <h1 className='gradient__text'>We are blogging about it. </h1>
      </div>
      <div className='nexusAI__blog-container'>
        <div className='nexusAI__blog-container__groupA'>
          <Article image={Blog01}  date='Sep 26, 2021'  title='NexusAI and the Evolution of Artificial Intelligence: Unveiling the Future Landscape'/>
        </div>
        <article className='nexusAI__blog-container__groupB'>
          <Article  image={Blog02} date='Oct 21, 2022'  title='OpenAIs Trailblazing Path: How NexusAI is Shaping the Future of AI'/>
          <Article image={Blog03} date='Jan 30, 2023'  title='Charting the Course of NexusAI: A Glimpse into the Future of Artificial Intelligence'/>
          <Article image={Blog04} date='Apr 26, 2022'  title='Beyond NexusAI: Navigating the Horizon of OpenAIs Impact on AI Advancements'/>
          <Article  image={Blog05} date='Mar 26, 2021'  title='Frontiers of Innovation: Exploring the Synergy of NexusAI and Next-Gen AI Technologies'/>
    
          
        </article>
      </div>
    </section>
  )
}
