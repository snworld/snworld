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
            <p className="text-justify"> 
              Меня зовут <span>Самир Нурбек</span> и я являюсь <span>фулстек-разработчиком</span> с 2-летним опытом. В основном занимаюсь созданием сайтов, шаблонов и скриптов разного типа. Мне очень нравится узнавать что-то новое в сфере IT и помогать людям.
              <br /><br />
              На данный момент я ищу работу (или стажировку) на должности <span>бэкенд-разработчика</span> и хочу поскорее устроиться в уютную и дружелюбную компанию. По поводу сотрудничества и рабочих вопросов вы можете связаться со мной по этому адресу: <a href="mailto:sn.world00@gmail.com"><span className="border-bottom border-info"> sn.world00@gmail.com</span></a>. Также, не забудьте посмотреть мои <Link to="/ru/projects"><span className="border-bottom border-info">проекты</span></Link>. Я очень надеюсь стать вашим лучшим кандидатом :)
            </p>
          </div>
          <div className="col-md-4 pr-0" id="pictures">
            <img src={picture} alt="profile-1" className="img-fluid mt-md-0 mt-5 mx-auto d-block" />
          </div>
        </div>
      </div>
      <LangLinkRu />
    </>
  )
}



export default AboutRu
