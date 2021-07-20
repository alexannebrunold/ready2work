import React, { useState } from 'react'
import BaseModal from '../components/baseModal'

const TeacherDashboard = () => {

  const [isModalDisplayed, changeStateModal] = useState(false)

  function displayedModal() {
    console.log('isModalDisplayed', isModalDisplayed, !isModalDisplayed)
    return changeStateModal(!isModalDisplayed)
  }

  function handler() {
    return changeStateModal(!isModalDisplayed)
  }

  return (
    <div className='x'>

      <BaseModal  modalIsDisplayed={isModalDisplayed} />
      <button onClick={displayedModal} action={handler}>Clique moi</button>
    </div>
  )
}

export default TeacherDashboard