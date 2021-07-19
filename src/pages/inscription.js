import React, { useState } from 'react'
import InputForm from '../composants/inputForm'
import backgroundConnexion from '../assets/img/image_ready2work.png'
import { Link } from 'react-router-dom'


const Inscription = () => {
        const [nom, setNom] = useState()
        const [mail, setMail] = useState()
        const [password, setPassword] = useState()
        const [statut, setStatut] = useState()
    
        function handleChange (event, state, value)  {
         state(event.target.value)
         return value
        }
        return(
            <section className='page_inscription'>
                <div className='information_content mt-2'>
                  <div className='titre_intro_connexion'>
                    <h1 className='mb-1'>Inscription</h1>
                    <p>Nous avons besoin de quelques informations pour vous laisser libre accès à la plateforme.</p>
                  </div>
                  <form className='connexion_form mt-2'>
                   <InputForm  placeholder='Leblanc Justine'  className={'input-content mt-2'} label='Nom prénom' value={nom} type='text' handleChange={event => handleChange(event, setNom, nom)}/>
                   <InputForm  placeholder='name@domain.com'  className={'input-content mt-2'} label='Mail' value={mail} type='email' handleChange={event => handleChange(event, setMail, mail)}/>
                   <InputForm  placeholder='Au moins 8 caractères' className={'input-content mt-2'} label='Mot de passe' value={password} type='password' handleChange={event => handleChange(event, setPassword, password)}/>
                   <div className={'input-content mt-2'}>
                   <label>Vous êtes:</label>
                    <select onChange={event => handleChange(event, setStatut, statut)} value={statut} className='mt-1'>
                        <option>Un(e) élève</option>
                        <option>Un Professeur</option>
                    </select>
                   </div>
                   <InputForm  className={'mt-2 submit-button'} label='' value={'Se connecter'} type='submit'/>
                  </form>
                  <div className='text_sous_submit mt-1'>Vous avez déjà un compte? <Link to='/connexion'>Connectez vous.</Link></div>
                </div>
                <div className='image_content'>
                    <img src={backgroundConnexion} alt='image ready2'/>
                </div>
            </section>
    )
}

export default Inscription