import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

export default function Brand() {
  return (
    <div className='nexuAI__brand section__padding'>
        <div>
          <img src={google} alt="" />
        </div>
        <div>
          <img src={slack} alt="" />
        </div>
        <div>
          <img src={atlassian} alt="" />
        </div>
        <div>
          <img src={dropbox} alt="" />
        </div>
        <div>
          <img src={shopify} alt="" />
        </div>
    </div>
  )
}
