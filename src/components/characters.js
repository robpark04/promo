import React, {useState} from 'react' 
import '../styles/characters.scss'

import Slider from "react-slick";

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


export default function Characters() {

  let [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

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

  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <img src={Prev} alt="next"
        className={'slick-arrow slick-prev arrow'}
        style={{ ...style, display: "block", }}
        onClick={onClick}
        onMouseDown={e => {e.target.style.filter = 'brightness(50%)'; 
          e.target.style.padding = width>1024 ? '0 30.6px 0 30.6px' : width>600 ? '0 20px 0 20px' : '0 16px 0 16px'; e.target.style.width = width>600 ? '1.6%' : '16px'}}
        onMouseLeave={e => {e.target.style.filter = 'brightness(100%)';
          e.target.style.padding = width>1024 ? '0 28.6px 0 28.6px' : width>600 ? '0 18px 0 18px' : '0 14px 0 14px'; e.target.style.width = width>600 ? '2%' : '20px'}}
        onMouseUp={e => {e.target.style.filter = 'brightness(100%)'
          e.target.style.padding = width>1024 ? '0 28.6px 0 28.6px' : width>600 ? '0 18px 0 18px' : '0 14px 0 14px'; e.target.style.width = width>600 ? '2%' : '20px'}}                   
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
        onMouseDown={e => {e.target.style.filter = 'brightness(50%)'; 
          e.target.style.padding = width>1024 ? '0 30.6px 0 30.6px' : width>600 ? '0 20px 0 20px' : '0 16px 0 16px'; e.target.style.width = width>600 ? '1.6%' : '16px'}}
        onMouseLeave={e => {e.target.style.filter = 'brightness(100%)';
          e.target.style.padding = width>1024 ? '0 28.6px 0 28.6px' : width>600 ? '0 18px 0 18px' : '0 14px 0 14px'; e.target.style.width = width>600 ? '2%' : '20px'}}
        onMouseUp={e => {e.target.style.filter = 'brightness(100%)';
          e.target.style.padding = width>1024 ? '0 28.6px 0 28.6px' : width>600 ? '0 18px 0 18px' : '0 14px 0 14px'; e.target.style.width = width>600 ? '2%' : '20px'}}              
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


  const hexToRgb = hex =>
    hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16))

  return(
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
  )
}