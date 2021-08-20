import React from 'react'
import NavbarEn from '../../NavbarEn'
// import LangLinkEn from '../../LangLinkEn'
import picture from '../../img/picture.png'
import { Link } from 'react-router-dom'

const AboutEn = () => {

  return (
    <>
      <NavbarEn />
      <div className="container about" style={{maxWidth: '800px'}}>
        <div className="row">
          <div className="col-md-8">
            <p className="text-justify"> 
              My name is Samir Nurbek. I am a <span>Software Engineer</span> and <span>Information Technology enthusiast</span>. I help business agencies and individuals by creating all types of web applications and software products. I'm very passionate about learning and experiencing new things.
              <br /><br />
              I'm currently looking for jobs as a <span>Full-Stack Developer</span>, so I am a new candidate and you're welcome to send inquiries. You can reach out to me from this address: <a href="mailto:sn.world00@gmail.com"><span className="border-bottom border-info"> sn.world00@gmail.com</span></a>. Also, don't forget to check out my <Link to="/en/skills"><span className="border-bottom border-info">skills</span></Link> and <Link to="/en/projects"><span className="border-bottom border-info">projects</span></Link>. Hope to see you in the interview!
            </p>
          </div>
          <div className="col-md-4" id="pictures">
            <img src={picture} alt="profile-1" className="img-fluid mt-md-0 mt-5 mx-auto d-block" />
          </div>
        </div>
      </div>
    </>
  )
}



export default AboutEn
