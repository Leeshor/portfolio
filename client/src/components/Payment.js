import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import leesCakes from '../svg/leesCakes.svg'
import './Payment.css'
import { useStateValue } from './StateProvider'



function Payment() {

    const [{ basket, user }] = useStateValue();
    const [confirmation, setConfirmation] = useState(false);

    const onSubmit = (e)=> {
        e.preventDefault();
        setConfirmation(true)
    }
   
    return (
        <div className="background">
        <div className="payment_container">
        <Link to="/ecommerce">
        <img className="logo" src={leesCakes} alt=""/>
        </Link>
        <h1 className="confirmation_header">{!confirmation ? "Hello" : "Thank you"} {user?.email}</h1>
        {confirmation ? <h3 className="confirmation_message">Your order will be with you within 24 hours. A 2 hour time slot will be confirmed by an email and text message.<br/><br/> Thank you for choosing Lee's Cakes. </h3> : ''}
        {!confirmation && <><p>Where would you like your order sent?</p>
        <form onSubmit={onSubmit}>
        <label>Address</label>
        <textarea className="payment_textarea" type="text" required="true"></textarea>
        <label>Postal code</label>
        <input type="text" required="true"></input>
        <label>County or reigon</label>
        <input type="text" required="true"></input>
        <label>Telephone</label>
        <input type="number" required="true"></input>
        <div className="checkbox">
        <input type="checkbox" required="true"/><span><p>I agree that a payment will be taken on arrival of delivery via credit or debit card</p></span>
        </div>
        <div>
        <button type="submit">Submit</button>
        </div>
        </form></>}
   
        </div>
        </div>
    )
}

export default Payment
