import React from 'react'
import {useStateValue} from "./StateProvider"
import './CheckoutProduct.css'

function CheckoutProduct({id, title, price, img}) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromCart = () => {
     dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id
     }) 
    }

    return (
        <div className="checkoutProduct">
             <img className="checkoutProduct_image" src={img} alt=""/>
             <div className= "checkoutProduct_info">
             <h1 className="checkoutProduct_name">{title}</h1>
             <h2 className="checkoutProduct_price">£{price}</h2>
             <button onClick={removeFromCart}>Remove from cart</button>
             </div>
        </div>
    )
}

export default CheckoutProduct
