// import React, { useState } from 'react'

const AccountPage = () => {

  const array = [
    {
      id:'1',
      salle: 'A007',
      date: '22/07/2021',
      heure: '12:00',
    },
    {
      id: '1',
      salle: 'A008',
      date: '22/07/2021',
      heure: '12:00',
    },
    {
      id: '1',
      salle: 'A009',
      date: '22/07/2021',
      heure: '12:00',
    },
    {
      id: '1',
      salle: 'A010',
      date: '22/07/2021',
      heure: '12:00',
    }
  ]

  return (
    <div className='account_page mt-1'>
      <div className='header'>
        <h1>Ready To Work</h1>
        <div>
          <a href='/' className='header_link mr-1'>Mes réservations</a>
          <a href='/' className='header_link'>Account</a>
        </div>
      </div>

      <h2 className='mt-4'>Mes réservations</h2>
      <div className="reservations-table mt-2" role="table">
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Salles</th>
              <th scope='col'>Dates</th>
              <th scope='col'>Heures</th>
              <th scope='col'>...</th>
            </tr>
          </thead>

          <tbody>
            {array.map(info => (
              <tr key={info.id}>
                <td>{info.salle}</td>
                <td>{info.date}</td>
                <td>{info.heure}</td>
                <td>Icons</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AccountPage