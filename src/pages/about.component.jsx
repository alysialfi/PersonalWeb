import React, { useEffect } from 'react'
import { Container, Row, Col, Button, Image } from 'react-bootstrap'
import './about.style.css'
import computer from '../assets/about_pict.png'
import bg_right from '../assets/bg_about.png'
import sparkling from '../assets/sparkling.gif'
import cloud from '../assets/cloud.png'

const MyAbout = () => {
  return (
    <React.Fragment>

    <Image src={cloud} className="divider"></Image>

    <div className="about"> 
    
      <Container className="all">

        <Row className="pt-5">
          <Col xs={12} md={6}>
            <Row className="justify-content-center mb-2">
            <div className="desc_div">
              <p className="helo">A SNEAK PEEK OF ME</p>
              <p className="helo_desc justify-content-left">I'm Alfi, 19 years old girl who lives in Malang. 3 years of studying in a vocational school, made me familiar with software development especially web and mobile application, also based on previous work experience in which I was involved in massive projects also strengthen my understanding of software development. In terms of job desk, I was often charged with web or app front-end task, this is why I encouraged to study more about front-end.
I am sociable and love enjoys traveling, going somewhere I've never been before then met new people with their stories is sort of holy grail to refresh my mind. Taking a look at what is trending is also interesting so that keep me updated and understand what are people talking about.
              </p>
            </div>
            </Row>
          </Col>

          <Col xs={12} md={6} className="p-3">
            <Row className="">
              <Image src={computer} className="about_pict"></Image>
              <Image src={sparkling}></Image>
            </Row>

          </Col>

        </Row>
      </Container>

      <Image src={bg_right} className="bg_right" />

    </div>
    </React.Fragment>

  )
}

export default MyAbout
