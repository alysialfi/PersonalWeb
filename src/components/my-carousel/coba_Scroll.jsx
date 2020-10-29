import React, { useEffect, Component } from 'react'
import './coba_scroll.css'
import { Image } from 'react-bootstrap'

class coba_Scroll extends React.Component {

  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      position: "top",
      opas: 0.5
    }
  }

  componentDidMount() {
    this.listener = document.addEventListener("wheel", e => {
      //var scrolled = document.scrollingElement.scrollTop;
      //if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // you're at the bottom of the page
      if (e.deltaY < 0) {
        if (this.state.position !== "top") {
          this.setState({ position: "top" });
        }
      }
      else {
        if (e.deltaY > 0) {
          if (this.state.position !== "middle") {
            this.setState({ position: "middle" });
          }
        }
      }
    });
  }

  componentDidUpdate() {
    document.removeEventListener("wheel", this.listener);
  }

  render() {
    const uwi = this.state.opas
    let skrolap
    if (this.state.position == "middle") {
      skrolap = <Image src="https://www.flaticon.com/svg/static/icons/svg/3534/3534522.svg" 
      className="car d-flex justify-content-center"
      style={{opacity:uwi, margin: "275px"}}/>
    }
    else{
      skrolap = <Image src="https://www.flaticon.com/svg/static/icons/svg/3534/3534522.svg" 
      className="car2 d-flex justify-content-center"
      style={{opacity:1, margin: "275px"}}/>
    }

    return (
      <div>
        {/* <p
          style={{
            backgroundColor: this.state.position === "middle" ? "red" : "green",
            color: this.state.pos === "middle" ? "white" : "blue",
            margin: "auto",
            left: 0,
            bottom: 0,
            right: 0,
            transform: this.state.position === "middle" ? "translate(50px, 100px)" : "skewY(20deg)"
          }}
        >
          Amir
        </p> */}

        {/* <Image src="https://www.flaticon.com/svg/static/icons/svg/3534/3534522.svg" 
        className="car"
        /> */}

        {skrolap}
      </div>
    )
  }

}

export default coba_Scroll