import React, { useState } from 'react'
import '../styles/main_page.scss'

import HeaderBanner from '../components/header_banner';
import Characters from '../components/characters';
import Roadmap from '../components/roadmap';
import Partnership from '../components/partnership';


// CHARACTERS
import frame1 from '../assets/mission/frame0.png'
import frame2 from '../assets/mission/frame1.png'
import frame3 from '../assets/mission/frame2.png'

import Gaypad from '../assets/mission/gaypad.png'

import Cube from '../assets/mission/cube.png'
import Cube1 from '../assets/mission/cube1.png'
import Cube2 from '../assets/mission/cube2.png'

import Blockchain from '../assets/mission/blockchain.png'

// CHARACTERS
import SwordSvg from '../assets/sword.svg'
import ShieldSvg from '../assets/shield.svg'
import Vector from '../assets/vectors.svg'

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
import Building from '../assets/how_to_play/building.svg'

// DISTRIBUTION 
import Eco from '../assets/distribution/eco.svg'
import Token from '../assets/distribution/token.svg'
import Reserve from '../assets/distribution/reserve.svg'
import Team from '../assets/distribution/team.svg'
import Marketing from '../assets/distribution/marketing.svg'
import Liq from '../assets/distribution/liq.svg'
import Advisor from '../assets/distribution/advisor.svg'

import Shape0 from '../assets/distribution/Star.svg'
import Shape1 from '../assets/distribution/Star1.svg'
// import Shape2 from '../assets/distribution/Star2.svg'
import Shape3 from '../assets/distribution/Star3.svg'
// import Shape4 from '../assets/distribution/Star4.svg'
// import Shape5 from '../assets/distribution/Star5.svg'
import Shape6 from '../assets/distribution/Star6.svg'

import Mobile from '../assets/distribution/mobile.svg'

// TEAM
import TeamBack from '../assets/team/Paricles.svg'

import Alex from '../assets/team/Alex.png'
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

export default function Main() {

  const missions = [
    { img: frame1, imgs: [Gaypad], title: 'Infinite gaming Universe', description: 'Battle, become an adventurer or a merchant, own factories, plants, fields, groves, etc.', color: '#00FF66', particlesNumb: 3 },
    { img: frame2, imgs: [Cube, Cube1, Cube2], title: 'Play-to-earn mass adoption', description: 'Play and manage your game assets by interacting with different blockchains.', color: '#FF36A3', particlesNumb: 2 },
    { img: frame3, imgs: [Blockchain], title: 'Meta-Governance, Council', description: 'BattleVerse will be open, transparent, and governed by the community.', color: '#00C2FF', particlesNumb: 4 }
  ]

  const gameplay = [
    {
      image: ShroomPlay, border: FirstBorder, title: 'GET A CHARACTER',
      color: '#00FF66',
      desc: 'Mint or purchase on the market',
      info: [
        { icon: Bot, text: 'Baby Combat Bots', desc: 'Cute powerful metal baby bots' },
        { icon: Mashroom, text: 'Battle Shrooms', desc: 'Live brave funny warlike mushrooms' },
        { icon: Question, text: 'More', desc: 'Upcoming races' }
      ]
    },
    {
      image: Swords, border: SecondBorder, title: 'START YOUR GAME',
      color: '#FF36A3',
      desc: 'Choose the best for you option',
      info: [
        { icon: SwordsIcon, text: 'PVP', desc: 'Spectacular arena battles and exciting platfrom races' },
        { icon: Flag, text: 'PVE', desc: 'Explore territories, complete missions, find rare resources and artifacts' },
        { icon: Layers, text: 'Staking', desc: 'Stable passive earnings and prize drawing' }
      ]
    },
    {
      image: Coins, border: ThirdBorder, title: 'PRODUCTION',
      color: '#00C2FF',
      desc: 'Get areas and buildings to start manufacturing',
      info: [
        { icon: Point, text: 'Lands', desc: 'Buying, selling, renting and leasing plots of land' },
        { icon: Pick, text: 'Mine resources', desc: 'Extraction of resources for sale or production' },
        { icon: Settings, text: 'Production of components', desc: 'Production of chips for upgrading characters' },
        { icon: Building, text: 'Build more buildings', desc: 'Construction of productions to get more earnings' }
      ]
    },
    {
      image: Shield, border: FourthBorder, title: 'TOURNAMENT',
      color: '#c98e18',
      desc: 'Fight to upgrade, breed, and win a prize',
      info:
        { icon: [SwordSvg, ShieldSvg, Vector], title: 'Upgrade your characters' }
    }
  ]

  let [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  const distribution = [
    Shape0, Shape1, Shape1, Team,
    Eco, Reserve, Token, Shape0, null,
    Shape0, Marketing, Shape6, Liq,
    Shape0, Advisor, Shape3]

  // const distributionAdapt = [
  //   Shape0, Shape1, Eco, Shape0,
  //   Shape4, Token, Team, Shape2, Shape3,
  //   Reserve, Marketing, Shape6, Shape3,
  //   Liq, Advisor, Shape3, null, Shape3, null, Shape5
  // ]

  const team = [
    { member: Alex, name: 'ALEXANDER SIMAKOV', position: 'CO-FOUNDER, CVO', icon: Linkedin, link: 'https://www.linkedin.com/in/simakov5/' },
    { member: Alex1, name: 'ALEXEY KOVALENKO', position: 'CO-FOUNDER, PRINCIPAL ARTIST', icon: Artstation, link: 'https://www.artstation.com/kovalexart' },
    { member: Kostya, name: 'KONSTANTIN KOVALENKO', position: 'CO-FOUNDER, CG GENERALIST', icon: Linkedin, link: 'https://www.linkedin.com/in/eistan' },
    { member: Vlad, name: 'VLAD DRYAMOV', position: 'CO-FOUNDER, CEO', icon: Linkedin, link: 'https://www.linkedin.com/in/vlad-dryamov/' },

    { member: Sergey2, name: 'SERGEI BOLTUNOV', position: 'CMO', icon: Linkedin, link: 'https://www.linkedin.com/in/jimmipu' },
    { member: Sergey, name: 'SERGEI IVANOV', position: 'GAME DESIGNER', icon: Linkedin, link: 'https://www.linkedin.com/in/sergi-ivanov/' },
    { member: Pavel, name: 'PAVEL LEVCHUK', position: 'BLOCKCHAIN DEVELOPER', icon: Github, link: 'https://github.com/its5Q' },
    { member: Alex2, name: 'ALEXANDER BOLONDZ', position: 'CTO', icon: Linkedin, link: 'https://www.linkedin.com/in/aleksander-bolondz-70101012b/' },

    { member: Dima, name: 'DIMA BAGOW', position: 'PRODUCT MANAGER', icon: Linkedin, link: 'https://www.linkedin.com/mwlite/in/dimabagow' },
    { member: Ivan, name: 'IVAN GRIGORIEV', position: 'UNITY DEVELOPER', icon: Github, link: 'https://github.com/MagicProG' },
    { member: Viktor, name: 'VICTOR SOLTAN', position: 'FRONTEND DEVELOPER', icon: Github, link: 'https://github.com/VictorSoltan' },
    { member: Egor, name: 'EGOR MIRONOV', position: 'UX/UI DESIGN', icon: Behance, link: 'https://www.behance.net/EgorMironov' },
  ]


  return (
    <div className='mainPage'>
      <HeaderBanner />
      <div className='mission'>
        <h1>OUR MISSION</h1>
        <div className='missions'>
          {missions.map((item, index) => (
            <div key={index}>
              <div className='light' style={{ background: item.color }} />
              <div className='icons'>
                {(item.imgs).map((elem, index) => (
                  <img src={elem} key={index} alt="gold shape"/>
                ))}
              </div>
              <img className='strangeForm' src={item.img} alt="icon"  />
              <div className='particles'>
                {[...Array(item.particlesNumb).keys()].map((index) => (
                  <div className='particle' key={index} style={{background: item.color}}/>
                ))}
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Characters />
      <div className="howToPlay">
        <h1>HOW TO PLAY</h1>
        <div className="howToPlayContent">
          {gameplay.map((item, index) => (
            <div key={index} className='gameSteps'>
              <div className='light' style={{ background: item.color }} />
              <img src={item.image} alt={item.desc} className='mainPic' />
              <div className='gameStepsInfo'>
                <img src={item.border} alt="border" className='border' />
                <div className='gameInfo'>
                  <h3>{item.title}</h3>
                  <p className='description'>{item.desc}</p>
                  <main>
                    {item.info.length ? item.info.map((elem, index) => (
                      <div key={index} className='stepInfo'>
                        <div>
                          <img src={elem.icon} alt="icon" />
                          <h4>{elem.text}</h4>
                        </div>
                        <p>{elem.desc}</p>
                      </div>
                    )) :
                      <div className='adittionalIcons'>
                        <div className='icons'>
                          {item.info.icon.map((elem, index) => (
                            <img key={index} src={elem} alt="icon" />
                          ))}
                        </div>
                        <h4>{item.info.title}</h4>
                      </div>}
                  </main>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='distribution' id="Tokenomics">
        <h1>TOKEN DISTRIBUTION</h1>
        <div className='canvas'>
          {width > 600 ? distribution.map((item, index) => (
            <div key={index} className="comb">
              <img src={item} alt="" />
            </div>
          ))
        : <img src={Mobile} alt="mobileDist" className='mobileDist'/>}
        </div>
      </div>
      <Roadmap />
      <Partnership />
      <div className='team' id="Team">
        <div className='blockInfo'>
          <h1>TEAM</h1>
          <p>Highly qualified, expertized and energetic professionals
            with experience in developing game projects</p>
        </div>
        <div className='members' style={{ backgroundImage: `url(${TeamBack})` }}>
          {team.map((item, index) => (
            <div key={index} className='memberInfo'>
              <img className='memberPic' src={item.member} alt={item.name} />
              <div className='memberText'>
                <h4>{item.name}</h4>
                <span>{item.position}</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.icon} alt={item.link} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}