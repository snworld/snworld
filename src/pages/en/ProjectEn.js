import React from 'react'
// import LangLinkEn from '../../LangLinkEn'
import { Link } from 'react-router-dom'


const ProjectEn = ({ project }) => {

  return (
    <>
      <div className="project col-md-4">
        <div className="overlay two-buttons" style={{borderColor: "#00ff40"}}>
          <img src={`projects/${project.thumbnail}`} alt={project.name} className="img-fluid m-auto d-block" />
          <div className="ovrly"></div>
          <div className="buttons">
            <a href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'} className="btn">View Demo</a>
            <Link to={`/project/${ project.id}`} className="btn">Read More</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectEn
