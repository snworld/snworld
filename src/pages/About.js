import React from 'react'
import picture from '../img/picture.png'
import { Link } from 'react-router-dom'

const About = () => {

  return (
    <div className="container about" style={{maxWidth: '800px'}}>
      <div className="row">
        <div className="col-md-8">
          <p> 
            I am a <span>Software Engineer</span> and <span>Information Technology enthusiast</span>. I help business agencies && individuals and create all types of web applications and softwares. I like experiencing new things as well.
            <br /><br />
            I'm currently interested in freelance opportunities and remote jobs. So I'm available as a freelancer and you're welcome to send inquiries. You can reach out to me from this address: <a href="mailto:sn.world00@gmail.com"><span className="border-bottom border-info"> sn.world00@gmail.com</span></a>. Also, don't forget to check out my <Link to="/skills"><span className="border-bottom border-info">skills</span></Link> and <Link to="/projects"><span className="border-bottom border-info">projects</span></Link>. Thank you!
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
