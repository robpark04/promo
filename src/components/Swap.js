import React, {useState} from 'react'
import './Swap.scss'

import Icon_bnb from '../assets/icon_bnb.png'
import Coin from '../assets/qzq_coin.png'
import Arrow from '../assets/arrow.svg'
import Convert from '../assets/convert.svg'
import Swapp from '../assets/Group45.svg'
import Subtract from '../assets/Subtract.svg'

import ArrowDown from '../assets/arrow_down.svg'

export default function Swap(props){
  let [btnTxt, setBtnTxt] = useState('CONNECT WALLET')
  let [amount, setAmount] = useState(false)
  let [showSwapData, setShowSwapData] = useState(false)
  let [showSwapConfirm, setShowSwapConfirm] = useState(false)

  let [input, setInput] = useState('')
  let [option, setOption] = useState('BNB')
  let [secondInput, setSecondInput] = useState('')
  let [secondOption, setSecondOption] = useState('QZQ')

  function handleSubmit(){
    if(Number(input)===0||Number(secondInput)===0){
      setBtnTxt('ENTER AN AMOUNT')
      setAmount(true)
    }else{
      setAmount(false)
      setBtnTxt('INSUFFICIENT BNB BALANCE')
      setShowSwapData(true)
    }
    if(btnTxt==='INSUFFICIENT BNB BALANCE'){
      setShowSwapData(false)
      setShowSwapConfirm(true)
      setBtnTxt('CONFIRM SWAPP')
    }
    if(btnTxt==='CONFIRM SWAPP'){
      props.setOpenSwap(!props.openSwap)
    }
  }

  return(
    <div className="swapContainer" >
      <div className="shadowBackground" onClick={() => props.setOpenSwap(!props.openSwap)} />
      <div className="swap" style={showSwapConfirm? { width: '38%'} : null}>
        <h1>SWAP</h1>
        <div className="inputContainer" style={showSwapConfirm? {padding: '0% 3% 1%', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'} : null}>
        {option === 'BNB'?
          <img className="bnbcoin" src={Icon_bnb} alt="coin" />
          : option === 'QZQ' ? <img className="coin" src={Coin} alt="coin" />
        : null}
          {!showSwapConfirm ?
          <>
            <div className="chooseCurency">
              <span>SWAP FROM:</span>
              <div>
                <select  value={option}
                  onChange={e => setOption(e.target.value)}>
                  <option value="BNB">BNB</option>
                  <option value="QZQ">QZQ</option>
                </select>
                <img src={Arrow} alt="arrow" />
              </div>
            </div>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <h5 className="balance">BALANCE: 0</h5>
          </>
          :  <>
              <h1 style={{width: '55%'}}>{input}</h1>
              <h1 style={{width: '20%'}}>{option}</h1>
            </>
        }
        </div>
        {!showSwapConfirm ?
        <img className="convert" src={Convert} alt="convert" />
        : <img className="convert arrow" style={{background: '#20313a'}} src={ArrowDown} alt="convert" />}

        <div className="inputContainer" style={showSwapConfirm? {padding: '1% 3%', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'} : null}>
          {secondOption === 'QZQ'?
            <img className="coin" src={Coin} alt="coin" />
          : secondOption === 'BNB' ? <img className="bnbcoin" src={Icon_bnb} alt="coin" />
          : null}
          {!showSwapConfirm ?
          <>
          <div className="chooseCurency">
            <span>SWAP FROM:</span>
            <div>
              <select value={secondOption}
                  onChange={e => setSecondOption(e.target.value)}>
                <option value="QZQ">QZQ</option>
                <option value="BNB">BNB</option>
              </select>
              <img src={Arrow} alt="arrow" />
            </div>
          </div>
          <input  value={secondInput} onChange={e => setSecondInput(e.target.value)}/>
          <h5 className="balance">BALANCE: 0</h5>
          </>
          : <>
              <h1 style={{width: '55%'}}>{secondInput}</h1>
              <h1 style={{width: '20%'}}>{secondOption}</h1>
            </>
        }
        </div>
        {showSwapData ?
          <div className="swap" style={{paddingTop: '2%'}}>
            <span>Price</span>
            <h6>
              <span>{input} {option} PER {secondOption}</span>
              <img src={Swapp} alt="swapp" />
            </h6>
          </div> 
        : null}
        {showSwapConfirm ?
          <>
          <p style={{paddingTop: '3%'}}>Output is estimated. You will receive at least {secondInput} {secondOption} or the transaction will revert.</p>
          <div className="convertData">
            <div>
              <span>Price</span>
              <span>Minimum received
                <img src={Subtract} alt="swapp" />
              </span>
              <span>Price Impact
              <img src={Subtract} alt="swapp" />
              </span>
              <span>Liquidity Provider Fee
              <img src={Subtract} alt="swapp" />
              </span>
            </div>
            <div>                
              <h4 className="h4WithIcon">47.1051 QZQ/BNB
                <img src={Swapp} alt="swapp" />
              </h4>
              <h4>437.SKILL</h4>
              <h4>0.86%</h4>
              <h4>0.02 BNB</h4>
            </div>
          </div> 
          </>
        : null}
        <button style={amount||showSwapData? {background: 'linear-gradient(140deg, #20313A 8.91%, #13222A 90.52%)', color: '#07161f'} : null} onClick={() => handleSubmit()} className="connect">{btnTxt}</button>
        {showSwapData ?
          <>
            <div className="convertData">
              <div>
                <span>Minimum received
                  <img src={Subtract} alt="swapp" />
                </span>
                <span>Price Impact
                <img src={Subtract} alt="swapp" />
                </span>
                <span>Liquidity Provider Fee
                <img src={Subtract} alt="swapp" />
                </span>
              </div>
              <div>
                <h4>437.SKILL</h4>
                <h4>0.86%</h4>
                <h4>0.02 BNB</h4>
              </div>
            </div> 
            <h3>VIEW PAIR ANALYTICS</h3>
          </>
        : null}
      </div>
    </div>
  )
}