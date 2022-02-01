import React, {useState} from 'react' 
import '../styles/wallet.scss'
import axios from 'axios'

export default function NftCheck() {

   let [signed, setSigned] = useState(false),
    [account, setAccount] = useState(null),
    [nameplate, setNameplate] = useState(null),
    [walletConnection, setWalletConnection] = useState(null),
    [walletInstall, setWalletInstall] = useState(null),
    [signin, setSignin] = useState(false),
    [nftAmount, setNftAmount] = useState(null),
    [getAmount, setGetAmount] = useState(null)

  async function changeNetwork() {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{ 
          chainId: '0x38',
          chainName: 'Smart Chain',
          nativeCurrency: {
              name: 'Binance Smart Chain',
              symbol: 'BNB',
              decimals: 18,
          },
          rpcUrls: ['https://bsc-dataseed.binance.org/'],
          blockExplorerUrls: ['https://bscscan.com/'],
      }]
    })
    setSigned(true)
  }

  async function checkNetwork() {
    window.ethereum.request({ method: 'net_version' })
    .then((response) => { 
        if (response === '56'){
            setSigned(true)
            setWalletConnection(true) 
        }else{
            setSigned(false)
            setWalletConnection(true)                    
            setNameplate('Change metamask network to BSC')
        }
    })
  }

async function enterAccount() {
    if(!signin&&localStorage.getItem("gIUO87HJjho8jhJLK87HJjg") === "NotStranger"){
        setSignin(true)
    }
    const accounts = await window.ethereum.request({method: "eth_accounts"})
    .then((response) => {
        if(response[0]){
            setAccount(response[0])
            checkNetwork()
        }else{
            setNameplate(null)
            setSigned(false)
            setAccount(null)
            setWalletConnection('Connect Wallet')
        }
    })
    if(!window.ethereum.isConnected()){
        setWalletConnection('Connect Wallet')
    }
}
if(typeof window.ethereum !== 'undefined') enterAccount() 
else if(!walletInstall) setWalletInstall('🦊 Install Metamask') 

async function signIn() {
    const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        .then((response) => {
            if(response[0]) 
            setSigned(true)
            setAccount(response[0])
        })
}

  function installMetamask() {
    if(navigator.userAgent.indexOf("Chrome") !== -1){
        window.location.href = "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"    
    }else if(navigator.userAgent.indexOf("Firefox") !== -1){
        window.location.href = "https://addons.mozilla.org/el/firefox/addon/ether-metamask/"    
    }
  }

  const handleNetworkChanged = () => {
    if(Number(window.ethereum.networkVersion) === 56) enterAccount()
    else setSigned(false)
  }

  if(typeof window.ethereum !== 'undefined'){
    window.ethereum.on('accountsChanged', enterAccount)
    window.ethereum.on('networkChanged', handleNetworkChanged);
  }

  const makeTransaction = () => {
    alert('Нужна инфа как провести транзу')
    // axios.post(`http://127.0.0.1:5000/wallet_address`, { 
    //     wallet: account
    //  })
    // .then((response) => {
    //     console.log(response)
    // })
  }

  

  if(signed&&!getAmount){
    axios.get(`https://api.battleverse.io/nfts/${account}`)
    .then((response) => {
      setGetAmount(response.data)
      if((response.data.shrooms).length>=1&&(response.data.bots).length>=1){
        setNftAmount(true)
      }else if((response.data.shrooms).length>=3){
        setNftAmount(true)
      }else{
        setNftAmount(false)
      }
    })
  }

  return(
    <div className="playContainer">   
      <div className="connectWalletContainer">
        { !signed ?
          <button className="connectWallet" onClick={walletInstall ? () => installMetamask() : !nameplate ? () => signIn() : () => changeNetwork()}>
            {walletInstall?
            walletInstall 
            : !walletConnection?
            '🦊 CONNECTING WALLET'
            : !nameplate ?
              '🦊 CONNECT WALLET' 
            : nameplate}</button>
          : nftAmount ?
            <button className="connectWallet" onClick={() => makeTransaction()}>Buy BVC with 25 BUSD</button>
          : nftAmount === null ?
            <div className="nftInfo">
              <p>Loading NFT...</p>
            </div>
          : <div className="nftInfo">
            <p>Not enought nft, stranger</p>
          </div>
        }
      </div>
    </div>
  )
}