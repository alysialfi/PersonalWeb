import React, { useState, useEffect } from 'react'
import { Image, Col, Row, Container } from 'react-bootstrap'
import "./achievements.style.css"
import sertif1 from '../assets/sertif1.png'
import sertif2 from '../assets/sertif2.png'
import sertif3 from '../assets/sertif3.png'
import sertif4 from '../assets/sertif4.png'
import sertif5 from '../assets/sertif5.png'
import sertif6 from '../assets/sertif6.png'
import cloud from '../assets/cloud.png'

export const Achievements = () => {

  const [bgcolor, setBgcolor] = useState('white')
  const [opacity, setOpacity] = useState()
  const achievementData = [
    { pict: sertif1, class: "photo_a" },
    { pict: sertif2, class: "photo_b" },
    { pict: sertif3, class: "photo_c" },
    { pict: sertif4, class: "photo_d" },
    { pict: sertif5, class: "photo_e" },
    { pict: sertif6, class: "photo_f" }
  ]

  useEffect(() => {
    let listener = window.addEventListener('scroll', function () {
      const bgcolor = window.scrollY > 6150 ? '#C9E3FF' : 'white'
      setBgcolor(bgcolor)
      const opac = opacity + .1
      setOpacity(opac)
    })
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [setBgcolor])

  return (
    <div className="bg_achievements" style={{ backgroundColor: bgcolor }} id="achievement">

      <p className="title_achievements">MY ACHIEVEMENT</p>
      <Container className="container-achievements">
        <Row>
          {achievementData.map((ach, id) => {
            return <Col xs={6} md={4}>
              <Image src={ach.pict} className={ach.class} />
            </Col>
          })}
        </Row>
      </Container>

      <Image src={cloud} className="cloud-footer" />
    </div>
  )
}

export default Achievements
