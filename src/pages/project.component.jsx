import React from 'react'
import "./project.style.css"
import { Image, Button, Container, Row, Col } from 'react-bootstrap'
import php from "../assets/php.svg"
import www from "../assets/worldwide.svg"
import coding from "../assets/coding.png"
import video from "../assets/video.png"
import Tilt from "react-parallax-tilt"
import Fade from 'react-reveal/Fade'
import newspaper from "../assets/divider2.png"


class project extends React.Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      position: "top",
      leftPos: -95,
      rightPos: -95,
      Opacity: 0,
      count: 1,
      show: false
    }

    this.movingText = React.createRef()
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // this.listener = document.addEventListener("wheel", e => {

    // if (e.deltaY < 0) {
    //   if (this.state.position !== "top") {
    //     // var kuy = this.state.leftPos
    //     var ngitung = Math.max(-95 + 0.35 * window.scrollY, 100)
    //     this.setState({ 
    //       position: "top",
    //       leftPos: ngitung
    //     });
    //   }
    // }
    // else {
    //   if (e.deltaY > 0) {
    //     if (this.state.position !== "middle") {
    //       var kuy2 = this.state.leftPos
    //       var ngitung2 = Math.max(kuy2 - 0.35 * window.scrollY, 100)
    //       this.setState({ 
    //         position: "middle",
    //         leftPos: ngitung2
    //       });
    //     }
    //   }
    // }
    // }); 
  }

  handleScroll = () => {
    var ngitung = Math.min(-1255 + 0.35 * window.scrollY, 100)
    var ngitung2 = Math.min(-255 - 0.35 * window.scrollY, 100)
    var opas = Math.max(0 + 0.2 * window.scrollY, 100)
    this.setState(
      {
        count: this.state.count + 1,
        leftPos: ngitung,
        rightPos: ngitung2,
        Opacity: opas,
        show: !this.state.show
      }
    )
  }

  componentDidUpdate() {
    document.removeEventListener("wheel", this.listener);
  }

  render() {

    return (
      <div className="bg_project pt-5">

        <div className="moving_div">
          <p className="running_text" style={{ transform: "translateX(" + this.state.leftPos + "px)" }}>
            HELLO BUDDY IT'S ME ALFI PLEASE ENJOY READING MY WEBSITE AND CONTACT ME THROUGH LINK BELOW IF ANY SUGGESTION
          </p>
          <p className="running_text2" style={{ transform: "translateX(" + this.state.rightPos + "px)" }}>
            THIS IS MY FIRST PERSONAL WEBSITE DON'T JUDGE ME X_X HOPE YOU LIKE IT! WE CAN BE A GOOD FRIEND 
          </p>
        </div>

        <div className="wrapper">
          <Container>
            <Row >
              <Col xs lg={7}>
                <Row className="ml-auto">
                  <Col lg={4} className="">
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={coding} className="inner-element2" alt="pic" />
                      <p className="card_project">
                        Web Development
                    </p>
                    </Tilt>
                  </Col>

                  <Col lg={4} className="">
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={video} className="inner-element2" alt="pic" />
                      <p className="card_project">
                        Video Editing
                    </p>
                    </Tilt>
                  </Col>

                </Row>

                <Row className="mt-2 ml-auto ">
                  <Col lg={4} className="">
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={coding} className="inner-element2" alt="pic" />
                      <p className="card_project">
                        Web Development
                    </p>
                    </Tilt>
                  </Col>

                </Row>

              </Col>

              <Col xs lg={5} className="">
                <p className="font_project profile justify-content-left">
                  WHAT AM I INTERESTING IN
                </p>
                <p className="desc_project">
                When I was in school, I started to have interest in video and design making. By making a video, I can tell stories without being confused composing the sentences. Making videos requires creativity so that the video isn’t monotonous and people are attracted to it, that's why I like to challenge myself by creating one. Just like making a video, designing illustration also requires me to think creatively and outside the box. Whereas in web development, I am interested in the front-end process, because during the process, my eyes are presented with images and colors instead of text and commands.
              </p>
              </Col>


            </Row>
          </Container>
        </div>
        <div className="newspaper" >
          <Image src={newspaper} style={{ width: "100%" }} />
        </div>

        {/* <div className="wrapper">
          <Container>
            <Row >
              <Col xs lg={7}>
                <Row className="ml-auto">
                  <Col lg={4} className="pt-4">
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={coding} className="inner-element2" alt="pic" />
                      <p className="card_project">
                        Web Development
                    </p>
                    </Tilt>
                  </Col>

                  <Col lg={4} className="pt-4">
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={video} className="inner-element2" alt="pic" />
                      <p className="card_project">
                        Video Editing
                    </p>
                    </Tilt>
                  </Col>

                </Row>

                <Row className="pt-4 ml-auto">
                  <Col md={{ span: 4, offset: 4 }}>
                    <Tilt
                      className="parallax-effect-img"
                      tiltMaxAngleX={40}
                      tiltMaxAngleY={40}
                      perspective={800}
                      transitionSpeed={1500}
                      scale={1.1}
                      gyroscope={true}
                    >
                      <img src={php} className="inner-element2" style={{ width: '100%', alignContent: "center" }} alt="pic" />
                      <p className="card_project">
                        Design Graphic
                    </p>
                    </Tilt>
                  </Col>

                </Row>

              </Col>

              <Col xs lg={5}>
                <p className="font_project profile justify-content-left">
                  WHAT AM I INTERESTING IN?
                </p>
                <p className="desc_project">
                  Sometimes words don't satisfied me to tell a lot stories, that's why I love to
                  share my experience through pictures and videos. It gives me the vibe of the place,
                  people, and it's stories.
              </p>
              </Col>


            </Row>
          </Container>
        </div> */}
      </div>
    )
  }

}

export default project
