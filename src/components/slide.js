import React from 'react' 
import '../styles/slide.scss'

import Logo from '../assets/logo_gold.png'
import Top3 from '../assets/slider/top3.png'
import Back from '../assets/slider/back.png'
import frame1 from '../assets/slider/frame1_c.png'
import frame2 from '../assets/slider/frame2_c.png'
import frame3 from '../assets/slider/frame3_c.png'
import Shape from '../assets/slider/Rectangle11.svg'
import Shape0 from '../assets/slider/Rectangle10.svg'

export default function slide(){

  const missions = [
    {img: frame1, title: 'Infinite gaming Universe', description: 'Battle, become an adventurer or a merchant, own factories, plants, fields, groves, etc.'},
    {img: frame2, title: 'Play-to-earn mass adoption', description: 'Play and manage your game assets by interacting with different blockchains.'},
    {img: frame3, title: 'Meta-Governance, Council', description: 'BattleVerse will be open, transparent, and governed by the community.'}
  ]

  const features = ['Metaverse expansion',
    'In-dApp functionality', 
    'Gameplay scalability',
    'Battle funding system',
    'Negligible fees on Polygon',
    'Cross-chain functionality',
    'Lead the whole race ',
    'Quadratic voting',
    'Make Battleverse better']

  return(
    <div className='slider'>
      <div className="header" style={{ backgroundImage: `url(${Back})`}}>
        <header>
          <img src={Logo} alt="logo"/>
          <img src={Top3} alt="logo"/>
        </header>
        <h1>MULTICHAIN PLAY-TO-EARN METAVERSE</h1>
        <p>Broaden your horizons of battling, farming, completing missions and quests at the intergalactic level</p>
      </div>
      <div className='mission' style={{ backgroundImage: `url(${Shape})`}}>
        <h4>OUR MISSION</h4>
        <div className='missions'>
          {missions.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="icon"/>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}