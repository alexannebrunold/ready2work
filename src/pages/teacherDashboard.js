import React, { useState } from 'react'
import BaseModal from '../components/baseModal'
import BrightnessRates from '../components/brightnessRates'

const TeacherDashboard = () => {

  const number = 208
  const statut = 'reservée'
  const [isModalDisplayed, changeStateModal] = useState(false)


  function displayedModal() {
    return changeStateModal(!isModalDisplayed)
  }

  const childToParent = () => {
    return changeStateModal(!isModalDisplayed)
  }

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

          <div>
            <BrightnessRates modalIsDisplayed={isModalDisplayed}/>
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