import React from "react"
import lodash from "lodash"
import axios from "axios"
import {useCookies} from "react-cookie"
// import {useMetamask} from "use-metamask"
import Web3 from "web3"

export const
  AccountContext = React.createContext(),
  useAccountContext = () => {
    const 
      [cookies, setCookie, removeCookie] = useCookies(["user"]),
      [user, setuser] = React.useState(cookies.user),
      // {connect, metaState} = useMetamask(),
      setUser = user => {
        user ? setCookie("user", user) : removeCookie("user")
        setuser(user)
      },
      signIn = async () => {
        await Web3.ethereum.enable()
        // await connect(Web3)
        const accounts = await Web3.ethereum.request({method: "eth_requestAccounts"})
        if (! accounts.length) return false
        setUser(accounts[0])
      }
    // React.useEffect(() => {
    //   const __ = async () => {
    //     const accounts = await ethereum.request({method: "eth_accounts"})
    //     if (! accounts.length) return
    //     console.log("acs", accounts)
    //     setuser(accounts[0])
    //   }
    //   __()
    // }, [])
    return {
      signIn,
      signOut: () => setUser(null),
      user,
    }
},
useAccount = () => React.useContext(AccountContext)