import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'



function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>         

        <div>
             {basket?.length === 0 ? (
                 <div>
                     <h2>Your Shopping Cart is empty.</h2>
                     <hr/>
                 </div>
             ) : (
                 <div>
                 <div className='checkout_left'>
                 <Subtotal/>
                 </div>
                 <h2 className="basket_heading">Your Shopping Basket</h2>
                 <hr/>
                 {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    />
                 ))}
    
                 
                 </div>
                 
   
             )}
             </div>
             {basket.length > 0 && (
                 <div className="checkout_right">
                 <Subtotal />
                 </div>
             )}
        </div>
    );
}

export default Checkout;
