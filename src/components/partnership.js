import React from 'react' 
import '../styles/partnership.scss'

import A2 from '../assets/partnership/Partnership/2A.png'
import AVG from '../assets/partnership/Partnership/AVG.png'
import BigBrainHoldings from '../assets/partnership/Partnership/BigBrainHoldings.png'
import BlueWheel from '../assets/partnership/Partnership/BlueWheel.png'
import CCK from '../assets/partnership/Partnership/CCK.png'
import CryptoOmg from '../assets/partnership/Partnership/cryptoOmg.png'
import CryptoPing from '../assets/partnership/Partnership/CryptoPing.png'
import FrenchHunters from '../assets/partnership/Partnership/3.png'

import Enjinstarter from '../assets/partnership/Partnership/Enjinstarter.png'
import Ex from '../assets/partnership/Partnership/ex.png'
import GAP from '../assets/partnership/Partnership/GAP.png'
import LegionVentures from '../assets/partnership/Partnership/legion_ventures.png'
import MagnusCapital from '../assets/partnership/Partnership/MagnusCapital.png'
import Onchain from '../assets/partnership/Partnership/Onchain.png'
import Seedify_logo from '../assets/partnership/Partnership/Seedify_logo.png'
import Truepnl from '../assets/partnership/Partnership/Truepnl.png'
import Vespertine from '../assets/partnership/Partnership/Vespertine.png'
import Whitelist from '../assets/partnership/Partnership/Whitelist.png'

// MEDIA 
import Ap from '../assets/partnership/Media/ap.png'
import AsiaOne from '../assets/partnership/Media/asiaOne.png'
import Benzinga from '../assets/partnership/Media/benzinga.png'
import Bitcoinist from '../assets/partnership/Media/Bitcoinist.png'
import Coinquora from '../assets/partnership/Media/coinquora.png'
import Fn from '../assets/partnership/Media/fn.png'
import Investing from '../assets/partnership/Media/investing.png'
import Markerwatch from '../assets/partnership/Media/markerwatch.png'
import Menafn from '../assets/partnership/Media/menafn.png'
import Newsbtc from '../assets/partnership/Media/newsbtc.png'
import Xzx from '../assets/partnership/Media/xzx.png'
import YahooFinance from '../assets/partnership/Media/Yahoo_Finance.png'
import YahooMoney from '../assets/partnership/Media/Yahoo_Money.png'
import YahooNews from '../assets/partnership/Media/yahoo-news.png'
import Coinpeake from '../assets/partnership/Media/сoinspeaker.png'

// LAUNCHPADS 
import Bullperks from '../assets/partnership/Launchpads/bullperks.png'
// import Enjinstarter from '../assets/partnership/Launchpads/Enjinstarter.png'
// import Ex from '../assets/partnership/Launchpads/Ex.png'
import GameStation from '../assets/partnership/Launchpads/GameStation.png'
import Oxbull from '../assets/partnership/Launchpads/Oxbull.png'
import Seedify from '../assets/partnership/Launchpads/Seedify.png'

import aLeft from '../assets/partnership/arrowLeft.svg'
import aRight from '../assets/partnership/arrowRight.svg'

export default function Partnership() {
  
  const PARTNERSHIP = [
    {img: A2, link: 'https://2a.ventures/'},
    {img: MagnusCapital, link: ''},
    {img: AVG, link: ''},
    {img: Ex, link: ''},
    {img: BigBrainHoldings, link: ''},
    {img: BlueWheel, link: ''},
    {img: Seedify_logo, link: ''},
    {img: CCK, link: ''},
    {img: CryptoOmg, link: ''},
    {img: CryptoPing, link: ''},
    {img: FrenchHunters, link: 'https://frenchhunters.ventures'},
    {img: Enjinstarter, link: ''},
    {img: GAP, link: 'https://www.greenaccesspartners.com/'},
    {img: LegionVentures, link: ''},
    {img: Onchain, link: 'https://onchain.gg/'},
    {img: Truepnl, link: 'https://truepnl.com/'},
    {img: Vespertine, link: 'https://www.vespertine.capital/'},
    {img: Whitelist, link: 'https://whitelistventures.com/'}
  ]

  const MEDIA = [
    {img: Ap, link: 'https://apnews.com/'},
    {img: AsiaOne, link: 'https://www.asiaone.com/'},
    {img: Benzinga, link: 'https://www.benzinga.com/'},
    {img: Bitcoinist, link: 'https://bitcoinist.com/'},
    {img: Coinquora, link: 'https://coinquora.com/'},
    {img: Fn, link: 'https://www.finanznachrichten.de/'},
    {img: Investing, link: 'https://www.investing.com/'},
    {img: Markerwatch, link: 'https://www.marketwatch.com/'},
    {img: Menafn, link: 'https://menafn.com/'},
    {img: Newsbtc, link: 'https://www.newsbtc.com/'},
    {img: Xzx, link: 'https://0xzx.com/'},
    {img: YahooFinance, link: 'https://finance.yahoo.com/'},
    {img: YahooMoney, link: 'https://money.yahoo.com/'},
    {img: YahooNews, link: 'https://news.yahoo.com/'},
    {img: Coinpeake, link: 'https://www.coinspeaker.com/'}
  ]


  const LAUNCHPADS = [
    {img: Bullperks, link: ''},
    {img: Oxbull, link: ''},
    {img: Enjinstarter, link: ''},
    {img: Ex, link: ''},
    {img: Seedify, link: ''},
    {img: GameStation, link: ''}
  ]

  const partnershipDesctop = [
    {header: ['PARTNERSHIP', 'MEDIA PARTNERSHIP', 'LAUNCHPADS'], partners: [PARTNERSHIP, MEDIA, LAUNCHPADS]}
  ]
  
  const adaptivePartners = [
    {header: ['PARTNERSHIP'], partners: [PARTNERSHIP],},
    {header: ['MEDIA PARTNERSHIP'], partners: [MEDIA],},
    {header: ['LAUNCHPADS'], partners: [LAUNCHPADS],}
  ]

  let [num, setNum] = React.useState(0)

  return(
    (window.innerWidth > 600 ? partnershipDesctop :  adaptivePartners).map((item, index) => (

    <div className='partnershipContainer' key={index}>
      <div className='partnerHeader'>
        {(item.header).map((item, indx) => (
          <button key={indx} onClick={() => setNum(indx)} className={(indx===num||window.innerWidth) < 600 && index===1 ? 'media_active active' : (indx===num||window.innerWidth) < 600 && 'active'}>{item}</button>
        ))}
      </div>
      <main>
        {(item.partners[window.innerWidth > 600 ? num : 0]).map((item, index) => (
          <div className='container'>
            <div className='light' />
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img key={index} src={item.img} alt="partner"/>
            </a>
            <div className='particles'>
              {[...Array(window.width > 1024 ? Math.floor(Math.random() * 4 + 4) : Math.floor(Math.random() * 2 + 3)).keys()].map((indx) => (
                  <div className='particle' key={indx} 
                  style={{background: '#00C2FF', 
                    marginTop: Math.floor(Math.random() * 90) - 25 + "%",
                    marginLeft: Math.floor(Math.random() * 5) + "%",
                    animationDuration: Math.floor(Math.random() * 30 + 8) + "s"
                  }}/>
              ))}
            </div>
          </div>
        ))}
      </main>
      {window.innerWidth > 600 &&
      <footer>
        <button>
          <img src={aLeft} alt="left arrow" onClick={() => num===0 ? setNum(2) : setNum(num-1)}/>
        </button>
        {[...Array(3).keys()].map((index) => (
          <div key={index} onClick={() => setNum(index)}  className={num === index && 'active'}/>
        ))}
        <button>
          <img src={aRight} alt="left arrow" onClick={() => num===2 ? setNum(0) : setNum(num+1)}/>
        </button>
      </footer>}
    </div>
    ))
  )
}