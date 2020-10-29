import React, { useEffect, useRef, Component } from 'react'
import Particles from 'react-particles-js';
import { Image } from 'react-bootstrap'
import "./coba_particle.css"
import Rellax from 'rellax'
import { useTrail, animated } from 'react-spring'
import arrow from "../../assets/up-arrow.svg"
import cloud from '../../assets/cloud.png'

class coba_particle extends React.Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      position: "bottom",
      opas: 0.5
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener("wheel", e => {
      //var scrolled = document.scrollingElement.scrollTop;
      //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      if (e.deltaY < 0) {
        if (this.state.position !== "bottom") {
          this.setState({ position: "bottom" });
        }
      }
      else {
        if (e.deltaY > 0) {
          if (this.state.position !== "top") {
            this.setState({ position: "top" });
          }
        }
      }
    });
  }

  render() {

    const uwi = this.state.opas
    let skroldon
    if (this.state.position == "bottom") {
      skroldon = <Image src={arrow}
        style={{ width: "15%", marginTop: "35%", marginLeft: "5%", opacity: 0 }}
        className="arrow2" />
    }
    else {
      skroldon = <Image src={arrow}
        style={{ width: "15%", marginTop: "35%", marginLeft: "5%", opacity: 0 }}
        className="arrow" />
    }
    return (
      <div className="bg d-block w-100">
        <div className="bg_child">
          <p className="font">
          “Do not grieve over what has passed unless it makes you work harder for what is about to come.”
          </p>
          <p className="font2">
            -Umar ibn Al-Khattab-
          </p>
        </div>
        {/* {skroldon} */}

        {/* <Image src={cloud} className="divider"></Image> */}

      </div>
    )
  }

}

export default coba_particle