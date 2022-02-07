import React from 'react' 
import '../styles/partnership.scss'

import First from '../assets/partnership/1.png'
import Second from '../assets/partnership/2.png'
import Third from '../assets/partnership/3.png'
import Fourth from '../assets/partnership/4.png'
import Fifth from '../assets/partnership/5.png'
import Sixt from '../assets/partnership/6.png'
import Seven from '../assets/partnership/7.png'

import aLeft from '../assets/partnership/arrowLeft.svg'
import aRight from '../assets/partnership/arrowRight.svg'

export default function Partnership() {

  const partners = [
    {img: First, link: 'https://onchain.gg/'}, 
    {img: Second, link: 'https://truepnl.com/'}, 
    {img: Third, link: 'https://frenchhunters.ventures/'}, 
    {img: Fourth, link: 'https://www.vespertine.capital/'}, 
    {img: Fifth, link: 'https://www.greenaccesspartners.com/'}, 
    {img: Sixt, link: 'https://whitelistventures.com/'}, 
    {img: Seven, link: 'https://2a.ventures/'}
  ]

  let [num, setNum] = React.useState(0)

  return(
    <div className='partnershipContainer'>
      <div className='partnerHeader'>
        {['PARTNERSHIP', 'MEDIA PARTNERSHIP', 'LAUNCHPADS'].map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
      <main>
        {partners.map((item, index) => (
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
      <footer>
        <button>
          <img src={aLeft} alt="left arrow" />
        </button>
        {[...Array(3).keys()].map((index) => (
          <div key={index} className={num === index && 'active'}/>
        ))}
        <button>
          <img src={aRight} alt="left arrow" />
        </button>
      </footer>
    </div>
  )
}