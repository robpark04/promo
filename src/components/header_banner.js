import React from 'react' 

import '../styles/header_banner.scss'

// PARTICLES 
import Blue from '../assets/header/particles/blue.svg'
import Blue1 from '../assets/header/particles/blue1.svg'
import Blue2 from '../assets/header/particles/blue2.svg'
import Blue3 from '../assets/header/particles/blue3.svg'
import Blue4 from '../assets/header/particles/blue4.svg'

import Green from '../assets/header/particles/green.svg'
import Green1 from '../assets/header/particles/green2.svg'
import Green2 from '../assets/header/particles/green3.svg'

import Purple1 from '../assets/header/particles/purple1.svg'
import Purple2 from '../assets/header/particles/purple2.svg'
import Purple3 from '../assets/header/particles/purple3.svg'
import Purple4 from '../assets/header/particles/purple4.svg'

import Particles from '../assets/header/particles.svg'
import Video from '../assets/header/shroom-anim_02_1.mp4'
import VideoAdaptive from '../assets/header/shroom-anim_02.mp4'
import Top3 from '../assets/header/top3.png'

import Discord from '../assets/services/discord.svg'
import In from '../assets/services/in.svg'
import Telegram from '../assets/services/telegram.svg'
import Twitter from '../assets/services/twitter.svg'
import Medium from '../assets/services/medium.svg'

export default function HeaderBanner() {

  let blueParticles = [
    Blue,
    Blue1,
    Blue2,
    Blue3,
    Blue4
  ]

  let greenParticles = [ 
    Green, 
    Green1, 
    Green2 ]

  let purpleParticles = [ 
    Purple1, 
    Purple2, 
    Purple3, 
    Purple4 ]

  const footer = [
    {icon: Discord, color: '#525FFF',
      link: 'https://discord.com/invite/HFVAnBS9qA'},
    {icon: In, color: '#00A6FF',
      link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof'},
    {icon: Telegram, color: '#00A7FF',
      link: 'https://t.me/battleverse_news'},
    {icon: Twitter, color: '#0084FF',
      link: 'https://twitter.com/BattleVerse_io'},
    {icon: Medium, color: '#000000', 
      link: 'https://battleverse.medium.com/'}
  ]

  let [width, setWidth] = React.useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return(
    <div className='contentContainer'>
      <div className='content'>
        <div className='particlesAnime'>
          <div className='blueParticles'>
            {blueParticles.map((item, index) => (
              <img key={index} src={item} alt="particle" />
            ))}
          </div>
          <div className='greenParticles'>
            {greenParticles.map((item, index) => (
              <img key={index} src={item} alt="particle"/>
            ))}
          </div>
          <div className='purpleParticles'>
            {purpleParticles.map((item, index) => (
              <img key={index} src={item} alt="particle"/>
            ))}
          </div>          
        </div>
        <div className='info'>
          <h1>Multichain
            Play-To-Earn Metaverse</h1>
          <p>Broaden your horizons of battling, farming, completing
            missions and quests at the intergalactic level</p>
          <img src={Top3} alt="top3" />
        </div>
        <div className='threeD'>
          <div style={{ backgroundImage: `url(${Particles})`}} className='particles'/>
          <video controls={false} src={window.innerWidth > 1024 ? Video : VideoAdaptive} loop={true} muted={true} autoPlay={true} playsInline={true} />            
          <div className='links'>
            {[{link: 'http://shrooms.battleverse.io', value: 'MINT'}, {link: 'https://opensea.io/collection/baby-combat-bots-g1', value: 'BUY'}].map((item, index) => (
              <a key={index} 
                onMouseDown={e => {e.target.style.fontSize = '16px'; e.target.style.marginInline = '2px'; e.target.style.filter = 'brightness(85%)'}}
                onMouseLeave={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
                onMouseUp={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
                href={item.link} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer>
        {footer.map((item, index) => (
          <a onMouseEnter={e => {e.target.style.background = item.color}} 
            onMouseLeave={e => {e.target.style.background = '#122632'; e.target.style.padding = width>800? '0.7em' : '0.6em'; e.target.style.margin = width>800? '0em 1em 0em 0em' : '0em 0.8em 0em 0em'; e.target.style.filter = 'brightness(100%)'}} 
            onMouseDown={e => {e.target.style.padding = width>800? '0.6em':'0.5em'; e.target.style.margin = width>800? '0.1em 1.1em 0.1em 0.1em' : '0.1em 0.9em 0.1em 0.1em'; e.target.style.filter = 'brightness(55%)'}} 
            onMouseUp={e => {e.target.style.padding = width>800? '0.7em' : '0.6em'; e.target.style.margin = width>800? '0em 1em 0em 0em' : '0em 0.8em 0em 0em'; e.target.style.filter = 'brightness(100%)'}} 
            href={item.link} key={index} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt="icon" />
          </a>
        ))}
      </footer>
    </div>
  )
}