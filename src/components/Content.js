import React, {useState} from 'react'
import './Content.scss'

import Ava from '../assets/ava.png'
import YellowSwards from '../assets/yellowSwards.png'
import Swards from '../assets/swards.png'

export default function Content(){
  let [num, setNum] = useState(0)
  let [timeFilter, setTimeFilter] = useState(0)
  return(
    <div className="content">
      <div className="contentTop">
        <div className="userInfo">
          <img src={Ava} alt="avatar" />
          <div className="accountInfo">
            <h1>ADDF SMY LOOONG</h1>
              <div className="info">
                <span>E-mail</span>
                <h5>addfsmylooong@baatleverse.io</h5>
                <button>CHANGE</button>
              </div>
              <div className="info">
                <span>Discord</span>
                <h5>@addfsmylooong</h5>
                <button>CHANGE</button>
              </div>              
          </div>
        </div>
        <div className="userGame">
          <img src={YellowSwards} alt="swards" />
          <div className="imgLight" />
          <span>BATTLES</span>
          <h5>3518</h5>
        </div>
        <div className="userGame">
          <span>LEVEL</span>
          <h5>21</h5>
        </div>
      </div>
      <div className="userGameInfo">
        <div className="userGameButtons">
          {['DUELS','RACING'].map((item, index) => {
            return(
              <>
              {index===num?
              <button className="active">{item}</button>
              :<button onClick={() => setNum(index)}>{item}</button>}
              </>
            )
          })}
        </div>
        <div className="userGameInfoDiv">
          <img src={Swards} alt="swards" />
          <div className="userGameInfoContent">
            <div className="rates">
              <div>
                <span>WON</span>
                <h5>1358</h5>
              </div>
              <div>
                <span>DROW</span>
                <h5>1530</h5>
              </div>
              <div>
                <span>LOSE</span>
                <h5>1000</h5>
              </div>
            </div>
            <div className="buttons">
            {['DAYS','MONTH','YEARS'].map((item, index) => {
            return(
              <>
              {index===timeFilter?
                <button className="active">{item}</button>
                :<button onClick={() => setTimeFilter(index)}>{item}</button>}
              </>
            )
          })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}