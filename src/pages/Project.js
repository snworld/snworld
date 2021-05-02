import React from 'react'
import { Link } from 'react-router-dom'


const Project = ({ project }) => {

  return (
    <div className="project col-md-4">
      <div className="overlay two-buttons" style={{borderColor: "aqua"}}>
        <img src={`data:image/png;base64,${project.thumbnail}`} alt="checklist" className="img-fluid m-auto d-block" />
        <div className="ovrly"></div>
        <div className="buttons">
          <a href={project.demo} rel="noreferrer" target="_blank" className="btn">View Demo</a>
          <Link to={`/project/${ project._id}`} className="btn">Read More</Link>
        </div>
      </div>
    </div>
  )
}

export default Project
