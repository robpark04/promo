import React from 'react'
import './Play.scss'
import Swap from './Swap'

import {BrowserRouter as Router, Switch, Route, Link, useLocation, useHistory, useParams, Redirect} from "react-router-dom"
import {AccountContext, useAccountContext, useAccount} from "./Contexts"
// import {Dashboard} from "./Components"
import EventEmitter from "events"

export default function Play(props){
    return(
        <div className="playContainer">   
          <div className="connectWalletContainer">
          <button className="connectWallet">CONNECT WALLET</button>
          </div>
          {props.openSwap ? 
            <Swap setOpenSwap={props.setOpenSwap}  openSwap={props.openSwap} />
          : null}
        </div>
    )
}