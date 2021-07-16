import React, { useState } from 'react'
import InputForm from '../composants/inputForm'
import backgroundConnexion from '../assets/img/image_ready2work.png'

const Connexion = () => {
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    function handleChange (event, state, value)  {
     state(event.target.value)
     console.log(value)
     return value
    }
    return(
        <section className='page_connexion'>
            <div>
              <div className='titre_intro_connexion'>
                <h1>Bienvenue</h1>
                <span>Rentrez vos identifiants pour avoir accès à l’emploi du temps de vos salles en temps réel!</span>
              </div>
              <form className='connexion_form'>
               <InputForm label='Mail' value={mail} type='email' handleChange={event => handleChange(event, setMail, mail)}/>
               <InputForm label='Mot de passe' value={password} type='password' handleChange={event => handleChange(event, setPassword, password)}/>
              </form>
            </div>
            <div>
                <img src={backgroundConnexion} alt='image ready2'/>
            </div>
        </section>
    )
}

export default Connexion