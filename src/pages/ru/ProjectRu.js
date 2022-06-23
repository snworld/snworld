import React from 'react'
import LangLinkRu from '../../LangLinkRu'
import { Link } from 'react-router-dom'


const ProjectRu = ({ project }) => {

  return (
    <>
      <div className="project col-md-4">
        <div className="overlay two-buttons" style={{borderColor: "#00ff40"}}>
          <img src={`data:image/png;base64,${project.thumbnail}`} alt="checklist" className="img-fluid m-auto d-block" />
          <div className="ovrly"></div>
          <div className="buttons">
            <a href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'} className="btn">Демо</a>
            <Link to={`/ru/project/${ project._id}`} className="btn">Детали</Link>
          </div>
        </div>
      </div>
      <LangLinkRu />
    </>
  )
}

export default ProjectRu
