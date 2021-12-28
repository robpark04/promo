import React from 'react' 
import '../styles/footer.scss'

import { Link } from 'react-router-dom';

import Discord from '../assets/footer/discord.svg'
import In from '../assets/footer/in.svg'
import Telegram from '../assets/footer/telegram.svg'
import Twitter from '../assets/footer/twitter.svg'
import Medium from '../assets/footer/medium.svg'

export default function Footer(){

  const footer = [
    {icon: Discord, link: ''},
    {icon: In, link: ''},
    {icon: Telegram, link: 'https://t.me/battleverse_news'},
    {icon: Twitter, link: 'https://twitter.com/BattleVerse_io'},
    {icon: Medium, link: ''}
  ]

  return(
    <footer className='footer'>
      <div className='footerContent'>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1%', paddingBottom: '1%'}}>
          {footer.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.icon} alt="icon" />
            </a>
          ))}
        </div>
        <p style={{marginTop: '1%'}}>Copyright © 2021. All Rights Reserved by BVGAME Limited</p>
        <p style={{paddingBottom: '1%'}} >New Horizon Building, Ground Floor, 3.5 Miles Philip S.W. Goldson Highway, Belize City, Belize</p>
        <Link style={{paddingBottom: '1%'}} to='legal_notice'>
          Legal Notice & Disclaimers
        </Link>
        <Link style={{marginTop: '1%', paddingBottom: '2%'}} to='privacy_policy'>
          Privacy policy
        </Link>
      </div>
    </footer>
  )
}