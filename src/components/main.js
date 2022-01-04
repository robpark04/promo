import React, { useState } from 'react'
import '../styles/main.scss'

import HeaderBanner from './header_banner';

import Slider from "react-slick";

import frame1 from '../assets/frame0.png'
import frame2 from '../assets/frame1.png'
import frame3 from '../assets/frame2.png'

// CHARACTERS
import SwordSvg from '../assets/sword.svg'
import ShieldSvg from '../assets/shield.svg'
import Vector from '../assets/vectors.svg'

import Prev from '../assets/slider/previeus.svg'
import Next from '../assets/slider/next.svg'

import Bots from '../assets/slider/bots.png'
import Shrooms from '../assets/slider/shrooms.png'
import Races from '../assets/slider/races.png'
import Persons from '../assets/slider/persons.png'

import OpenSea from '../assets/slider/open_sea.svg'

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
import Shape2 from '../assets/distribution/Star2.svg'
import Shape3 from '../assets/distribution/Star3.svg'
import Shape4 from '../assets/distribution/Star4.svg'
import Shape5 from '../assets/distribution/Star5.svg'
import Shape6 from '../assets/distribution/Star6.svg'


// ROADMAP 
import Left from '../assets/roadmap/left.svg'
import Right from '../assets/roadmap/right.svg'

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
    { img: frame1, title: 'Infinite gaming Universe', description: 'Battle, become an adventurer or a merchant, own factories, plants, fields, groves, etc.', color: '#00FF66' },
    { img: frame2, title: 'Play-to-earn mass adoption', description: 'Play and manage your game assets by interacting with different blockchains.', color: '#FF36A3' },
    { img: frame3, title: 'Meta-Governance, Council', description: 'BattleVerse will be open, transparent, and governed by the community.', color: '#00C2FF' }
  ]

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <img src={Prev} alt="next"
        className={'slick-arrow slick-prev arrow'}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <img src={Next} alt="next"
        className={'slick-arrow slick-next arrow'}
        style={{ ...style, display: "block", }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
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
    {
      image: Bots, title: 'Baby Combat Bots', color: '#9C5FFF',
      desc: 'The main goal of Baby Combat Bots in BattleVerse is to humanize themselves.',
      secondDesc: 'The uniqueness is determined by the following components: weapons, protection, platform.',
      gen: [
        { genr: '1 GEN', state: 'SOLD OUT', color: '#FFFFFF', txtColor: 'black', link: 'https://opensea.io/collection/baby-combat-bots-g1' },
        { genr: '2 GEN', state: 'SOON' },
        { genr: '3 GEN', state: 'SOON' }
      ],
    },
    {
      image: Shrooms, title: 'Battle shrooms', color: '#4CFF9E',
      desc: 'Originally a peace-loving race with the collective consciousness of the Shpores from the very center of the BattleVerse.',
      secondDesc: 'Each Battle Shroom is endowed with a unique ability, depending on the region of origin and species: someone is stronger, someone is more agile, and someone does have poisonous or hallucinogenic properties.',
      gen: [
        { genr: '1 GEN', state: 'ON SALE', color: '#10C684', link: 'http://shrooms.battleverse.io' },
        { genr: '2 GEN', state: 'PLANNED' },
        { genr: '3 GEN', state: 'PLANNED' }
      ],
    },
    {
      image: Races, title: 'Upcoming races', color: '#4CFFEA',
      desc: 'The BattleVerse is constantly expanding, new planets are opening up, and with them new races emerge.',
      gen: [
        { genr: '1 GEN', state: 'PLANNED' },
      ],
    },
    { image: Persons, info: 'COLLABORATIONS WITH GAME PROJECTS' }
  ]

  const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16))

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

  const distributionAdapt = [
    Shape0, Shape1, Eco, Shape0,
    Shape0, Token, Team, Shape0, Shape3,
    Reserve, Marketing, Shape6, Shape3,
    Liq, Advisor, Shape3, null, Shape3, null, Shape3
  ]

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

  const settingsRoadmap = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  let [activeSlide, setActiveSlide] = useState(0)

  const roadmap = [
    {
      year: 2021,
      q_blocks: [
        { info: null },
        {
          info: ['initial idea', 'Team building', 'First Baby Combat Bots concepts',
            'First website and generator script versions']
        },
        {
          info: ['Team building', 'Landing page and concepts',
            '8k Discord community',
            'Baby Combar Bots G1 sold out in 5 min',
            'Team expansion',
            'BattleVerse concept development',
            'Detailed gameplay explainer video',
            'First game code prototype'
          ]
        },
        {
          info: ['White paper and tokenomics presentation',
            'Battle Shrooms G1 launch',
            'Seed and private token sale launch',
            'Game beta test']
        },
      ]
    },



    {
      year: 2022,
      q_blocks: [
        {
          info: ['PvP battles launch', 'Farming pool launch',
            'Baby Combat Bots Gen 2&3 launch',
            'Smart contracts audit',
            'Public sale and IDO', 'In-game marketplace launch',
            'Observer funding launch',
            'Battle Shrooms G2 and 3 launch',
            'PvE mode launch',
            'Cross-chains transfers launch'
          ]
        },
        {
          info: [
            'Game ecosystem extension',
            'Referral system launch',
            'Bounty program launch',
            'Franchise program launch',
            'BattleVerse Global Arena launch']
        },
        {
          info: ['Mobile App for Android and iOS', 'Adding two new races',
            'Adding new races in collaboration with game projects',
            'Meta governance launch']
        },
        {
          info: ['Expansion of PvE mode',
            'Land sales launch',
            'Buildings’ construction',
            'Resources’ production',
            'Quests and missions in PvE mode',
            'Special missions in PvE mode',
            'Exploration of new systems, planets and territories',
          ]
        },
      ]
    },
    {
      year: 2023,
      q_blocks: [
        {
          info: ['Mobile versions update', 'Desktop versions for Mac, Windows and Linux launch',
          ]
        },
        {
          info: [
            'VR/AR functionality for Android and iOs',
            'In-game entrepreneurship and large-scale production cycles (PVE)',
            'Character specialties']
        },
        {
          info: ['Generation of special NPCs (PVE)', 'Introduction of bases with a bar',
            'In-dApps functionality',
            'Creation of clans, guilds, organizations, cooperatives, and corporations',
            'Direct exchange of resources within clans']
        },
        {
          info: ['Clan missions',
            'Hunting for large dangerous NPCs',
            'Clan wars and seizure of territory',
            'Create your own arenas and get profit',
            'Creation of your own power plant',
            'Energy generation for $BVC'
          ]
        },
      ]
    }
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
              <img src={item.img} alt="icon"  />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='characters'>
        <h1>CHARACTERS</h1>
        <div className="description">
          <p>Each character is equipped with one or several ability perks
            (attacking, defensive, special), that are freely traded on the market</p>
          <div className='icons'>
            {[SwordSvg, ShieldSvg, Vector].map((item, index) => (
              <img key={index} src={item} alt="icon" />
            ))}
          </div>
        </div>
        <div className='slider'>
          <Slider {...settings} className="slider">
            {slides.map((item, index) => (
              <div key={index} className='botsFrame'>
                <img src={item.image} alt="bots" className='bots' />
                {!item.info ?
                  <div className='botInfo'>
                    <div style={{ flex: '1' }}>
                      <h2 style={{ color: item.color }}>{item.title}</h2>
                      <p>{item.desc}</p>
                      {item.secondDesc &&
                        <p>{item.secondDesc}</p>}
                    </div>
                    <footer>
                      {item.gen && item.gen.map((elem, index) => (
                        <div key={index}>
                            {!elem.link ?
                              <span style={{ background: elem.color ? elem.color : `rgba(${hexToRgb(item.color)}, 0.1)`, color: elem.txtColor ? elem.txtColor : 'white'}}
                                className={elem.color ? 'sold_out' : null}>
                                {elem.genr}
                              </span>
                            : 
                            <>
                            <a href={elem.link} target="_blank" rel="noopener noreferrer" style={{ background: elem.color ? elem.color : `rgba(${hexToRgb(item.color)}, 0.1)`, color: elem.txtColor ? elem.txtColor : 'white'}}
                                className={elem.color&&elem.txtColor ? 'sold_out' : null}>
                                {elem.genr}
                                {elem.txtColor &&
                                  <img src={OpenSea} alt="open sea" />
                                }
                                </a>
                              </> 
                              }
                          <span style={{ color: elem.color ? 'white' : item.color}} className={elem.txtColor ? '' : 'soon'}>{elem.state}</span>
                        </div>
                      ))}
                    </footer>
                  </div>
                  : <div className='collabInfo'>
                      <h2>{item.info}</h2>
                  </div> }
              </div>
            ))}
          </Slider>
        </div>
      </div>
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
        : distributionAdapt.map((item, index) => (
          <div key={index} className="combAdaptive">
            <img src={item} alt="" />
          </div>
        ))}
        </div>
      </div>
      <div className='roadmap' id="Roadmap">
        <h1 className='roadTitle'>ROADMAP</h1>
        <div className='back'>
          <div className='left' style={{ backgroundImage: `url(${Left})` }} />
          <div className='right' style={{ backgroundImage: `url(${Right})` }} />
        </div>
        <div className='years'>
          {[2021, 2022, 2023, 2024].map((item, index) => (
            <div key={index}>
              {activeSlide === index ?
                <span className='active' onClick={() => document.querySelectorAll('.slick-dots')[0].children[index].children[0].click()} key={index}>{item}</span>
                : index<3 ? <span onClick={() => { document.querySelectorAll('.slick-dots')[0].children[index].children[0].click(); setActiveSlide(index) }} key={index}
                style={{color: 'white', cursor: 'pointer'}}>{item}</span>
              : <span key={index}
                  style={{}}
                  className='dropdownItem'
                  onMouseEnter={e => e.target.children[0].style.display = 'block'}
                  onMouseLeave={e => e.target.children[0].style.display = 'none'}
                >{item}
                  <span className='dropdown'>Continuous BattleVerse improvement, expansion and addition new functionality in accordance with the community requests</span>
                </span>
              }
            </div>
          ))}
        </div>
        <Slider {...settingsRoadmap} className="slider" onSwipe={() => setTimeout(() => {
            setActiveSlide(Array.from(document.querySelectorAll('.slick-dots')[0].childNodes).indexOf(document.querySelectorAll('.slick-active')[2]))},
          500)}>
          {roadmap.map((item, index) => (
            <div key={index} className='q_container'>
              {item.q_blocks.map((item, indx) => (
                <>
                {!(indx===0&&index===0&&width<768) &&
                <div className='q_block' style={{ border: index === 0 && indx === 3 ? '2px solid #48F197' : null}} key={indx}>
                  {index < 3 &&
                    <h1 style={{ color: index === 0 && indx === 0 ? '#07161F' : index === 0 ? '#4cff9e' : index === 1 ? '#ff59b4' : index === 2 ? '#7fe8ff' : null }}>{'Q' + (indx + 1)}</h1>
                  }
                  {index === 0 && indx === 0 &&
                    <div className='curveLine' />}
                  {item.info && item.info.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))}
                </div>}
                </>
              ))}
            </div>
          ))}
        </Slider>
      </div>
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