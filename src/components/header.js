import React, {useState, Suspense, useEffect} from 'react'
import Logo from '../assets/logo_gold.png'
import { Link } from 'react-router-dom';

import '../styles/header.scss'

import Back from '../assets/header/nft.svg'

// import {Canvas, useLoader, useFrame } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { OrbitControls } from '@react-three/drei'
// import * as THREE from 'three'
// import Shroom from '../assets/header/Shroom_v05.glb'

import Persons from '../assets/header/image.png'
import Top3 from '../assets/header/top3.png'


import Discord from '../assets/services/discord.svg'
import In from '../assets/services/in.svg'
import Telegram from '../assets/services/telegram.svg'
import Twitter from '../assets/services/twitter.svg'
import Medium from '../assets/services/medium.svg'

// function Scene() {
//   const gltf = useLoader(GLTFLoader, Shroom)

//   return (
//       <primitive object={gltf.scene} scale={4} position={[0, -1, 0]}/>
//   )
// }


export default function Header() {
  let [openMenu, setOpenMenu] = useState(false)
  
  useEffect(() => {
    if(openMenu){
      document.querySelector('body').style.overflow = 'hidden'
    }else{
      document.querySelector('body').style.overflow = 'auto'
    }
  }, [openMenu])

  const anchors = [
    {title: 'Roadmap', link: '#Roadmap'}, 
    {title: 'Team', link: '#Team'}, 
    {title: 'Tokenomics', link: '#Tokenomics'}
  ]
  const footer = [
    {icon: Discord, link: 'https://discord.com/invite/HFVAnBS9qA'},
    {icon: In, link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof'},
    {icon: Telegram, link: 'https://t.me/battleverse_news'},
    {icon: Twitter, link: 'https://twitter.com/BattleVerse_io'},
    {icon: Medium, link: 'https://battleverse.medium.com/'}
  ]
  return (
    <header>
      <div className='topBarContainer'>
        <div className='topBar'>
          <Link to='/' className='logo'>
            <img src={Logo} alt="logo" />
          </Link>
          <div className='barCenter'>
            {anchors.map((item, index) => (
              <div key={index}>
                <a href={item.link}>{item.title}</a>
              </div>
            ))}
          </div>
          <div className='additionalMenu'>
            <a href="https://docs.battleverse.io">Docs</a>
            <a href="https://battleverse.picipo.io">Marketplace</a>
          </div>
          <div className={openMenu ? 'openMenu active' : 'openMenu'}  onClick={() => setOpenMenu(!openMenu)}>
              <div />
              <div />
          </div>
        </div>
      </div>
      <div className='contentContainer'>
        <div className='content' style={{ backgroundImage: `url(${Back})` }}>
          <div className='info'>
            <h1>Multichain
              Play-To-Earn Metaverse</h1>
            <p>Broaden your horizons of battling, farming, completing
              missions and quests at the intergalactic level</p>
            <img src={Top3} alt="top3" />
          </div>
          <div className='threeD'>
            <div className='lightLeft'/>
            <div className='lightRight'/>
            <img src={Persons} alt="persons" />
            <div className='links'>
              <a href='https://opensea.io/collection/baby-combat-bots-g1'>
                BUY
              </a>
              <a href='http://shrooms.battleverse.io'>
                MINT
              </a>
            </div>
          </div>
        </div>
        <footer>
          {footer.map((item, index) => (
            <a href={item.link} key={index}>
              <img src={item.icon} alt="icon" />
            </a>
          ))}
        </footer>
      </div>
      <div className='adaptiveMenuShadow' style={{ zIndex: openMenu ? '99999' : '-1000000', backgroundColor: openMenu ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'}} />
      <div className='adaptiveMenu' style={{ left: openMenu ? '0%' : '-100%'}}>
        {anchors.map((item, index) => (
          <div key={index}>
            <a onClick={() => setOpenMenu(!openMenu)} href={item.link}>{item.title}</a>
          </div>
        ))}
      </div>
    </header>
  )
}