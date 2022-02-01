import React from 'react'
import '../styles/wallet.scss'

export default function Play({walletInstall, walletConnection, nameplate, installMetamask, signIn, changeNetwork, signed}){

  return(
    <div className="playContainer">   
      <div className="connectWalletContainer">
      { !signed &&
        <button className="connectWallet" onClick={walletInstall ? () => installMetamask() : !nameplate ? () => signIn() : () => changeNetwork()}>
          {walletInstall?
          walletInstall 
          : !walletConnection?
          '🦊 CONNECTING WALLET'
          : !nameplate ?
            '🦊 CONNECT WALLET' 
          : nameplate}</button>
      }
      </div>
    </div>
  )
}