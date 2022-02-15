import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { getBasketTotal } from '../reducer';
import { Link } from 'react-router-dom';


export default function Subtotal() {

    const [{basket, user}, dispatch] = useStateValue();
   

    return (
        <div className="subtotal">
            
            <CurrencyFormat 

            renderText={(value) => (
                <>
                <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                </>
            )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
          
            {user===null ? <h1 className="create_signin">Create account or sign in to checkout</h1> :   <Link to={"/ecommerce/payment"}><button>Proceed to Checkout</button></Link>}
   
         
        </div>
    )
}
