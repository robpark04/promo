import React, { useState } from 'react' 
import '../styles/roadmap.scss'

import Slider from "react-slick";

import Left from '../assets/roadmap/left.svg'
import Right from '../assets/roadmap/right.svg'

export default function Roadmap() {

  let [activeSlide, setActiveSlide] = useState(1)

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
        
  const settingsRoadmap = {
    initialSlide: 1,
    dots: true,
    fade: true,
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

  let [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));
  
  return(
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
                onMouseEnter={width>1024 ? e => e.target.children[0].style.display = 'block' : null}
                onClick={e =>  {e.target.children[0].style.display = 'block'; setTimeout(() => {e.target.children[0].style.display = 'none';}, 5000)}}
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
              <div className='q_block' style={{ border: index === 1 && indx === 0 && '2px solid #ff59b4', }} key={indx}>
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
  )
}