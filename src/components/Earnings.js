import React from 'react' 
import './Earnings.scss'
import AddBot from './AddBot'

import Swap from './Swap'

import Character from '../assets/character.png'
import Time from '../assets/time.svg'
import Coin from '../assets/qzq_coin.png'
import Stop from '../assets/stop.svg'

export default function Earnings(props){
  return(
    <div className="earnings">
      <div className="characterContainer">
        <div className="character">
          <img className="bot" src={Character} alt="character" />
          <div className="botInfo">
            <div className="botName">
              <h3>BABY COMBAT BOT</h3>
              <span>
                <img src={Time} alt="time" />
                18:05
              </span>
            </div>
            <h3 className="num">#2481 G1</h3>
            <div className="coinAmount">
              <img src={Coin} alt="coin" />
              <h1>1 300 489,84</h1>
            </div>
            <h3 className="crypto">348,9 bvc   ~ $87,32</h3>
            <div className="stop">
              <img src={Stop} alt="stop" />
              <span>STOP</span>
            </div>
          </div>
        </div>
        <button className="addCharacter">+ ADD NFT CHARACTER</button>
      </div>        
      <div className="myEarnings">
        <h3>MY EARNINGS</h3>
        <div className="convert">
          <span>1 NFT </span>
          <h4> = </h4>
          <img src={Coin} alt="coin" />
          <h4>10 000 PER MONTH</h4>
        </div>
        <div className="donut-chart-block block">
          <div className="donut-chart">
            <div style={{ transform: 'rotate(' + String(3.6*100) + 'deg)' }} className="clip">
              <div style={{ background: 'red', transform: 'rotate(' + String(3.6*50) + 'deg)' }} className="item" data-rel="21"></div>
            </div>
            <div style={{ transform: 'rotate(' + String(3.6*50) + 'deg)' }} className="clip">
              <div style={{ background: 'green', transform: 'rotate(' + String(3.6*50) + 'deg)' }} className="item" data-rel="21"></div>
            </div>
            <div className="center">
              <div className="centerInfo">
                <h5>TOTAL EARNED</h5>
                <h1>357 K</h1>
                <span>500 K</span>
              </div>
            </div>
          </div>
        </div>
        <button className="withdraw">WITHDRAW</button>
      </div>        
      {/* <AddBot /> */}
      {props.openSwap ? 
        <Swap setOpenSwap={props.setOpenSwap}  openSwap={props.openSwap} />
      : null}
    </div>
  )
}