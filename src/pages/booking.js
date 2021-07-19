import React from 'react'
import Table from '../composants/table'
import {Link, BrowserRouter} from 'react-router-dom'

const Booking = () => {
    return (
            <section className='page_booking'>
                <section className='content_menu'>
                    <div className='logo'><Link to='/home'><p>Ready2Work</p></Link></div>
                    <ul>
                        <li className='current_page'><Link to='/booking'>Mes Réservations</Link></li>
                        <li><Link to='/account'>Account</Link></li>
                    </ul>
                </section>
                <section className='content_table mt-2'>
                    <div>
                        <h2>Mes Réservations</h2>
                        <Table className='mt-1'/>
                    </div>
                </section>
            </section>
    )
}

export default Booking