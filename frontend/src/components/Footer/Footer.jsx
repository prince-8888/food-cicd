import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

export default function () {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">

                <div className='footer-content-left'>
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque aliquid amet officiis nam rerum molestias cum quo ullam quis est.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>


                <div className='footer-content-center'>
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>AboutUs</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>


                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+12345678</li>
                        <li>tomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>copyright @2024 tomato.com - All rights are reserved</p>
        </div>
    )
}
