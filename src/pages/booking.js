/*eslint-disable */
import React from 'react'
import Table from '../components/table'
import {Link} from 'react-router-dom'

const Booking = ({token}) => {
  console.log(token)
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
          <Table className='mt-1' token={token}/>
        </div>
      </section>
    </section>
  )
}

export default Booking