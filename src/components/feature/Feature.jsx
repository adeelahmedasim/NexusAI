import React from 'react'
import './feature.css'

export default function Feature(props) {
  return (
    <div className='nexusAI__features-container__feature'>
      <div className='nexusAI__features-container__feature-title'>
        <div />
        <h1>{props.title}</h1>
      </div>
      <div className='nexusAI__features-container__feature-text'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
