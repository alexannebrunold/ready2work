import React from 'react'

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
          {/* <BaseIcon
          className='icon-blue cursor-pointer'
          alt='close icon'
          href='#cross'
        /> */}
          Close Modal
        </button>
        <slot />
      </div>
    </div>
  )
}

export default BaseModal