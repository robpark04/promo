import React, {useState} from 'react'
import './Header.scss'

import Logo from '../assets/header/logo.png'
import Coin from '../assets/header/coin.png'
import Ava from '../assets/header/ava.png'
import { Link } from 'react-router-dom';

export default function Header(props){
   const headerMenu = ['PLAY', 'STAKING', 'MARKETPLACE']
   let [menu, setMenu] = useState(false)
   return(
      <header className="header">
         <img src={Logo} className="logo" alt="logo"/>
         <div className="menu">
            {headerMenu.map((item, index) => {
               return(
                  <Link to="staking" key={index}>
                     <h4>{item}</h4>
                  </Link>
               )
            })}
         </div>
         <div className={!menu ? "userData" : "userData activeSubMenu"}>

            <div className="coinsAmount">
               <img src={Coin} className="coin" alt="coin"/>
               <h4>15 500</h4>
               <button onClick={() => props.setOpenSwap(!props.openSwap)}>+</button>
            </div>
            <Link to="profile" className="avatar">
               <img src={Ava} alt="avatar"/>
               <h3>Adam_Smith_007</h3>
            </Link>
            <div className="adaptiveMenu">
               {headerMenu.map((item, index) => {
                  return(
                     <Link to="staking" key={index}>
                        <h4>{item}</h4>
                     </Link>
                  )
               })}
            </div>
         </div>
         <div className={!menu ? "barMenu" : "barMenu activeMenu"} onClick={() => setMenu(!menu)}>
            <div/>
            <div/>
            <div/>
         </div>
      </header>
   )
}