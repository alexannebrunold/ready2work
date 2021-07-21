import React from 'react'
import closeCross from '../assets/img/close-cross.svg'
const BaseModal = (props) => {

  return (
    <div
      // ref='modal'
      aria-hidden='true'
      className={`'modal-container '
        ${props.modalIsDisplayed === true ? 'modal-visible' : 'modal-invisible'}`}
    >
      <div
        className='modal-overlay'
        aria-hidden='true'
      // @click='$emit('overlay-click')'
      />
      <div
        className='modal-card transform'
        aria-modal='true'
        aria-hidden='true'
        tabIndex='-1'
        role='dialog'
        aria-haspopup='dialog'
      >
        <button
          type='button'
          aria-label='Fermer'
          className='button-close'
          onClick={() => props.childToParent()}
        >
          <img src={closeCross} alt='button-close'/>

        </button>
        <slot />
      </div>
    </div>
  )
}

export default BaseModal