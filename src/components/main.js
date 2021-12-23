import React from 'react' 
import '../styles/main.scss'
import Slider from "react-slick";

import Back from '../assets/key_art.png'
import Logo from '../assets/logo_gold.png'

import Shape from '../assets/Rectangle11.svg'

import frame1 from '../assets/frame0.png'
import frame2 from '../assets/frame1.png'
import frame3 from '../assets/frame2.png'

import Graphic from '../assets/graphic.png'
import Shroom from '../assets/shroom.png'

// CHARACTERS

import Bots from '../assets/slider/bots.png'
import Shrooms from '../assets/slider/shrooms.png'
import Races from '../assets/slider/races.png'
import Persons from '../assets/slider/persons.png'

// HOW TO PLAY 

import ShroomPlay from '../assets/how_to_play/shroom.png'
import Swords from '../assets/how_to_play/swords.png'
import Coins from '../assets/how_to_play/coins.png'
import Shield from '../assets/how_to_play/shield.png'

import FirstBorder from '../assets/how_to_play/1f.svg'
import SecondBorder from '../assets/how_to_play/2f.svg'
import ThirdBorder from '../assets/how_to_play/3f.svg'
import FourthBorder from '../assets/how_to_play/4f.svg'

import Bot from '../assets/how_to_play/bot.svg'
import Mashroom from '../assets/how_to_play/mashroom.svg'
import Question from '../assets/how_to_play/question.svg'

import SwordsIcon from '../assets/how_to_play/swords.svg'
import Flag from '../assets/how_to_play/flag.svg'
import Layers from '../assets/how_to_play/layers.svg'

import Point from '../assets/how_to_play/point.svg'
import Pick from '../assets/how_to_play/pick.svg'
import Settings from '../assets/how_to_play/setting.svg'

import Sword from '../assets/how_to_play/sword.svg'
import ShieldIcon from '../assets/how_to_play/shield.svg'
import Ways from '../assets/how_to_play/ways.svg'

// TEAM
import Alex from '../assets/team/Sasha.png'
import Alex1 from '../assets/team/Alex1.png'
import Sergey2 from '../assets/team/Sergey2.png'
import Pavel from '../assets/team/Pavel.png'
import Dima from '../assets/team/Dima.png'
import Egor from '../assets/team/Egor.png'

import Vlad from '../assets/team/Vlad.png'
import Kostya from '../assets/team/Kostya.png'
import Alex2 from '../assets/team/Alex2.png'
import Sergey from '../assets/team/Sergey.png'
import Ivan from '../assets/team/Ivan.png'
import Viktor from '../assets/team/Viktor.png'

// SERVICES 
import Linkedin from '../assets/services/linkedin.svg'
import Artstation from '../assets/services/artstation.svg'
import Behance from '../assets/services/behance.svg'
import Github from '../assets/services/github.svg'

// FOOTER
import Telegram from '../assets/services/telegram.svg'
import Discord from '../assets/services/discord.svg'
import Twitter from '../assets/services/twitter.svg'
import Medium from '../assets/services/medium.svg'

export default function Main(){

  const distribution = [
    {title: 'Ecosystem & Liquidity', procent: '41', color: 'ffd362'},
    {title: 'Strategic Sale', spanTitle: '$0.01', procent: '21', color: 'ccfd0c'},
    {title: 'Team', procent: '14', color: '0cfcb5'},
    {title: 'Marketing & Partnership', procent: '12,4', color: '2fa8ff'},
    {title: 'Seed Sale', spanTitle: '$0.01', procent: '6', color: '947aff'},
    {title: 'Public Sale', spanTitle: '$0.05', procent: '4,5', color: 'b641ff'},
    {title: 'Advisor', procent: '1', color: 'fe068b'},
    {title: 'Startup Sale Token', spanTitle: '$0.025', procent: '0,1', color: 'ff3216'},
  ]
  const missions = [
    {img: frame1, title: 'Infinite gaming Universe', description: 'Battle, become an adventurer or a merchant, own factories, plants, fields, groves, etc.'},
    {img: frame2, title: 'Play-to-earn mass adoption', description: 'Play and manage your game assets by interacting with different blockchains.'},
    {img: frame3, title: 'Meta-Governance, Council', description: 'BattleVerse will be open, transparent, and governed by the community.'}
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const slides = [
    {image: Bots, title: 'Baby Combat Bots', color: '#9C5FFF',
      desc: 'The main goal of Baby Combat Bots in BattleVerse is to humanize themselves. The uniqueness is determined by the following components: weapons, protection, platform.', 
    gen: [
      {genr: '1 GEN', state: 'SOLD OUT'},
      {genr: '2 GEN', state: 'SOON'},
      {genr: '3 GEN', state: 'SOON'}
    ], },
    {image: Shrooms, title: 'Battle shrooms', color: '#4CFF9E',
    desc: 'Originally a peace-loving race with the collective consciousness of the Shpores from the very center of the BattleVerse. Each Battle Shroom is endowed with a unique ability, depending on the region of origin and species: someone is stronger, someone is more agile, and someone does have poisonous or hallucinogenic properties.    ', 
    gen: [
      {genr: '1 GEN', state: 'ON SALE'},
      {genr: '2 GEN', state: 'PLANNED'},
      {genr: '3 GEN', state: 'PLANNED'}
    ], },
    {image: Races, title: 'Upcoming races', color: '#4CFFEA',
      desc: 'The BattleVerse is constantly expanding, new planets are opening up, and with them new races emerge.', 
      gen: [
        {genr: '1 GEN', state: 'PLANNED'},
      ], 
    },
    {image: Persons, info: 'CollaborationS with game projects' }
  ]

  const gameplay = [
    {image: ShroomPlay, border: FirstBorder, title: 'GET A CHARACTER',
      desc: 'Mint or purchase on the market',
      info: [
        {icon: Bot, text: 'Baby Combat Bots'},
        {icon: Mashroom, text: 'Battle Shrooms'},
        {icon: Question, text: 'More'}]
    },
    {image: Swords, border: SecondBorder, title: 'START YOUR GAME', 
      desc: 'Choose the best for you option',
      info: [
        {icon: SwordsIcon, text: 'PVP'},
        {icon: Flag, text: 'PVE'},
        {icon: Layers, text: 'Staking'}]
    },
    {image: Coins, border: ThirdBorder, title: 'PRODUCTION', 
    desc: 'Get areas and buildings to start manufacturing',
    info: [
      {icon: Point, text: 'Lands'},
      {icon: Pick, text: 'Mine resources'},
      {icon: Settings, text: 'Build more buildings'}]
    },
    {image: Shield, border: FourthBorder, title: 'TOURNAMENT', 
    desc: 'Fight to upgrade, breed, and win a prize',
    info: [
      {icon: Sword, text: 'Lands'},
      {icon: ShieldIcon, text: 'Mine resources'},
      {icon: Ways, text: 'Build more buildings'}]
    }
  ]

  const team = [
    {member: Alex, name: 'ALEXANDER SIMAKOV', position: 'CO-FOUNDER, CVO', icon: Linkedin, link: 'https://www.linkedin.com/in/simakov5/'},
    {member: Alex1, name: 'ALEX KOVALENKO', position: 'CO-FOUNDER, PRINCIPAL ARTIST', icon: Artstation, link: 'https://www.artstation.com/kovalexart'},
    {member: Sergey2, name: 'SERGEY BOLTUNOV', position: 'CMO', icon: Linkedin, link: 'https://www.linkedin.com/in/jimmipu'},
    {member: Pavel, name: 'PAVEL LEVCHUK', position: 'BLOCKCHAIN DEVELOPER', icon: Github, link: 'https://github.com/its5Q'},
    {member: Dima, name: 'DIMA BAGOW', position: 'PRODUCT MANAGER', icon: Linkedin, link: 'https://www.linkedin.com/mwlite/in/dimabagow'},
    {member: Egor, name: 'EGOR MIRONOV', position: 'UX/UI DESIGN', icon: Behance, link: 'https://www.behance.net/EgorMironov'},

    {member: Vlad, name: 'VLAD DRYAMOV', position: 'CO-FOUNDER, CEO', icon: Linkedin, link: 'https://www.linkedin.com/in/vlad-dryamov/'},
    {member: Kostya, name: 'KONSTANTIN KOVALENKO', position: 'CO-FOUNDER, CG GENERALIST', icon: Linkedin, link: 'https://www.linkedin.com/in/eistan'},
    {member: Alex2, name: 'ALEXANDER BOLONDZ', position: 'CTO', icon: Linkedin, link: 'https://www.linkedin.com/in/aleksander-bolondz-70101012b/'},
    {member: Sergey, name: 'SERGEY IVANOV', position: 'GAME DESIGNER', icon: Linkedin, link: 'https://www.linkedin.com/in/sergi-ivanov/'},
    {member: Ivan, name: 'IVAN GRIGORIEV', position: 'UNITY DEVELOPER', icon: Github, link: 'https://github.com/MagicProG'},
    {member: Viktor, name: 'VICTOR SOLTAN', position: 'FRONTEND DEVELOPER', icon: Github, link: 'https://github.com/VictorSoltan'},
  ]
  const footer = [
    {icon: Telegram, link: 'https://t.me/battleverse_news'},
    {icon: Discord, link: ''},
    {icon: Twitter, link: ''},
    {icon: Medium, link: ''}
  ]
  return(
    <div className='mainPage'>
      <header>
        {['DOC', 'Marketplace', 'Wallet', 'Onepage', 'We are on OpenSea'].map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            {true&&
            <div></div>}
          </div>
        ))}
      </header>    
      <div className='header' style={{ backgroundImage: `url(${Back})`}}>
        <img src={Logo} alt="logo"/>
        <button>WHITELIST</button>
      <div className='shadow' />
      </div>    
      <div className='preview'>
        <h1>MULTICHAIN PLAY-TO-EARN METAVERSE</h1>
        <p>Broaden your horizons of battling, farming, completing missions and quests at the intergalactic level</p>
      </div>
      <div className='mission' style={{ backgroundImage: `url(${Shape})`}}>
        <h1>OUR MISSION</h1>
        <div className='missions'>
          {missions.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="icon"/>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className='characters'>
        <h1>CHARACTERS</h1>
        <div className='slider'>
          <Slider {...settings} className="slider">
            {slides.map((item, index) => (
              <div key={index} className='botsFrame'>
                <img src={item.image} alt="bots" />
                <div>
                  <h1 style={{color: item.color}}>{item.title}</h1>
                  <p>{item.desc}</p>
                  {item.gen && item.gen.map((item, index) => (
                    <div key={index}>
                      <span>{item.genr}</span>
                      <span>{item.state}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      {/* <div>
        <h1>HOW TO PLAY</h1>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className='distribution'>
        <div className='distribution_graphic'>
          <div className='distribution_content'>
            <h1>$BVC TOKEN DISTRIBUTION</h1>
            <div className='graphic_infos'>
              {distribution.map((item, index) => (
                <div key={index} className='graphic_info'>
                  <div>
                    <h3 style={{color: '#'+item.color}}>{item.title}</h3>
                    {item.spanTitle &&
                    <span style={{color: '#'+item.color}}>{item.spanTitle}</span>}
                  </div>
                  <span style={{color: '#'+item.color}}>{item.procent+'%'}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={Graphic} alt="graphic" className='graphic'/>
        </div>
        <img className='shroom' src={Shroom} alt="graphic" />
      </div>
      <div className='team'>
        <div className='blockInfo'>
          <h1>TEAM</h1>
          <p>Highly qualified, expertized and energetic professionals 
          with experience in developing game projects</p>
        </div>
        <div className='members'> 
          {team.map((item, index) => (
            <div key={index} className='memberInfo'>
              <img className='memberPic' src={item.member} alt={item.name} />
              <div className='memberText'>
                <h4>{item.name}</h4>
                <span>{item.position}</span>
                <a href={item.link}>
                  <img src={item.icon} alt={item.link} />
                </a>
              </div>            
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <div>

        </div>
      </div> */}
      {/* <div>
        <h2>PARTNERSHIPS AND ADVISERS</h2>
        {[].map((item, index) => (
          <img />
        ))}
      </div>
      <div>
        <h2>TEAM</h2>
        {[].map((item, index) => (
          <div>
            <img />
            <h4></h4>
            <p></p>
            <img />
          </div>
        ))}
      </div> */}
      <footer>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1%'}}>
          {footer.map((item, index) => (
            <a key={index} href={item.link} style={{margin: '6%'}}>
              <img src={item.icon} alt="icon" />
            </a>
          ))}
        </div>
        <p style={{marginTop: '1%', paddingBottom: '1%'}}>Copyright © 2021. All Rights Reserved by BattleVerse</p>
      </footer>
    </div>  
  )
}