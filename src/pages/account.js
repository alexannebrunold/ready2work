// import React, { useState } from 'react'

const AccountPage = () => {

  return (
    <div>
      <div className='header'>
        <div>Ready To Work</div>
        <div>
          <a href='/'>Mes réservations</a>
          <a href='/'>Account</a>
        </div>
      </div>

      <div className="reservations-table" role="table">
        <table>
          <thead>
            <tr>
              <th scope='col'>Salles</th>
              <th scope='col'>Dates</th>
              <th scope='col'>Heures</th>
              <th scope='col'>...</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>A007</td>
              <td>12/08/2021</td>
              <td>17h30 à 19h</td>
              <td>Icons</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default AccountPage