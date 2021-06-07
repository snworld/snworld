import React from 'react'
import NavbarRu from '../../NavbarRu'
import LangLinkRu from '../../LangLinkRu'
import picture from '../../img/picture.png'
import { Link } from 'react-router-dom'

const AboutRu = () => {

  return (
    <>
      <NavbarRu />
      <div className="container about" style={{maxWidth: '800px'}}>
        <div className="row">
          <div className="col-md-8">
            <p> 
              Меня зовут Самир. Я являюсь <span>программистом</span> и <span>фанатом</span> ИТ. В основном я помогаю бизнес-агентствам, создавая все типы веб-приложений и программного обеспечения. Мне очень нравится узнавать что-то новое.
              <br /><br />
              В настоящее время я я интересуюсь возможностям фриланса и удаленной работы. Так что я доступен как фрилансер, и вы можете отправлять запросы. Вы можете связаться со мной по этому адресу: <a href="mailto:sn.world00@gmail.com"><span className="border-bottom border-info"> sn.world00@gmail.com</span></a>. Также не забудьте смотреть мои <Link to="/ru/skills"><span className="border-bottom border-info">навыки</span></Link> и <Link to="/ru/projects"><span className="border-bottom border-info">проекты</span></Link>. Спасибо!
            </p>
          </div>
          <div className="col-md-4" id="pictures">
            <img src={picture} alt="profile-1" className="img-fluid mt-md-0 mt-5 mx-auto d-block" />
          </div>
        </div>
      </div>
      <LangLinkRu />
    </>
  )
}



export default AboutRu
