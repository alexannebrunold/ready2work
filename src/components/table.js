/*eslint-disable */
import React from 'react'
import TableRow from './tableRow'
import { useState, useEffect } from 'react'
// import EditIcon from '../assets/img/edit.svg'

const Table = ({className, token}) => {
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

console.log(futuresReservations)

  return (
    <table className={className}>
      <thead>
        <tr>
          <th>Salle</th>
          <th>Date</th>
          <th>Heure</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        <>
        {
          futuresReservations?
          <>
          {futuresReservations.map((infos) =>{
            <TableRow time={infos.time} date={infos.date} salle={infos.idSalle}/>
           })}
           </>
           :
           <span>pas de réservations</span>
        }
        </>
      </tbody>
    </table>
  )
}

export default Table