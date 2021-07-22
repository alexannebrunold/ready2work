/*eslint-disable */
import React, { useState, useEffect } from 'react'
import lowTemperature from '../assets/img/low-temperature.svg'
import midTemperature from '../assets/img/mid-temperature.svg'
import highTemperature from '../assets/img/high-temperature.svg'

const TemperatureRates = (props) => {
  const [imgSrc, setImgSrc] = useState('')

  function changeImage() {
    switch (props.temperatureRate !== undefined) {
    case props.temperatureRate < 16.66:
      return setImgSrc(lowTemperature)
    case 16.66 > props.brightnessRate < 33.33:
      return setImgSrc(midTemperature)
    case props.brightnessRate < 33.33:
      return setImgSrc(highTemperature)
    }
  }

  useEffect(() => {
    if (props.modalIsDisplayed) {
      changeImage()
    }
  }, [props.modalIsDisplayed])

  return (
    <div className="temperatureRates">
      <h2>Niveau sonore</h2>
      <img src={imgSrc} />
    </div>
  )
}
export default TemperatureRates