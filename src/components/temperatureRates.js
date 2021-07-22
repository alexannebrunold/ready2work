/*eslint-disable */
import React, { useState, useEffect } from 'react'
import lowTemperature from '../assets/img/low-temperature.svg'
import midTemperature from '../assets/img/mid-temperature.svg'
import highTemperature from '../assets/img/high-temperature.svg'

const TemperatureRates = (props) => {
  const data = 'low'
  const [imgSrc, setImgSrc] = useState('')

  function changeImage() {
    switch (data) {
    case 'low':
      return setImgSrc(lowTemperature)
    case 'mid':
      return setImgSrc(midTemperature)
    case 'high':
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