import React from 'react'
import shoppingCart from '../svg/shoppingCart.svg'
import leesCakes from '../svg/leesCakes.svg'
import {Link} from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'
import { auth } from '../firebase'

 const Header = () => {

   const [{ basket, user }] = useStateValue();
   const login = () => {
       if (user) {
           auth.signOut();
       }
   }

    return (
        
        <nav className="ecommerceHeader">
        <Link to="/ecommerce">
        <img className="logo" src={leesCakes} alt=""/>
        </Link>
        <div className="header_nav">
        <Link to={!user && "/ecommerce/login"} className="header_link">
        <div onClick={login} className="header_option">
        <span className="header_option_lineOne">Hello {user?.email}</span>
        <span className="header_option_lineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
        </div>
        </Link>
        <Link to="/ecommerce/checkout" className="header_link">
        <div  className="header_optionBasket">
         <div className="span"><span>{basket?.length}</span></div>
        <img className="logo-2" src={shoppingCart} alt=""/>
        </div>
        </Link>
        </div>
       
        </nav>
      
        
        
    )
}

export default Header;

  