import React from 'react'
import {Container, Image} from 'react-bootstrap'
import styled from 'styled-components';
import './titlemessage.css'
import Typewriter from 'typewriter-effect';

// const TitleMessage = styled.h1`
//   position: absolute;
//   width: 100%;
//   top: 18rem;
//   z-index: 1;
//   margin-top: -125px;
//   text-align: left;
//   strong {
//     font-size: 1.25em;
//   }
//   div {
//     color: ${props => props.theme.textColor};
//     text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
//     font-weight: 100;
//     letter-spacing: 7px;
//     .main {
//       font-size: 90%;
//     }
//     .sub {
//       font-size: 75%;
//       letter-spacing: 2px;
//     }
//   }
// `;

const MyTitleMessage = () => {
  return (
    // <TitleMessage>
    //   <div className="titleMessage">
    //     <div className="heading ml-5">
    //       <div className="main text-left mb-3 ">
    //         Hi There! Welcome me...
    //       <br />
    //         <span>
    //           <strong>Alysia Alfi 💅</strong>
    //         </span>
    //       </div>
    //       <div className="sub">
    //         <Typewriter
    //           options={{
    //             strings: ["Web Developer", "Cat Lover", "Travellig Enthusiast"],
    //             autoStart: true,
    //             loop: true,
    //             delay: 50
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </TitleMessage>
    <Container>
      <h2 className="title-tm">HI! I'm Alfi</h2>
      <h3 className="subtitle-tm">Let's unleash the idea to it's epic<span role="img"> 🚀</span></h3>
    </Container>
  )
}

export default MyTitleMessage
