import React from 'react'
import './Swap.scss'

import Icon_bnb from '../assets/icon_bnb.png'
import Coin from '../assets/qzq_coin.png'
import Arrow from '../assets/arrow.svg'
import Convert from '../assets/convert.svg'

export default function Swap(props){
  return(
    <div className="swapContainer" >
      <div className="shadowBackground" onClick={() => props.setOpenSwap(!props.openSwap)} />
      <div className="swap">
        <h1>SWAP</h1>
        <div className="inputContainer">
          <img src={Icon_bnb} alt="coin" />
          <div className="chooseCurency">
            <span>SWAP FROM:</span>
            <div>
              <h1>BNB</h1>
              <img src={Arrow} alt="coin" />
            </div>
          </div>
          <input />
        </div>
        <img className="convert" src={Convert} alt="convert" />
        <div className="inputContainer">
          <img src={Coin} alt="coin" />
          <div className="chooseCurency">
            <span>SWAP FROM:</span>
            <div>
              <h1>QZQ</h1>
              <img src={Arrow} alt="coin" />
            </div>
          </div>
          <input />
        </div>
        <button className="connect">CONNECT WALLET</button>
      </div>
    </div>
  )
}