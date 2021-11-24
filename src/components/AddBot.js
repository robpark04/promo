import React, {useState} from 'react' 
import './AddBot.scss'
import Slider from "react-slick";

import Coins from '../assets/coins.svg'
import Character from '../assets/character.png'

export default function AddBot(props){
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  };

  let [bots, setBots] = useState([
    {img: Character, title: 'BABY COMBATS BOT', code: '#2558 G1', active: false},
    {img: Character, title: 'BABY COMBATS BOT', code: '#167 G1', active: true},
    {img: Character, title: 'BABY COMBATS BOT', code: '#862 G1', active: false},
    {img: Character, title: 'BABY COMBATS BOT', code: '#2558 G1', active: false},
    {img: Character, title: 'BABY COMBATS BOT', code: '#167 G1', active: false},
    {img: Character, title: 'BABY COMBATS BOT', code: '#862 G1', active: false}
  ])

  function selectBot(index){
    let newArr = [...bots]
    for(let x=0; x<newArr.length; x++){
      newArr[x].active = false
    }
    newArr[index].active = true
    setBots(newArr)
  }
  return(
    <div className="addBotContainer">
      <div className="botBackground" onClick={() => props.setAddBot(!props.addBot)} />
      <div className="addBot">
        <link rel="stylesheet" type="text/css" charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
        <link rel="stylesheet" type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        <h1>ADD BOT ON STAKING</h1>
        <Slider {...settings} className="slider">
          {bots.map((item, index) => (
            <div key={index} onClick={() => selectBot(index)} className={item.active ? "sliderBot active" : "sliderBot"}>
              <img src={item.img} alt="bot" />
              <h4>{item.title}</h4>
              <h2>{item.code}</h2>
            </div>
          ))}
        </Slider>
        <h4>TRANSFER ON STAKING</h4>
        <h2>BABY COMBAT BOT #167 G1</h2>
        <div className="sliderLight"/>
        <button className="staking" onClick={() => props.setAddBot(!props.addBot)}>
          <img src={Coins} alt="coins"/> 
          START STAKING
        </button>
      </div>
    </div>
  )
}