import React from 'react'
import { Image, Button, Container, Row, Col, Carousel } from 'react-bootstrap'
import myphoto from '../assets/foto_alysia.jpg'
import 'swiper/swiper.scss'
import './portofolio.style.css'
import divider from '../assets/divider_white.png'
import porto1 from '../assets/porto1.png'
import porto2 from '../assets/porto2.png'
import porto3 from '../assets/porto3.png'
import porto4 from '../assets/porto4.png'
import video1 from '../assets/nomu9_fix.mp4'
import ReactPlayer from 'react-player'


export const Portofolio = () => {

  const portofolioData = [
    { pict: porto1, 
      title: "E-Commerce", 
      desc: "Building website using ReactJS as framweork and some libraries such as bootstrap, axios, and redux. I used API from FakeStoreAPI that serves 4 methods which are get, post, put/patch, and delete. Also added react redux for managing state from API response." 
    }, 
    { pict: porto3, 
      title: "We.V", 
      desc: "We.V was an app for introducing my former-company to the new member of internship students. This project is developed the team, and also we were successfully deployed to play store and used by it's user target. I was charged to translate the design to React Native code and create some logics that related to it." 
    }, 
    { pict: porto2,
      title: "Simple CRUD PHP", 
      desc: "Connecting MariaDB on xampp through mysqli query in php file. Using native php and CRUD method from mssqli query solely to connect the program well." 
    }, 
    { pict: video1,
      title: "Videography", 
      desc: "Since 3 years ago i've been interesting on media visual especially videography. I often create video from places I've been through with my friends within. I also post my videos on instagram, kindly check it on the contact section" 
    }, 
    { pict: porto4,
      title: "Illustration", 
      desc: "These pictures are intended to be the first collaboration with my friends which I charged to create amount of illustatrations from our discussion. We also posted these on our instagram story for 30 days of Ramadhan." 
    }
  ]

  return (
    <div className="bg_portofolio" id="portofolio">
      <p className="title_porto">WHAT I HAVE DONE</p>

      <div className="crsl_div px-5 py-5">
        <Carousel touch={true}>
          {portofolioData.map(prt => {

            return prt.pict.toString().endsWith("mp4") ?
              <Carousel.Item className="pb-5" interval={7000}>
                <Row className="row-portofolio">
                  <Col className="d-flex justify-content-center">
                    <ReactPlayer url={prt.pict} width="90%" height="90%" controls={true} /> 
                  </Col>
                  <Col className="">
                    <h3 className="title-desc-porto">{prt.title}</h3>
                    <p className="p-desc-porto">{prt.desc}</p>
                  </Col>
                </Row>
              </Carousel.Item> :

              
              <Carousel.Item interval={7000}>

                <Row className="pb-5">
                  <Col className="d-flex justify-content-center" >
                    <Image
                      className="img-porto"
                      src={prt.pict}
                      alt="First slide"
                    />
                  </Col>
                  <Col className="">
                    <h3 className="title-desc-porto">{prt.title}</h3>
                    <p className="p-desc-porto">{prt.desc}</p>
                  </Col>
                </Row>
               </Carousel.Item>

          })}

          {/* <Carousel.Item>
            <Row className="pb-5">
              <Col className="d-flex justify-content-center">
                <Image
                  className="img"
                  src={myphoto}
                  alt="First slide"
                />
              </Col>
              <Col className="">
                <h3>Second slide label</h3>
                <p>ASHIAP ASHIAP ASHIAP</p>
              </Col>
            </Row>
          </Carousel.Item> */}
        </Carousel>

      </div>

      <Image src={divider} className="divider_w" />

    </div>
  )
}

export default Portofolio