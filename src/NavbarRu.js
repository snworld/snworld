import React from 'react'
import { NavLink } from 'react-router-dom'
import { PersonCircleOutline, ConstructOutline, ReceiptOutline, ChatbubblesOutline } from 'react-ionicons'
// VideocamOutline


const NavbarRu = () => {
  return (
    <header>
      <div className="main-navbar" style={{position: "relative"}}>
        <ul className="nav flex-wrap justify-content-center">
          <li className="nav-item">
            <NavLink exact to="/ru" activeClassName='active' className="nav-link about-link">
              <PersonCircleOutline className="ionicon" color={'#fff'} />
              О нас
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/ru/skills" activeClassName='active' className="nav-link">
              <ConstructOutline className="ionicon" color={'#fff'} />
              Навыки
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/ru/projects" activeClassName='active' className="nav-link">
              <ReceiptOutline className="ionicon" color={'#fff'} />
              Проекты
            </NavLink>
          </li>
          {/*<li className="nav-item">
            <NavLink exact to="/video" activeClassName='active' className="nav-link">
              <VideocamOutline className="ionicon" color={'#fff'} />
              Video
            </NavLink>
          </li>*/}
          <li className="nav-item">
            <NavLink exact to="/ru/contact" activeClassName='active' className="nav-link">
              <ChatbubblesOutline className="ionicon" color={'#fff'} />
              Контакты
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default NavbarRu
