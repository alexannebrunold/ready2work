/*eslint-disable */
import React, { useState, useEffect } from 'react'
import lowSound from '../assets/img/low-sound.svg'
import midSound from '../assets/img/mid-sound.svg'
import highSound from '../assets/img/high-sound.svg'

const NoiseRates = (props) => {
  const data = 'low'
  const [imgSrc, setImgSrc] = useState('')

  function changeImage() {
    switch (data) {
    case 'low':
      return setImgSrc(lowSound)
    case 'mid':
      return setImgSrc(midSound)
    case 'high':
      return setImgSrc(highSound)
    }
  }

  useEffect(() => {
    if (props.modalIsDisplayed) {
      changeImage()
    }
  }, [props.modalIsDisplayed])

  return (
    <div className="noiseRates">
      <h2>Niveau sonore</h2>
      <img src={imgSrc} />
    </div>
  )
}
export default NoiseRates