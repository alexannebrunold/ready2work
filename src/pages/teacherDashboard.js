/*eslint-disable */
import React, { useState, useEffect } from 'react'
import BaseModal from '../components/baseModal'
import BrightnessRates from '../components/brightnessRates'
import NoiseRates from '../components/noiseRates'
import TemperatureRates from '../components/temperatureRates'

const TeacherDashboard = () => {

  const number = 208
  const statut = 'reservée'
  const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjFiYjk2MDVjMzZlOThlMzAxMTdhNjk1MTc1NjkzODY4MzAyMDJiMmQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWx4IiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1ZCI6Im1ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1dGhfdGltZSI6MTYyNjk0NzAxMCwidXNlcl9pZCI6IlV1eDlKREJWMFVTZHAwZjVLZVo0TGtGZHNUaDIiLCJzdWIiOiJVdXg5SkRCVjBVU2RwMGY1S2VaNExrRmRzVGgyIiwiaWF0IjoxNjI2OTQ3MDEwLCJleHAiOjE2MjY5NTA2MTAsImVtYWlsIjoiYWx4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhbHhAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.XrZ9nvRPXLuZ8WAiRMTdSLY_Ky3BzZVf4GjYi9SJt13sw46yVtRsm7PlAuaJ09QdO7EQygVpgsE_IvAOa25JL2IG_nLlGCFYw5lbfqb9Cnn4Jln4tH8tCAR57LGZVXxrxGmqK9rHbCvujqBWeZ8h1HOggzOlhC1G0C-dwtJn2jV9NFCT_SMOJETRAmGZdKPTyr0bxDntCuQdRe5Kf0IvrSKVeXHpdbvKpfsjehrRWUlCy3cTbez896IcPafvQFa5wKE5HVkz7uVcWY1X6FBXkops9LIcdLS-w4q2Fepiv7y-MjXUJcQaz5T_UEOWbvvLJBEIlfkModvxT6oIrC9YnQ"
  const [isModalDisplayed, changeStateModal] = useState(false)
  const [futuresReservations, setFuturesReservations] = useState()
  const [informationsForCurrentRoom, setInformationsForCurrentRoom] = useState()


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

  function getInformationsForCurrentRoom() {
    fetch('https://ready2work-api.herokuapp.com/api/room/B106', {
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
          setInformationsForCurrentRoom(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  useEffect(() => {
    if (isModalDisplayed === true) {
      getFuturesReservationsForCurrentRoom()
      getInformationsForCurrentRoom()

    }
  }, [isModalDisplayed])

  console.log('informationsForCurrentRoom', informationsForCurrentRoom)
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

          {isModalDisplayed === true ?
            <div className='rates'>
              <BrightnessRates modalIsDisplayed={isModalDisplayed} brightnessRate={informationsForCurrentRoom}/>
              <NoiseRates modalIsDisplayed={isModalDisplayed} />
              <TemperatureRates modalIsDisplayed={isModalDisplayed} />
            </div>
          : <></>
          }


          <p className='mt-1'>
            Cette salle est idéale pour travailler en groupe, 0 excuses pour ne pas être
            productif !
          </p>

          <div className='futures-reservations'>
            <h3>Future réservations de la salle : </h3>
            {isModalDisplayed === true && futuresReservations !== undefined ?
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
        Open modal
      </button>
    </div>
  )
}

export default TeacherDashboard