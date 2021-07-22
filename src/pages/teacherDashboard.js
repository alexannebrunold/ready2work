/*eslint-disable */
import React, { useState, useEffect } from 'react'
import BaseModal from '../components/baseModal'
import BrightnessRates from '../components/brightnessRates'
import InputForm from '../components/inputForm'
import NoiseRates from '../components/noiseRates'
import TemperatureRates from '../components/temperatureRates'
import moment from 'moment'

const TeacherDashboard = (props) => {


  const [futuresReservations, setFuturesReservations] = useState()
  const [informationsForCurrentRoom, setInformationsForCurrentRoom] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [checkbox, setCheckbox] = useState()
  const [submit, setSubmit] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const [brigthnessForCurrentRoom, setBrightnessForCurrentRoom] = useState()
  const [roomNumber, setRoomNumber] = useState()
  const [noiseForCurrentRoom, setNoiseForCurrentRoom] = useState()
  const [temperatureForCurrentRoom, setTemperatureForCurrentRoom] = useState()
  const token = localStorage.getItem('token :');
  const isModalDisplayed = props.isModalDisplayed;

  function handleChange(event, state, value) {
    state(event.target.value)
    console.log(event.target.value)
    return value
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
          setFuturesReservations(result.length > 0 ? result : null)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  function getInformationsForCurrentRoom() {
    fetch('https://ready2work-api.herokuapp.com/api/room/' + props.targetRoom, {
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
          setBrightnessForCurrentRoom(result.brightness.value)
          setRoomNumber(result.room.value)
          setNoiseForCurrentRoom(result.noise.value)
          setTemperatureForCurrentRoom(result.temperature.value)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  function submitForm(e) {
    e.preventDefault()
    setSubmit(true)
    fetch('https://ready2work-api.herokuapp.com/api/reservation/' + props.targetRoom, {
      method: 'POST',
      headers: {
        'access-control-allow-origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({ date: date, time: time })
    })
      .then(res => {
        setSubmit(false)
        return res.json()
      })
      .then(data => {
        console.log(data)
        if (data.success) {

        }
        return !data.hasOwnProperty('error')
          ? setMessage(data.success)
          : setMessage(data.error), setError(true)
      })
  }

  useEffect(() => {
    if (isModalDisplayed === true) {
      // getFuturesReservationsForCurrentRoom()
      getInformationsForCurrentRoom()

    }
  }, [isModalDisplayed])

  return (
    <div className='container'>
      <div className={`
        ${isModalDisplayed === true
          ? 'modal-container modal-visible'
          : 'modal-invisible'}`}>
        <BaseModal
          modalIsDisplayed={isModalDisplayed}
          childToParent={props.childToParent}
        >
          <h1 className='title'>Salle {props.targetRoom}</h1>

          {isModalDisplayed === true ?
            <div className='rates'>
              <BrightnessRates
                modalIsDisplayed={isModalDisplayed}
                brightnessRate={brigthnessForCurrentRoom}
              />
              <NoiseRates modalIsDisplayed={isModalDisplayed} noiseRate={noiseForCurrentRoom}/>
              <TemperatureRates modalIsDisplayed={isModalDisplayed} temperatureRates={temperatureForCurrentRoom}/>
            </div>
            : <></>
          }


          <p className='mt-1 text-explication'>
            Cette salle est idéale pour travailler en groupe, 0 excuses pour ne pas être
            productif !
          </p>

          <div className='futures-reservations mt-1'>
            <h3>Future réservations de la salle : </h3>
            {isModalDisplayed === true && futuresReservations ?
              <div className='row_reservation_content'>
                {futuresReservations.map((infos) =>
                  <ul key={infos} className='mt-1'>
                    <li>Réservée le</li>
                    <li>{moment(infos.date).format('DD/MM/YYYY')}</li>
                    <li>à</li>
                    <li>{infos.time}</li>
                    <li>heure par userName</li>
                  </ul>
                )
                }
              </div>
              : <></>
            }
            <form className='mt-1' onSubmit={e => submitForm(e)} id='form_modal_prof'>
              <div className='form_date_content'>
                <h3>Réserver la salle :</h3>
                <InputForm value={date} type='date' label='Le' handleChange={event => handleChange(event, setDate, date)} />
                <InputForm value={time} type='time' label='à' handleChange={event => handleChange(event, setTime, time)} />
              </div>
              <div>
                <InputForm
                  className={'mt-2 checkbox'}
                  label='Je souhaite inviter des élèves'
                  value={checkbox}
                  type='checkbox'
                  handleChange={event => handleChange(event, setCheckbox, checkbox)}
                />
                <InputForm
                  className={'mt-2 submit-button'}
                  label=''
                  value={'Confirmer'}
                  type='submit'
                />
              </div>
            </form>


          </div>
        </BaseModal>
      </div>
    </div>
  )
}

export default TeacherDashboard