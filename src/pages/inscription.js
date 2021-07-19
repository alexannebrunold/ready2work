import React, { useState } from 'react'
import InputForm from '../composants/inputForm'
import backgroundInscription from '../assets/img/image_ready2work.png'
import { Link } from 'react-router-dom'

const Inscription = () => {
  const [mail, setMail] = useState()
  const [password, setPassword] = useState()
  const [namesOfCurrentUser, setnamesOfCurrentUser] = useState()
  const [statut, setStatut] = useState()

  function handleChange(event, state, value) {
    state(event.target.value)
    return value
  }

  return (
    <section className='page_inscription'>
      <div className='information_content'>
        <div className='titre_intro_inscription'>
          <h1 className='mb-1'>Inscription</h1>
          <p className='subtitle_insription'>
                        Nous avons besoin de quelques informations pour vous laisser libre
                        accès à la plateforme.
          </p>
        </div>
        <form className='inscription_form'>
          <InputForm
            placeholder='Leblanc Juste'
            className='input-content'
            label='Nom Prénom'
            value={namesOfCurrentUser}
            type='text'
            handleChange={event =>
              handleChange(event, setnamesOfCurrentUser, namesOfCurrentUser)}
          />
          <InputForm
            placeholder='name@domain.com'
            className={'input-content mt-2'}
            label='Mail'
            value={mail}
            type='email'
            handleChange={event => handleChange(event, setMail, mail)}
          />
          <InputForm
            placeholder='Au moins 8 caractères'
            className={'input-content mt-2'}
            label='Mot de passe'
            value={password}
            type='password'
            handleChange={event => handleChange(event, setPassword, password)}
          />
          <InputForm
            className={'mt-2 submit-button font-size-16'}
            label=''
            value={'S\'inscrire'}
            type='submit'
          />
          <div className={'input-content mt-2'}>
            <label>Vous êtes:</label>
            <select
              onChange={event => handleChange(event, setStatut, statut)}
              value={statut}
              className='mt-1'>
              <option>Un(e) élève</option>
              <option>Un Professeur</option>
            </select>
          </div>
          <div className='font-size-14 text_sous_submit mt-1'>
                      Vous avez déjà un compte?
            <Link to='/connexion'>Connectez vous.</Link>
          </div>
        </form>
      </div>
      <div className='image_content'>
        <img src={backgroundInscription} alt='image ready2' />
      </div>
    </section>
  )
}

export default Inscription