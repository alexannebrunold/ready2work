/*eslint-disable */
import React from 'react'
import TableRow from './tableRow'
// import EditIcon from '../assets/img/edit.svg'
import moment from 'moment'

const Table = ({ className, token, futuresReservations }) => {
  function test(e) {
    console.log(e)
  }
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
            {
              futuresReservations ?
              <>
                {
                  futuresReservations.map((infos) => {
                   return (<TableRow salle={infos.idSalle} date={moment(infos.date).format('DD/MM/YYYY')} time={infos.time}/>)
                  })
                }
              </>
                :
                <></>
            }
      </tbody>
    </table>
  )
}

export default Table