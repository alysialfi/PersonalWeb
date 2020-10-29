import React, {useState, useEffect} from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Camera, Smartphone, Language } from '@material-ui/icons'
import "react-vertical-timeline-component/style.min.css"
import "./workexperience.style.css"


const Education = () => {

  const [bgcolor, setBgcolor] = useState('white')

  useEffect(() => {
    let listener = window.addEventListener('scroll', function(){
      const bgcolor = window.scrollY > 6150 ? '#C9E3FF' : 'white'
      setBgcolor(bgcolor)
    })
    return () => {
      document.removeEventListener('scroll', listener)
    }
  }, [setBgcolor])

  return (
    <div className="bg_education" style={{backgroundColor: bgcolor }} id="experience">
      <p className="title_edu px-5">WORK & FREELANCE EXPERIENCE</p>

      <div className="div-vertical-timeline">
        <VerticalTimeline className="vertical-timeline.vertical-timeline-custom-line">
          <VerticalTimelineElement
            className=""
            contentStyle={{ background: 'rgb(47, 84, 158)', color: '#ffffff' }}
            contentArrowStyle={{ borderRight: '15px solid  rgb(47, 84, 158)' }}
            date="Juli 2019 - June 2020"
            iconStyle={{ background: 'rgb(255, 161, 46)', color: '#fff' }}
            icon={<Camera/>}
          >
            <h3 className="vertical-timeline-element-title">Software Developer</h3>
            <h5 className="vertical-timeline-element-subtitle">Visionet Data International</h5>
            <h6 className="vertical-timeline-element-subtitle">Juli 2019 - June 2020</h6>
            <p>
              Developing web and mobile application for engineer utility and internal support
            </p><br/>
            <h6>Technology : SQL Server, .Net, Java, HTML, CSS, React Native</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(47, 84, 158)', color: '#ffffff' }}
            date="2018 - 2011"
            iconStyle={{ background: 'rgb(255, 161, 46)', color: '#fff' }}
            icon={<Camera/>}
          >
            <h3 className="vertical-timeline-element-title">Mobile Programmer</h3>
            <h5 className="vertical-timeline-element-subtitle">Batavianet</h5>
            <h6 className="vertical-timeline-element-subtitle">Juli 2018 - September 2018</h6>
            <p>
              Implementing UI models to mobile application
            </p><br/>
            <h6>Technology : Java, MaterialUI</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(47, 84, 158)', color: '#ffffff' }}
            date="2008 - 2010"
            iconStyle={{ background: 'rgb(255, 161, 46)', color: '#fff' }}
            icon={<Smartphone/>}
          >
            <h3 className="vertical-timeline-element-title">Videographer</h3>
            <h5 className="vertical-timeline-element-subtitle">CodeLaris</h5>
            <h6 className="vertical-timeline-element-subtitle">Agustus 2018</h6>
            <p>
              Shot and edit footage for welcoming video
            </p><br/>
            <h6>Technology : Adobe Premiere</h6>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(47, 84, 158)', color: '#ffffff' }}
            date="2006 - 2008"
            iconStyle={{ background: 'rgb(255, 161, 46)', color: '#fff' }}
            icon={<Language/>}
          >
            <h3 className="vertical-timeline-element-title">Videographer</h3>
            <h5 className="vertical-timeline-element-subtitle">Khalifah IBS</h5>
            <h6 className="vertical-timeline-element-subtitle">Mei 2018 - Juli 2018</h6>
            <p>
              Shoot and edit footage about Khalifah IBS students, activites, teachers, and its surrounding.
            </p><br/>
            <h6>Technology : Adobe Premiere</h6>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

    </div>
  )
}

export default Education
