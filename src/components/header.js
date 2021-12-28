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

  return (
    <header>
      <div className='topBarContainer'>
        <div className='topBar'>
          <Link to='battleVersePromo'>
            <img src={Logo} alt="logo" />
          </Link>
          <div className='barCenter'>
            {['Roadmap', 'Team', 'Backers'].map((item, index) => (
              <div key={index}>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className='additionalMenu'>
            <span>Docs</span>
            <span>Marketplace</span>
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
              <Link to='#'>
                MINT
              </Link>
              <Link to='#'>
                BUY
              </Link>
            </div>
          </div>
        </div>
        <footer>
          {[Discord, In, Telegram, Twitter, Medium].map((item, index) => (
            <div key={index}>
              <img src={item} alt="icon" />
            </div>
          ))}
        </footer>
      </div>
      <div className='adaptiveMenuShadow' style={{ zIndex: openMenu ? '99999' : '-1000000', backgroundColor: openMenu ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)'}} />
      <div className='adaptiveMenu' style={{ left: openMenu ? '0%' : '-100%'}}>
        {['Roadmap', 'Team', 'Backers'].map((item, index) => (
          <div key={index}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </header>
  )
}