import React from 'react'
import NavbarEn from '../../NavbarEn'
import LangLinkEn from '../../LangLinkEn'
// import { OpenOutline, ArrowBackCircleOutline } from 'react-ionicons'
import { ArrowBackCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import { withRouter  } from "react-router-dom";

class ProjectPageEn extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {

//     }
//     this.getProjects = this.getProjects.bind(this)
//   }

//   async getProjects() {
//     const res = await fetch("../projects.json")
//     const data = await res.json()
//     return data.projects
//   }

//   async componentDidMount() {
//     const projectid = this.props.match.params.projectID

//     let allProjects = await this.getProjects()
//     allProjects.filter(project => project.id === projectid && this.setState(project))
//   }

  render() {

//     const project = this.state

    return (
      <>
        <NavbarEn />
        <div className="container project-single" style={{maxWidth: "750px"}}>
          <div className="row">
            <div className="col-12" id="pictures">
              <div className="d-flex flex-wrap flex-column flex-sm-row justify-content-between align-items-center mb-4">
                <h6 className="fw-normal mb-2"> project_name</h6>
                {/*<a className="mb-2" href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'}>
                  Demo
                  <OpenOutline className="ionicon" color={'#fff'} />
                </a>*/}
              </div>
              {/*<img src={`/projects/${ project.thumbnail }`} alt={`projects/${ project.thumbnail }`} className="img-fluid d-block" style={{width: "700px"}} />*/}
            </div>
            <div className="col-12 mt-4">
              <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
                <Link to="/projects">
                  <ArrowBackCircleOutline className="mt-1 ionicon" color={'#fff'} style={{display: "inline-block", verticalAlign: "middle"}} />
                  Go Back
                </Link>
                {/*<a href={project.demo} rel="noreferrer" target={project.demo !== '#' ? '_blank' : '_self'}>
                  Demo
                  <OpenOutline className="ionicon" color={'#fff'} />
                </a>*/}
              </div>
            </div>
          </div>
        </div>
        <LangLinkEn />
      </>
    )
  }
}

export default withRouter(ProjectPageEn)
