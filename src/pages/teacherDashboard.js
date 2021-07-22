import React, { useState } from 'react'
import BaseModal from '../components/baseModal'

const TeacherDashboard = () => {

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
        <BaseModal modalIsDisplayed={isModalDisplayed} childToParent={childToParent} />
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