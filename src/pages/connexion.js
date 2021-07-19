import React, { useState } from 'react'
import InputForm from '../composants/inputForm'
import backgroundConnexion from '../assets/img/image_ready2work.png'
import { Link } from 'react-router-dom'

const Connexion = () => {
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [checkbox, setCheckbox] = useState()
    const [submit, setSubmit] = useState()
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    // let token = ''

    function handleChange (event, state, value)  {
     state(event.target.value)
     console.log(value)
     return value
    }

    function resetForm(e) {
      setMail('')
      setPassword('')
    }

    function submitForm(e) {
      e.preventDefault();
      setSubmit(true);
      fetch("https://ready2work-api.herokuapp.com/auth/user/login", {
        method: 'POST',
        headers: { 
          "access-control-allow-origin" : "*",
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ email:mail, password: password})
      })
      .then(res => {
          setSubmit(false);
          return res.json();
      })
      .then(data => {
         let token = data;
         localStorage.setItem('token :',token)
         if (token != 'Login failed') {
           window.location = '/'
         }
         return !data.hasOwnProperty("error")
              ?setMessage(data.success)
              :setMessage(data.error), setError(true);
      });
    }

    return(
        <section className='page_connexion'>
            <div className='information_content mt-2'>
              <div className='titre_intro_connexion'>
                <h1 className='mb-1'>Bienvenue</h1>
                <p>Rentrez vos identifiants pour avoir accès à l’emploi du temps de vos salles en temps réel!</p>
              </div>
              <form method='POST' className='connexion_form mt-2' onSubmit={e => submitForm(e)} id='form_connexion'>
               <InputForm  required={true} placeholder='name@domain.com'  className={'input-content mt-2'} label='Mail' value={mail} type='email' handleChange={event => handleChange(event, setMail, mail)}/>
               <InputForm  required={true} placeholder='Au moins 8 caractères' className={'input-content mt-2'} label='Mot de passe' value={password} type='password' handleChange={event => handleChange(event, setPassword, password)}/>
               <InputForm  className={'mt-2 checkbox'} label='Rester connecté' value={checkbox} type='checkbox' handleChange={event => handleChange(event, setCheckbox, checkbox)}/>
               <InputForm  className={'mt-2 submit-button'} label='' value={'Se connecter'} type='submit'/>

              </form>
              <div className='text_sous_submit mt-1'>Vous n’avez pas encore de compte? <Link to='/inscription'>Inscrivez-vous dès maintenant</Link></div>
              <div className='text_sous_submit mt-1'><Link to='/'>Mot de passe oublié?</Link></div>
            </div>
            <div className='image_content'>
                <img src={backgroundConnexion} alt='image ready2'/>
            </div>
        </section>
    )
}

export default Connexion