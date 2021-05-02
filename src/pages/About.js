import React from 'react'
import picture from '../img/picture.png'
import kg from '../img/kg.png'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div className="container about" style={{maxWidth: '800px'}}>
      <div className="row">
        <div className="col-md-8">
          <p>
            Greetings! My name is <span>Sam</span>. I am a <span>full-stack web developer</span> from <a 
            rel="noreferrer" href="https://en.wikipedia.org/wiki/Kyrgyzstan" target="_blank"><img width="20" alt="flag" data-tip='Kyrgyzstan' data-for="kyrgyzstan" src={kg} /></a>
            <ReactTooltip component={'span'} place="top" id="kyrgyzstan" effect="solid" backgroundColor='#000' border borderColor='#fff' arrowColor='#000'>
            </ReactTooltip>
            . I use the <a 
            href="https://wikitia.com/index.php?title=MERN_(solution_stack)&mobileaction=toggle_view_desktop" 
            target="_blank" rel="noreferrer"><span>MERN</span></a> stack as my main dev tool. Besides that, 
            I also create apps using <span>Python Django</span> as well as some <span>CMS WordPress Themes</span>. 
            <br /><br />
            I'm currently interested in <span>freelance</span> opportunities and <span>remote jobs</span>. So I'm available
             as a <span>freelancer</span> and you're welcome to send inquiries. You can reach out to me from this address: 
              <span> sn.world00@gmail.com</span>. 
            <br />
            Also, don't forget to check out my <Link to="/skills"><span>services</span></Link> and <Link to="/projects"><span>projects</span></Link>. Peace!
          </p>
        </div>
        <div className="col-md-4" id="pictures">
          <img src={picture} alt="profile-1" className="img-fluid mt-md-0 mt-5 mx-auto d-block" />
        </div>
      </div>
    </div>
  )
}



export default About
