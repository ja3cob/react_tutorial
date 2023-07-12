import React from 'react'
import { Button } from './Button'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Dołącz do newsletter'a aby otrzymywać najlepsze oferty
            </p>
            <p className='footer-subscription-text'>
                Możesz zrezygnować w każdej chwili
            </p>
            <div className='input-areas'>
                <form>
                    <input className='footer-input' type='email' name='email' placeholder='Email'/>
                    <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                </form>
            </div>
        </section>
        <p className='footer-copyright'>Kopyrajt ® 2023</p>
    </div>
  )
}

export default Footer