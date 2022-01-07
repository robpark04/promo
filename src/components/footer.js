import React from 'react' 
import '../styles/footer.scss'

import { Link } from 'react-router-dom';

import Discord from '../assets/footer/discord.svg'
import In from '../assets/footer/in.svg'
import Telegram from '../assets/footer/telegram.svg'
import Twitter from '../assets/footer/twitter.svg'
import Medium from '../assets/footer/medium.svg'
import Youtube from '../assets/footer/youtube.svg'

export default function Footer(){

  const footer = [
    {icon: Discord, link: 'https://discord.com/invite/HFVAnBS9qA'},
    {icon: In, link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof'},
    {icon: Telegram, link: 'https://t.me/battleverse_news'},
    {icon: Twitter, link: 'https://twitter.com/BattleVerse_io'},
    {icon: Medium, link: 'https://battleverse.medium.com/'},
    {icon: Youtube, link: 'https://www.youtube.com/c/BattleVerse/'}
  ]

  const links = [
    {value: 'Legal Notice & Disclaimers', to: 'legal_notice'},
    {value: 'Privacy policy', to: 'privacy_policy'}
  ]

  return(
    <footer className='footer'>
      <div className='footerContent'>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1%', paddingBottom: '1%'}}>
          {footer.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.icon} alt="icon" />
            </a>
          ))}
        </div>
        <p style={{marginTop: '1%'}}>Copyright © 2021. All Rights Reserved by BVGAME Limited</p>
        <div style={{marginTop: '0%', padding: '0.5% 0 3% 0', width: '30em'}}>
          {links.map((item, index) => (
            <Link key={index} to={item.to}
              onClick={() => setTimeout(() => {window.scrollTo(10,0)}, 200)}>
              {item.value}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}