import React from 'react'
import {Container, Image} from 'react-bootstrap'
import './titlemessage.css'
import Typewriter from 'typewriter-effect';


const MyTitleMessage = () => {
  return (
    <Container>
      <h2 className="title-tm">HI! I'm Alfi</h2>
      <h3 className="subtitle-tm">Let's unleash the idea to it's epic<span role="img"> 🚀</span></h3>
    </Container>
  )
}

export default MyTitleMessage
