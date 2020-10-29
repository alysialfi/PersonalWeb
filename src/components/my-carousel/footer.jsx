import React, { useEffect, useState } from 'react'
import { Form, Button, Container, Image, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import footer_pict from './../../assets/footer_pict.png'
import './footer.css'
import ig from './../../assets/instagram2.svg'
import github from './../../assets/github2.svg'
import gmail from './../../assets/gmail2.svg'
import linked from './../../assets/linkedin2.svg'
import { bottom } from '@popperjs/core';

const Footer = () => {

  return (
    <div className="bg-footer" id="contact">

      <div>
        <Row className="row-img-contact mt-5">
          <OverlayTrigger placement="bottom" overlay={<Tooltip>alysialfi</Tooltip>}>
            <a 
              href="https://www.instagram.com/alysialfi/" 
              className="p-3"
              target="_blank">
              <Image className="img-contact" src={ig} />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>alysialfi</Tooltip>}>
            <a
              href="https://github.com/alysialfi"
              target="_blank"
              className="p-3">
            <Image className="img-contact" src={github} />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>9c.alysialfi@gmail.com</Tooltip>}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=9c.alysialfi@gmail.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com"
              target="_blank"
              className="p-3" >
              <Image className="img-contact" src={gmail} />
            </a>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={<Tooltip>alysialfi</Tooltip>}>
            <a
              href="https://www.linkedin.com/in/alysia-alfi-b92398182/"
              target="_blank"
              className="p-3">
              <Image className="img-contact" src={linked} />
            </a>
          </OverlayTrigger>
        </Row>
      </div>

      <div className="div-footer">
        <p className="footer-footer">&copy; Copyright 2020 Made with ReactJS + 😸 + many Teh Kotak</p>
      </div>
      <Image src={footer_pict} className="footer-pict" />

    </div>
  )
}

export default Footer
