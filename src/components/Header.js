import React from 'react'
import './Header.scss'

import Logo from '../assets/header/logo.png'
import Coin from '../assets/header/coin.png'
import Ava from '../assets/header/ava.png'

export default function Header(){
   const headerMenu = ['PLAY', 'STAKING', 'MARKETPLACE']
   return(
      <header className="header">
         <img src={Logo} className="logo" alt="logo"/>
         <div className="menu">
            {headerMenu.map((item, index) => {
               return(
                  <div key={index}>
                     <h4>{item}</h4>
                  </div>
               )
            })}
         </div>
         <div className="userData">
            <div className="coinsAmount">
               <img src={Coin} className="coin" alt="coin"/>
               <h4>15 500</h4>
               <button>+</button>
            </div>
            <div className="avatar">
               <img src={Ava} alt="avatar"/>
               <h3>Adam_Smith_007</h3>
            </div>
         </div>
      </header>
   )
}