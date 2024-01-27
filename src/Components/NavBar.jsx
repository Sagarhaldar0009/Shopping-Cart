import React from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div>
      <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>

        <NavLink to="/">
          <div>
            <img src='../logo.png' alt='' className='h-14'/>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-600 mr-5 space-x-6">
          <NavLink to="/">
            <div>
              <p>Home</p>
            </div>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <TiShoppingCart className="text-2xl"/>
              {
                cart.length > 0 &&
                 <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                 justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            </div>  
          </NavLink>
        </div>

      </div>   
    </div>
  )
}

export default NavBar
