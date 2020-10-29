import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import "./mycarousel.style.css"
import Rellax from "rellax"
import Particles from 'react-particles-js';
import sakura from '../../assets/sakura.png'
import bird from '../../assets/bird_flying.png'
import pole from '../../assets/pole.png'
import houses from '../../assets/houses.png'
import ballon from '../../assets/ballon.png'
import moon from '../../assets/moon.png'

const MyCarousel = () => {

  const rellaxRef = useRef();
  const rellaxRefH = useRef();
  const rellaxRefB = useRef();

  useEffect(() => {

    new Rellax(rellaxRef.current, {
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(rellaxRefB.current, {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
    new Rellax(rellaxRefH.current, {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })

  }, []);


  return (
    <div>
      
      <Particles className="d-block w-100 custom-img"
        params={{
          "particles": {
            "number": {
              "value": 160,
              "density": {
                "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "speed": 4,
                "size_min": 0.3
              }
            },
            "line_linked": {
              "enable": false
            },
            "move": {
              "random": true,
              "speed": 1,
              "direction": "top",
              "out_mode": "out"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
              },
              "repulse": {
                "distance": 400,
                "duration": 4
              }
            }
          }
        }} />

        <Image src={moon} className="moon"/>
        <Image src={pole} className="pole"/>
        <Image src={houses} className="houses" ref={rellaxRefH}/>
        <Image src={ballon} className="ballon" ref={rellaxRef}/>
        <Image src={bird} className="bird" ref={rellaxRefB}/>
    </div>
  )
}

export default MyCarousel