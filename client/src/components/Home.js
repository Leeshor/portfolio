import React from 'react'
import Products from './Products'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
        <Link to="/">
        <div className="return_to_homePage">
        <FontAwesomeIcon icon={['fas', 'reply']} size="2x" color="rgb(249, 249, 249)"/>
        <h2>Return to home page</h2>
        </div>
        </Link>
            <h1 className="ecommerce_title">Lee's Cakes</h1>
            <div className="card_component">
            <Products
                id="1"
                title= "Cupcake"
                price= {2}
                img="../img/cupcake.jpg"
            />
            <Products
                id="2"
                title= "Cookie"
                price={2}
                img="../img/cookie.jpg"
            />
            <Products
                id="3"
                title= "Carrot"
                price= {3}
                img="../img/carrot-cake.jpg"
            />
            <Products
                id="4"
                title= "Torte"
                price= {20}
                img="../img/walnut.jpg"
            />
            <Products
                 id="5"
                 title= "Macaron"
                 price= {1}
                 img="../img/macaron.jpg"
            />
            <Products
                 id="6"
                 title= "lemon tart"
                 price= {2}
                 img="../img/lemon-tart.jpg"
            />
            <Products
                id="7"
                title= "Pavlova"
                price= {13}
                img="../img/pavlova.jpg"
            />
            <Products
                 id="8"
                 title= "Donut"
                 price= {2}
                 img="../img/donut.jpg"
            />
        </div>
        </div>
       
    )
}

 
