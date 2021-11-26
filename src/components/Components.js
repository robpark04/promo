import React from "react"
import {useAccount} from "./Contexts"
import Web3 from "web3"
// import Unity, { UnityContext } from "react-unity-webgl"

export const Dashboard = () => {
    // const
    //     account = useAccount(),
    //     unityContext = new UnityContext({
    //       loaderUrl: "Build/Build.loader.js",
    //       dataUrl: "Build/Build.data.unityweb",
    //       frameworkUrl: "Build/Build.framework.js.unityweb",
    //       codeUrl: "Build/Build.wasm.unityweb",
    //       streamingAssetsUrl: "StreamingAssets",
    //       productName: "CryptoBots",
    //       productVersion: "1.0.2",
    //     })
    React.useEffect(() => {
        // unityContext.on("canvas", canvas => {
        //   window.onresize = () => {
        //     let w = window.innerWidth, 
        //           targetH = w * 850 / 1511.0,
        //           h = window.innerHeight - 150
        //     if (targetH < h) h = targetH      
        //     else w = h * 1511 / 850.0
        //   canvas.style.height = "" + h + "px";
        //   canvas.style.width = "" + w + "px";
        //   }
        // })

        document.querySelector("#unity-loading-bar").style.display = "block"

        unityContext.on("progress", value => {
          // console.log("progress", value)
          const progressBarFull = document.querySelector("#unity-progress-bar-full")
          progressBarFull.style.width = 100 * value + "%"
        })

        unityContext.on("loaded", () => {
          // console.log("loaded vfoo")
          const loadingBar = document.querySelector("#unity-loading-bar")
          loadingBar.style.display = "none"
        })

        unityContext.on("GameReady", async () => {
          console.log("ready")
          account.user = "0x51c25230335472236853676290062c8C7a0825b6"
          const
            web3 = new Web3(ethereum),
            contract = new web3.eth.Contract([{ "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "name": "balances", "type": "uint256[]" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "name": "uri", "type": "string" } ], "payable": false, "type": "function"}], "0x0111546feb693b9d9d5886e362472886b71d5337"),
            nfts = await contract.methods.walletOfOwner(account.user).call(),
            balance = parseInt(await contract.methods.balanceOf(account.user).call()),
            uris = await Promise.all(nfts.map(async nft => ({nftUri: await contract.methods.tokenURI(nft).call(), ntfId: nft})))
          window.app.uris = JSON.stringify({uris})
          unityContext.send("Systems", "NftData", JSON.stringify({uris}))
        })

        // setTimeout(async () => {
        //   const
        //     web3 = new Web3(ethereum),
        //     contract = new web3.eth.Contract([{ "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "walletOfOwner", "outputs": [ { "name": "balances", "type": "uint256[]" } ], "payable": false, "type": "function" }, { "constant": true, "inputs": [ { "name": "tokenId", "type": "uint256" } ], "name": "tokenURI", "outputs": [ { "name": "uri", "type": "string" } ], "payable": false, "type": "function"}], "0x0111546feb693b9d9d5886e362472886b71d5337"),
        //     nfts = await contract.methods.walletOfOwner(account.user).call(),
        //     balance = parseInt(await contract.methods.balanceOf(account.user).call()),
        //     uris = await Promise.all(nfts.map(async nft => ({nftUri: await contract.methods.tokenURI(nft).call(), ntfId: nft})))
        //   window.app.uris = JSON.stringify({uris})
        //   unityContext.send("Systems", "NftData", uris);
        // }, 1000)
    }, [])
    return (
  <div>
    {/* <div id="clock" style={{ display: "none" }}>
      <div
        className="interactivePopup container"
        id="exitintent"
        style={{ top: "20%", display: "block" }}
      >
        <section className="exitIntentInner">
          <div className="callBack__popup__lady">
            <div className="swap">
              <h4 className="swapzag">swap</h4>
              <div className="topval">
                <div className="coins">
                  <img height={50} src="img/bnb.png" width={50} />
                  <div className="cointicks">
                    <div className="swapfrom">swap from:</div>
                    <div className="cointick">
                      bnb
                      <span>⌄</span>
                    </div>
                  </div>
                  <input className="inputswap" type="text" />
                </div>
              </div>
              <div className="swaparrow">
                <img height={34} src="img/swap.png" width={34} />
              </div>
              <div className="bottomval">
                <div className="coins">
                  <img height={52} src="img/money.png" width={52} />
                  <div className="cointicks">
                    <div className="swapfrom">swap to:</div>
                    <div className="cointick">
                      qzq
                      <span>⌄</span>
                    </div>
                  </div>
                  <input className="inputswap" type="text" />
                </div>
              </div>
              <button className="swapbutton">Connect wallet</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
      <a className="navbar-brand ps-3" href="/">
        <img height={97} src="img/logo.png" width={108} />
      </a>
      <nav className="navbar-nav" id="sidenavAccordion">
        <div className="sb-menu">
          <div className="nav">
            <div className="punkt">
              <a className="nav-link" href="/">
                Play
              </a>
            </div>
            <div className="punkt">
              <a className="nav-link" href="staking.html">
                Staking
              </a>
            </div>
            <div className="punkt">
              <a className="nav-link" href="index.html">
                Marketplace
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
        <div
          className="input-group"
          style={{ fontSize: 18, background: "#13222A" }}
        ></div>
      </div>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            aria-expanded="false"
            className="nav-link"
            data-bs-toggle="dropdown"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            <span className="balance" id="clock" >
              <img height={64} src="img/money.png" width={64} />
              15 000
              <img
                className="balanceplus"
                height={32}
                src="img/plus.png"
                width={32}
              />
            </span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item ">
          <a
            aria-expanded="false"
            className="nav-link"
            href="#"
            id="navbarDropdown"
            role="button"
          >
            <img height={42} src="img/user.png" width={42} />
            <span className="username">{account.user}</span>
            <br />
            <span onClick={event => {
              event.preventDefault()
              {/*console.log("dis")
              account.signOut()
              location.href = location.href
            }}>disconnect</span>
          </a>
        </li>
      </ul>
    </nav>
    <div id="layoutSidenav_content">
      <main>
        <div className="container-fluid px-4">
          <h1 className="mt-4"></h1>
          <div className="row">
            <div className="unity-desktop" id="unity-container">
              {/*<canvas height={850} id="unity-canvas" width={1190}></canvas>
              <Unity unityContext={unityContext} style={{width: 1511, height: 850}} id="unity-canvas" />
            </div>
          </div>
        </div>
      </main>
    </div> */}
  </div>
)
}