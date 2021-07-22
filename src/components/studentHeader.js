/*eslint-disable */
import React from 'react'
import NotificationBell from '../assets/img/notification-bell.svg'

const StudentHeader = () => {
  return(
    <section className="studentHeader">
      <h3 className="studentHeader-title">Ready2Work</h3>
      <div className="studentHeader-profil">
        <img
          className="studentHeader-notification"
          src={ NotificationBell }
          alt="Pictogramme cloche notifications"
        />
        <p>Jones Ferdinand</p>
      </div>
    </section>
  )
}
export default StudentHeader