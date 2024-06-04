import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='features_container_feature'>
      <div className='features_container_feature_title'>
        <div />
        <h1>{title}</h1>
        </div>
        <div className='features_container_feature_text'>
         <p> {text}</p>
        </div>
      </div>
    
  )
}

export default Feature;
