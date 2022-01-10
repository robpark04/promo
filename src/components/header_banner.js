import React, {useState, useEffect} from 'react' 

import '../styles/header_banner.scss'

import Back from '../assets/header/nft.svg'

// PARTICLES 
import Blue from '../assets/header/particles/blue.svg'
import Blue1 from '../assets/header/particles/blue1.svg'
import Blue2 from '../assets/header/particles/blue2.svg'
import Blue3 from '../assets/header/particles/blue3.svg'
import Blue4 from '../assets/header/particles/blue4.svg'

import Green from '../assets/header/particles/green.svg'
import Green1 from '../assets/header/particles/green2.svg'
import Green2 from '../assets/header/particles/green3.svg'

import Purple1 from '../assets/header/particles/purple1.svg'
import Purple2 from '../assets/header/particles/purple2.svg'
import Purple3 from '../assets/header/particles/purple3.svg'
import Purple4 from '../assets/header/particles/purple4.svg'

import Particles from '../assets/header/particles.svg'
import Video from '../assets/header/shroom-anim_02.mp4'
import Top3 from '../assets/header/top3.png'

import Discord from '../assets/services/discord.svg'
import In from '../assets/services/in.svg'
import Telegram from '../assets/services/telegram.svg'
import Twitter from '../assets/services/twitter.svg'
import Medium from '../assets/services/medium.svg'

export default function HeaderBanner() {


  function randomBoolean(){
    return Math.random() < 0.7
  }

  function randomBoolean1(){
    return Math.random() < 0.8
  }

  let [blueParticles, setBlueParticles] = useState([
    {bar: Blue, state: randomBoolean() },
    {bar: Blue1, state: randomBoolean() },
    {bar: Blue2, state: randomBoolean() },
    {bar: Blue3, state: randomBoolean() },
    {bar: Blue4, state: randomBoolean() }
  ])

  let [greenParticles, setGreenParticles] = useState([ 
    {bar: Green, state: randomBoolean() }, 
    {bar: Green1, state: randomBoolean() }, 
    {bar: Green2, state: randomBoolean() } ])

  let [purpleParticles, setPurpleParticles] = useState([ 
    {bar: Purple1, state: randomBoolean()}, 
    {bar: Purple2, state: randomBoolean()}, 
    {bar: Purple3, state: randomBoolean()}, 
    {bar: Purple4, state: randomBoolean()} ])


  useEffect(() => {
    const interval = setInterval(() => {
      let newArr = [...blueParticles]
      for(let x=0; x<blueParticles.length; x++){
        blueParticles[x].state = randomBoolean()
      }
      setBlueParticles(newArr)
    }, 4000);

    return () => clearInterval(interval); 

  }, [blueParticles])

  useEffect(() => {
    const interval = setInterval(() => {
      let newArr = [...greenParticles]
      for(let x=0; x<greenParticles.length; x++){
        greenParticles[x].state = randomBoolean()
      }
      setGreenParticles(newArr)
    }, 3000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  
  }, [greenParticles])

  useEffect(() => {
    const interval = setInterval(() => {
      let newArr = [...purpleParticles]
      for(let x=0; x<purpleParticles.length; x++){
        purpleParticles[x].state = randomBoolean1()
      }
      setPurpleParticles(newArr)
    }, 4000);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  
  }, [purpleParticles])

  const footer = [
    {icon: Discord, color: '#525FFF',
      link: 'https://discord.com/invite/HFVAnBS9qA'},
    {icon: In, color: '#00A6FF',
      link: 'https://ru.linkedin.com/company/battleverse-io?trk=ppro_cprof'},
    {icon: Telegram, color: '#00A7FF',
      link: 'https://t.me/battleverse_news'},
    {icon: Twitter, color: '#0084FF',
      link: 'https://twitter.com/BattleVerse_io'},
    {icon: Medium, color: '#000000', 
      link: 'https://battleverse.medium.com/'}
  ]

  let [width, setWidth] = React.useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return(
    <div className='contentContainer'>
      <div className='content'>
        <div className='particlesAnime'>
          <div className='blueParticles'>
            {blueParticles.map((item, index) => (
              <img key={index} src={item.bar} alt="particle" style={item.state ? {paddingTop: "2%", opacity: "1"} : {paddingTop: "5%", opacity: "0"}} />
            ))}
          </div>
          <div className='greenParticles'>
            {greenParticles.map((item, index) => (
              <img key={index} src={item.bar} alt="particle" style={item.state ? {paddingTop: "1%", opacity: "1"} : {paddingTop: "5%", opacity: "0"}} />
            ))}
          </div>
          <div className='purpleParticles'>
            {purpleParticles.map((item, index) => (
              <img key={index} src={item.bar} alt="particle" style={item.state ? {paddingTop: "1%", opacity: "1"} : {paddingTop: "3%", opacity: "0"}}/>
            ))}
          </div>          
        </div>
        <div className='info'>
          <h1>Multichain
            Play-To-Earn Metaverse</h1>
          <p>Broaden your horizons of battling, farming, completing
            missions and quests at the intergalactic level</p>
          <img src={Top3} alt="top3" />
        </div>
        <div className='threeD'>
          <div style={{ backgroundImage: `url(${Particles})`}} className='particles'/>
          <video controls={false} autoPlay loop muted>
            <source src={Video} type="video/mp4"/>
          </video>            
          <div className='links'>
            {[{link: 'http://shrooms.battleverse.io', value: 'MINT'}, {link: 'https://opensea.io/collection/baby-combat-bots-g1', value: 'BUY'}].map((item, index) => (
              <a key={index} 
                onMouseDown={e => {e.target.style.fontSize = '16px'; e.target.style.marginInline = '2px'; e.target.style.filter = 'brightness(85%)'}}
                onMouseLeave={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
                onMouseUp={e => {e.target.style.fontSize = '18px'; e.target.style.marginInline = '0px'; e.target.style.filter = 'brightness(100%)'}} 
                href={item.link} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer>
        {footer.map((item, index) => (
          <a onMouseEnter={e => {e.target.style.background = item.color}} 
            onMouseLeave={e => {e.target.style.background = '#122632'; e.target.style.padding = width>800? '0.7em' : '0.6em'; e.target.style.margin = width>800? '0em 1em 0em 0em' : '0em 0.8em 0em 0em'; e.target.style.filter = 'brightness(100%)'}} 
            onMouseDown={e => {e.target.style.padding = width>800? '0.6em':'0.5em'; e.target.style.margin = width>800? '0.1em 1.1em 0.1em 0.1em' : '0.1em 0.9em 0.1em 0.1em'; e.target.style.filter = 'brightness(55%)'}} 
            onMouseUp={e => {e.target.style.padding = width>800? '0.7em' : '0.6em'; e.target.style.margin = width>800? '0em 1em 0em 0em' : '0em 0.8em 0em 0em'; e.target.style.filter = 'brightness(100%)'}} 
            href={item.link} key={index} target="_blank" rel="noopener noreferrer">
            <img src={item.icon} alt="icon" />
          </a>
        ))}
      </footer>
    </div>
  )
}