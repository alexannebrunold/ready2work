import React from 'react'
import BaseModal from './baseModal'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ModalStudent = ({ salle, statut }) => {
    return (
        <BaseModal modalIsDisplayed={true}>
            <section className='header_content'>
                <span className='title'>salle {salle}</span>
                <span className='statut'>Statut : {statut}</span>
            </section>
            <section className='invite_content'>
                <div>
                    <span>Inviter mes camarades :</span>
                </div>
                <form>
                    <div className='date_content mt-1'>
                        <div>
                            <label>Le</label>
                            <input type='date'></input>
                        </div>
                        <div>
                            <label>à</label>
                            <input type='time'></input>
                        </div>
                    </div>
                    <div className='mail_content mt-1'>
                        <div className='mail'>
                            <label>Adresse mail : </label>
                            <input type='mail'></input>
                        </div>
                        <a href='#' className='add'>+ ajouter</a>
                    </div>
                    <input type='submit' value='Envoyer l’invitation' className='mt-1 submit'></input>
                </form>
            </section>
        </BaseModal>
    )
}

export default ModalStudent