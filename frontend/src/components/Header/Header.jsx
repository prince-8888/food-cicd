import React from 'react'
import './Header.css'



export default function Header() {
  return (
    <div className='header'>
        <div className="header-content">
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
            <a href="#food-display"><button>View menu</button></a>
        </div>
    </div>
  )
}
