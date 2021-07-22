/*eslint-disable */
import React, { useState, useEffect } from 'react'
import sunLowBrigthness from '../assets/img/sun-low-brigthness.svg'
import midLowBrigthness from '../assets/img/sun-mid-brightness.svg'
import highLowBrigthness from '../assets/img/sun-high-brightness.svg'

const BrightnessRates = (props) => {
  const [imgSrc, setImgSrc] = useState('')
  let description

  function changeImage() {
    switch (props.brightnessRate !== undefined) {
    case props.brightnessRate < 1000:
      description = 'Basse'
      return setImgSrc(sunLowBrigthness)
    case 1000 > props.brightnessRate < 5000:
      description = 'Moyenne'
      return setImgSrc(midLowBrigthness)
    case 5000 > props.brightnessRate < 10000:
      description = 'Forte'
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
      <img src={imgSrc} />
      <p>{description}</p>
    </div>
  )
}
export default BrightnessRates