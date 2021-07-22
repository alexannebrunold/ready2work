import React, { useState, useEffect } from 'react'
import sunLowBrigthness from '../assets/img/sun-low-brigthness.svg'
import midLowBrigthness from '../assets/img/sun-mid-brightness.svg'
import highLowBrigthness from '../assets/img/sun-high-brightness.svg'

const BrightnessRates = (props) => {
  const data = 'low'
  const [imgSrc, setImgSrc] = useState('')

  function changeImage() {
    switch (data) {
    case 'low':
      return setImgSrc(sunLowBrigthness)
    case 'mid':
      return setImgSrc(midLowBrigthness)
    case 'high':
      return setImgSrc(highLowBrigthness)
    }
  }

  useEffect(() => {
    if (props.modalIsDisplayed) {
      changeImage()
    }
  }, [props.modalIsDisplayed])

  return (
    <div className="brightnessRates">
      <h2>Luminosité</h2>
      <img src={imgSrc}/>
    </div>
  )
}
export default BrightnessRates