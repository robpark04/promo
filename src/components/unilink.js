import React from 'react' 
import '../styles/unilink.scss'
import Logo from '../assets/logo_gold.png'

import Lanchpad1 from '../assets/unilink/lanchpad1.png'
import Lanchpad2 from '../assets/unilink/lanchpad2.png'

import Frame5872 from '../assets/unilink/Frame5872.svg'
import Frame5873 from '../assets/unilink/Frame5873.svg'

import Discord from '../assets/services/discord.svg'
import In from '../assets/services/in.svg'
import Telegram from '../assets/services/telegram.svg'
import Twitter from '../assets/services/twitter.svg'
import Medium from '../assets/services/medium.svg'
import Youtube from '../assets/services/youtube.svg'
import BV from '../assets/services/bv_favicon.svg'

import DiscordFooter from '../assets/footer/discord.svg'
import InFooter from '../assets/footer/in.svg'
import TelegramFooter from '../assets/footer/telegram.svg'
import TwitterFooter from '../assets/footer/twitter.svg'
import MediumFooter from '../assets/footer/medium.svg'
import YoutubeFooter from '../assets/footer/youtube.svg'

export default function Unilink() {

  const links = [
    { icon: Twitter, title: 'Twitter', link: 'https://twitter.com/BattleVerse_io' },
    { icon: Discord, title: 'Discord', link: 'https://discord.com/invite/HFVAnBS9qA' },
    { icon: Telegram, title: 'Telegram', link: 'https://t.me/battleverse_news' },
    { icon: Telegram, title: 'Telegram Chat', link: 'https://t.me/battleverse_io' },
    { icon: Medium,  title: 'Medium', link: 'https://battleverse.medium.com/' },
    { icon: Youtube,  title: 'Youtube', link: 'https://www.youtube.com/c/BattleVerse/' },
    { icon: In, title: 'Linkedin', link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof' },
    { icon: BV, title: 'Website', link: 'https://battleverse.io' }
  ]

  const footer = [
    {icon: DiscordFooter, link: 'https://discord.com/invite/HFVAnBS9qA'},
    {icon: InFooter, link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof'},
    {icon: TelegramFooter, link: 'https://t.me/battleverse_news'},
    {icon: TwitterFooter, link: 'https://twitter.com/BattleVerse_io'},
    {icon: MediumFooter, link: 'https://battleverse.medium.com/'},
    {icon: YoutubeFooter, link: 'https://www.youtube.com/c/BattleVerse/'}
  ]

  window.onload = function () {
    document.body.style.width = '100%'
    document.body.style.height = '100%'
    document.body.style.overflowX = 'hidden'
    document.body.style.background = '#07161f'
    document.body.style.position = 'absolute'
    
  }

  return(
    <div className='unilink'>
      <div className='unilinkHeader'>
        <main>
          <img src={Lanchpad1} alt="logo"/>
          <img src={Lanchpad2} alt="logo"/>
        </main>
        <div className='shadow' />
      </div>
      <div className='unilinkСontent'>
        <main>
          <img src={Logo} alt="logo" className='logo'/>
          <h1>Multichain</h1>
          <h1>Play-To-Earn</h1> 
          <h1>Metaverse</h1>
          <p>Broaden your horizons of battling, farming, completing missions and quests at the intergalactic level</p>
          {links.map((item, index) => (
            <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt={item.title} />
              <span className={index===4 && 'telegram'}>
                {item.title}
              </span>
            </a>
          ))}
        </main>
        <footer>
          <div className='links'>
            {footer.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.icon} alt="icon" />
              </a>
            ))}
          </div>
          <p>Copyright © 2021. All Rights Reserved by BVGAME Limited</p>
          <div className='basement'>
            <img src={Frame5873} alt="logo"/>            
            <img src={Frame5872} alt="logo"/>
          </div>
        </footer>      
      </div>
    </div>  
  )
}