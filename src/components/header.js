import React, {useState} from 'react'
import Logo from '../assets/logo_gold.png'
import { Link } from 'react-router-dom';

import '../styles/header.scss'

export default function Header() {
  let [openMenu, setOpenMenu] = useState(false)
  
  const anchors = [
    {title: 'Roadmap', link: 'Roadmap'}, 
    {title: 'Team', link: 'Team'}, 
    {title: 'Tokenomics', link: 'Tokenomics'}
  ]

  let [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <header>
      <div className='topBarContainer'>
        <div className='topBar'>
          <Link to='/' className='logo'>
            <img src={Logo} alt="logo" />
          </Link>
          <div className='barCenter'>
            {anchors.map((item, index) => (
              <Link  
                key={index} to='/' onClick={() => {
                  setTimeout(() => {document.getElementById(item.link).scrollIntoView()}, 200)}}
                  onMouseUp={e => {e.target.style.fontSize = '16px'; e.target.style.filter = 'brightness(100%)'}}
                  onMouseDown={e => {e.target.style.fontSize = '13.76px'; e.target.style.filter = 'brightness(55%)'}}
                  onMouseLeave={e => {e.target.style.fontSize = '16px'; e.target.style.filter = 'brightness(100%)'}}>{item.title}</Link>
            ))}
          </div>
          <div className='additionalMenu'>
            <a href="https://docs.battleverse.io" target="_blank" rel="noopener noreferrer">Docs</a>
            <a href="https://battleverse.picipo.io" target="_blank" rel="noopener noreferrer">Marketplace</a>
          </div>
          <div className={openMenu ? 'openMenu active' : 'openMenu'}  onClick={() => {setOpenMenu(!openMenu)}}>
              <div />
              <div />
          </div>
        </div>
      </div>
      <div className='adaptiveMenuShadow' onClick={() => {setOpenMenu(!openMenu)}} style={{ zIndex: openMenu ? '99999' : '-9999999999999', backgroundColor: openMenu ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)', visibility: openMenu ? 'visible' : 'hidden'}} />
      {width<1024 && <div className='adaptiveMenu' style={{ top: openMenu ? '68px' : '-20em'}}>
        {anchors.map((item, index) => (
          <div key={index}>
            <Link to='/' onClick={() => {setTimeout(() => {document.getElementById(item.link).scrollIntoView()}, 200); setOpenMenu(!openMenu)}}>{item.title}</Link>
          </div>
        ))}
      </div>}
    </header>
  )
}