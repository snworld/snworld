import React, { useEffect } from 'react'
// import Viewer from 'react-viewer';
import { OpenOutline, ArrowBackCircleOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getProjects } from '../actions/projects'
import { useParams } from "react-router-dom";

const Project = () => {

  // const [visibleProject, setVisibleProject] = useState(false)

  const projects = useSelector(state => state.projects)

  const dispatch = useDispatch()

  useEffect(() =>  {
    dispatch(getProjects())
  }, [dispatch])

  const { projectID } = useParams()

  const project = projects.find(x => x._id === projectID )

  return (
    <div className="container project-single" style={{maxWidth: "750px"}}>
      <div className="row">
        <div className="col-12" id="pictures">
          <div className="d-flex flex-wrap flex-column flex-sm-row justify-content-between align-items-center mb-4">
            <h6 className="fw-normal mb-2">{ project.name }</h6>
            <a className="mb-2" href={project.demo} rel="noreferrer" target="_blank">
              Demo
              <OpenOutline className="ionicon" color={'#fff'} />
            </a>
          </div>
          {/* <img onClick={() => { setVisibleProject(true); } } src={`data:image/png;base64,${ project.thumbnail }`} alt="project-image1" className="img-fluid d-block" style={{width: "700px"}} />
          <Viewer
            visible={visibleProject}
            onClose={() => { setVisibleProject(false); } }
            images={[{src: `data:image/png;base64,${ project.thumbnail }`}]}
            zoomable={false} attribute={false} rotatable={false} scalable={false} noResetZoomAfterChange={false}
          /> */}
        </div>
        <div className="col-12 my-3">
          <div className="lists d-flex flex-wrap justify-content-evenly">
            <div className="list"> 
              <h6 className="fw-normal text-center">Technical List</h6>
              <hr />
              <ul>
                { project.techList.map(tech => (
                  <li key={tech}>{ tech }</li>
                )) }
              </ul>
            </div>
            <div className="list">
              <h6 className="fw-normal text-center">App Details</h6>
              <hr />
              <ul>
                { project.details.map(detail => (
                  <li key={detail}>{ detail }</li>
                )) }
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between">
            <Link to="/projects">
              <ArrowBackCircleOutline className="mt-1 ionicon" color={'#fff'} style={{display: "inline-block", verticalAlign: "middle"}} />
              Go Back
            </Link>
            <a href={project.demo} rel="noreferrer" target="_blank">
              { project.demo }
              <OpenOutline className="ionicon" color={'#fff'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
