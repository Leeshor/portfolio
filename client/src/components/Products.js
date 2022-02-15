import React from 'react'
import './Products.css'
import {useStateValue} from "./StateProvider"



function Products({id, title, price, img})  {

 
    const[{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                img: img,
                title: title,
                price: price
            }
        })
   
    }
   
    return (
        
  



  <div className="card_section"> 
             <img className="ecommerce_image" src={img} alt=""/>
             <h1 className="ecommerce_name">{title}</h1>
             <h2 className="ecommerce_price">£{price}</h2>
             <button className="ecommerce_button" onClick={addToBasket}>Add to cart</button>
              </div>  
             
             
             
           
             
    )
}



export default Products
