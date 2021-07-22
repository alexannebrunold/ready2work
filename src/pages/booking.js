/*eslint-disable */
import React, { useEffect, useState } from 'react'
import Table from '../components/table'
import { Link } from 'react-router-dom'

const Booking = ({ token }) => {
  const [futuresReservations, setFuturesReservations] = useState()

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

  useEffect(() => {
    getFuturesReservationsForCurrentRoom()
  }, [])
  return (
    <section className='page_booking'>
      <section className='content_menu'>
        <div className='logo'>
          <Link to='/teacherDashboard'>
            <p>Ready2Work</p>
          </Link>
        </div>
        <ul>
          <li className='current_page'>
            <Link to='/booking'>Mes Réservations</Link>
          </li>
          <li>
            <Link to='/account'>Account</Link>
          </li>
        </ul>
      </section>
      <section className='content_table mt-2'>
        <div>
          <h2>Mes Réservations</h2>
          <Table className='mt-1' token={token} futuresReservations={futuresReservations} />
        </div>
      </section>
    </section>
  )
}

export default Booking