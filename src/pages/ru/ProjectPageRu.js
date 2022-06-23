import React from 'react'
import NavbarRu from '../../NavbarRu'
import LangLinkRu from '../../LangLinkRu'
import Viewer from 'react-viewer';
import { OpenOutline, ArrowBackCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

class ProjectPageEn extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
    this.getProjects = this.getProjects.bind(this)
  }

  async getProjects() {
    const res = await fetch("../projects.json")
    const data = await res.json()
    return data.projects
  }

  async componentDidMount() {
    const projectid = this.props.match.params.projectID

    let allProjects = await this.getProjects()
    allProjects.filter(project => project.id === projectid && this.setState(project))
  }

  render() {

    const project = this.state
    
    return (
      <>
        <NavbarRu />
        <div className="container project-single" style={{maxWidth: "750px"}}>
          <div className="row">
            <div className="col-12" id="pictures">
              <div className="d-flex flex-wrap flex-column flex-sm-row justify-content-between align-items-center mb-4">
                <h6 className="fw-normal mb-2">{ project.name }</h6>
                <a className="mb-2" href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'}>
                  Demo
                  <OpenOutline className="ionicon" color={'#fff'} />
                </a>
              </div>
              <img src={`/projects/${ project.thumbnail }`} alt={`projects/${ project.thumbnail }`} className="img-fluid d-block" style={{width: "700px"}} />
            </div>
//             <div className="col-12 my-3">
//               <div className="lists d-flex flex-wrap justify-content-center">
//                 <div className="list"> 
//                   <h6 className="fw-normal text-center">Течнический список</h6>
//                   <hr />
//                   <ul>
//                     { project.techList.map(tech => (
//                       <li key={tech}>
//                         <span>{ tech }</span>
//                       </li>
//                     )) }
//                   </ul>
//                 </div>
//                 <div className="list">
//                   <h6 className="fw-normal text-center">Детали проекта</h6>
//                   <hr />
//                   <ul>
//                     { project.details.map(detail => (
//                       <li key={detail}>
//                         <span>{ detail }</span>
//                       </li>
//                     )) }
//                   </ul>
//                 </div>
//               </div>
//             </div>
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                <Link to="/ru/projects">
                  <ArrowBackCircleOutline className="mt-1 ionicon" color={'#fff'} style={{display: "inline-block", verticalAlign: "middle"}} />
                  Go Back
                </Link>
                <a href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'}>
                  Demo
                  <OpenOutline className="ionicon" color={'#fff'} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <LangLinkRu />
      </>
    )
  }
 }

export default ProjectPageRu
