/*eslint-disable */
import React, { useState, useEffect } from 'react'
import BaseModal from '../components/baseModal'
import BrightnessRates from '../components/brightnessRates'
import NoiseRates from '../components/noiseRates'
import TemperatureRates from '../components/temperatureRates'

const TeacherDashboard = () => {

  const number = 208
  const statut = 'reservée'
  const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWx4IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1ZCI6Im1ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1dGhfdGltZSI6MTYyNjk0NDA1NCwidXNlcl9pZCI6IlV1eDlKREJWMFVTZHAwZjVLZVo0TGtGZHNUaDIiLCJzdWIiOiJVdXg5SkRCVjBVU2RwMGY1S2VaNExrRmRzVGgyIiwiaWF0IjoxNjI2OTQ0MDU0LCJleHAiOjE2MjY5NDc2NTQsImVtYWlsIjoiYWx4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhbHhAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.WbNsFAX-kWancUwlE_Z7WbxKEB-3A86yh_PA292naWCVvsJpGswaBMgRfXuu6PNO75_GfbCIIBvYwA0PV-M7m5gDzk8QbV4iWQ9qIguQBkpj9g7XvkPRhGZVV_rC7Qu8tJsmyxitChGoNnTeALKB94I0dAmieofWRj11ejfLwTnF5UWTgjsWn-glaurLispeGrDdKNaXAm7nMZUzocSvs8i7262sg79vUTeA0ldSFCndZGuBRVw4YL4l46azjrcCshKW9pz-7S6JG5j3o7egMY-IVUKKMe_te9J5S6XfAacaBvb53IfsyQUjDKZ73vJ6mS4hlgWIehQ2I-fazSbYCQ'
  const [isModalDisplayed, changeStateModal] = useState(false)
  const [futuresReservations, setFuturesReservations] = useState()


  function displayedModal() {
    return changeStateModal(!isModalDisplayed)
  }

  const childToParent = () => {
    return changeStateModal(!isModalDisplayed)
  }

  function getFuturesReservationsForCurrentRoom() {
    fetch('https://ready2work-api.herokuapp.com/api/reservation', {
      method: 'GET',
      headers: {
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then(res => {
        return res.json()
      })
      .then(
        (result) => {
          setFuturesReservations([result])
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    if (isModalDisplayed === true) {
      getFuturesReservationsForCurrentRoom()

    }
  }, [isModalDisplayed])

  console.log('futuresReservations', futuresReservations)
  return (
    <div className='container'>
      <div className={`
        ${isModalDisplayed === true
      ? 'modal-container modal-visible'
      : 'modal-invisible'}`}>
        <BaseModal
          modalIsDisplayed={isModalDisplayed}
          childToParent={childToParent}
        >
          <h1>Salle {number}</h1>
          <p>Statut : {statut}</p>

          <div className='rates'>
            <BrightnessRates modalIsDisplayed={isModalDisplayed} />
            <NoiseRates modalIsDisplayed={isModalDisplayed} />
            <TemperatureRates modalIsDisplayed={isModalDisplayed} />
          </div>

          <p className='mt-1'>
            Cette salle est idéale pour travailler en groupe, 0 excuses pour ne pas être
            productif !
          </p>

          <div className='futures-reservations'>
            <h3>Future réservations de la salle : </h3>
            {isModalDisplayed === true && futuresReservations !== undefined?
              <ul>
              {futuresReservations.map((infos) =>
                <li key={infos}>Réservée le {infos} à heure par userName</li>
              )
              }
            </ul>
              : <></>
            }


          </div>
        </BaseModal>
      </div>
      <button
        onClick={displayedModal}
      >
        Clique moi
      </button>
    </div>
  )
}

export default TeacherDashboard