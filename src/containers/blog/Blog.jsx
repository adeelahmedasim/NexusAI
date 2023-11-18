import React from 'react'
import './blog.css'
import Article from '../../components/article/Article'
import Blog01 from '../../assets/blog01.png'
import Blog02 from '../../assets/blog02.png'
import Blog03 from '../../assets/blog03.png'
import Blog04 from '../../assets/blog04.png'
import Blog05 from '../../assets/blog05.png'


export default function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, </h1>
        <h1 className='gradient__text'>We are blogging about it. </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article image={Blog01}  date='Sep 26, 2021'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article  image={Blog02} date='Sep 26, 2021'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article image={Blog03} date='Sep 26, 2021'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article image={Blog04} date='Sep 26, 2021'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article  image={Blog05} date='Sep 26, 2021'  title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
    
          
        </div>
      </div>
    </div>
  )
}
