import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'

const Header = (props) =>{
    return (
        <div id='page-header'>
            <img src={Logo} alt="LogoMarca"/>
            <h2 className='title'>{props.title}</h2>          
        </div>
    )
}

export default Header