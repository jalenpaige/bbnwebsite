import React from 'react';
import '../App.css';
import { Button } from '../components/Button'
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join our newsletter to stay up to date!
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" className="footer-input" />
                        <Button buttonStyle='btn--outline'>Join</Button>
                    </form>
                </div>
            </section>
            <div className="footer-link">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Stuff</h2>
                        <Link to='/newsletter'></Link>
                        <Link to='/about'></Link>
                        <Link to='/calendar'></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer