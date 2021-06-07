import React from 'react'
import { NavLink } from 'react-router-dom'
import { PersonCircleOutline, ConstructOutline, ReceiptOutline, ChatbubblesOutline } from 'react-ionicons'
// VideocamOutline


const NavbarEn = () => {
  return (
    <header>
      <div className="main-navbar" style={{position: "relative"}}>
        <ul className="nav flex-wrap justify-content-center">
          <li className="nav-item">
            <NavLink exact to="/en" activeClassName='active' className="nav-link about-link">
              <PersonCircleOutline className="ionicon" color={'#fff'} />
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/en/skills" activeClassName='active' className="nav-link">
              <ConstructOutline className="ionicon" color={'#fff'} />
              Skillset
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/en/projects" activeClassName='active' className="nav-link">
              <ReceiptOutline className="ionicon" color={'#fff'} />
              Projects
            </NavLink>
          </li>
          {/*<li className="nav-item">
            <NavLink exact to="/video" activeClassName='active' className="nav-link">
              <VideocamOutline className="ionicon" color={'#fff'} />
              Video
            </NavLink>
          </li>*/}
          <li className="nav-item">
            <NavLink exact to="/en/contact" activeClassName='active' className="nav-link">
              <ChatbubblesOutline className="ionicon" color={'#fff'} />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default NavbarEn
