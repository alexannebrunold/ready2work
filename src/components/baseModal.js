import React from 'react'

const BaseModal = (modalIsDisplayed, action) => {

  console.log(modalIsDisplayed.modalIsDisplayed)

  return (
    <div
    // eslint-disable-next-line react/no-string-refs
      // ref='modal'
      aria-hidden='true'
      className={`'modal-container '
        ${modalIsDisplayed.modalIsDisplayed ? 'modal-visible' : 'modal-invisible'}`}
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
          onClick={action}
        >
          {/* <BaseIcon
          className='icon-blue cursor-pointer'
          alt='close icon'
          href='#cross'
        /> */}
        </button>
        <slot />
      </div>
    </div>
  )
}

export default BaseModal