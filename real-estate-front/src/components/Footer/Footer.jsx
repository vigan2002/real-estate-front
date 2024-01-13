import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import logo from '../../assets/images/logo.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>    
            <img src={logo} alt="" />
                <ul>
                    <li>
                        <h1>Links</h1>
                    </li>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/property'>Property</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1>Info</h1>
                    </li>
                    <li>
                        <p>Address:
                            <br />Mas Teatrit</p>
                    </li>
                    <li>
                        <p>Phone:
                            <br />044 123 123
                            <br />049 456 456</p>
                    </li>
                    <li>
                        <p>Email:
                            <br />dreni@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer