import React from 'react'
import LangLinkEn from '../../LangLinkEn'
import { Link } from 'react-router-dom'


const ProjectEn = ({ project }) => {

  return (
    <>
      <div className="project col-md-4">
        <div className="overlay two-buttons" style={{borderColor: "#00ff40"}}>
          <img src={`data:image/png;base64,${project.thumbnail}`} alt="checklist" className="img-fluid m-auto d-block" />
          <div className="ovrly"></div>
          <div className="buttons">
            <a href={project.demo} rel="noreferrer" target="_blank" className="btn">View Demo</a>
            <Link to={`/en/project/${ project._id}`} className="btn">Read More</Link>
          </div>
        </div>
      </div>
      <LangLinkEn />
    </>
  )
}

export default ProjectEn
