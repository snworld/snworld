import React, { useState, useEffect } from 'react'
import NavbarEn from '../../NavbarEn'
import Project from './ProjectEn'
import axios from 'axios'

class ProjectsEn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      allProjects: [],
    }
    this.getProjects = this.getProjects.bind(this)
  }

  async getProjects() {
    const res = await fetch("./projects.json")
    const data = await res.json()
    return data.projects
  }

  async componentDidMount() {
    const allProjects = await this.getProjects()
    this.setState({ allProjects })
  }
  
  render() {
    return (
      <>
        <NavbarEn />
        <div className="container projects" style={{maxWidth: "900px"}}>
          
          <div className="categories d-flex flex-wrap justify-content-center">
            <button href="#!" className="category active">
              <span>All</span>
              {/*<span className="number">{ projects.length }</span>*/}
            </button>
            <button href="#!" className="category" style={{color: "darkorange"}}>
              <span>Front End</span>
              <span className="number">11</span>
            </button>
            <button href="#!" className="category" style={{color: "aqua"}}>
              <span>Back End</span>
              <span className="number">7</span>
            </button>
            <button href="#!" className="category" style={{color: "tomato"}}>
              <span>Full Stack</span>
              <span className="number">7</span>
            </button>
            <button href="#!" className="category" style={{color: "deepskyblue"}}>
              <span>REST API</span>
              <span className="number">3</span>
            </button>
            <button href="#!" className="category" style={{color: "mediumspringgreen"}}>
              <span>WordPress</span>
              <span className="number">1</span>
            </button>
            <button href="#!" className="category" style={{color: "lightsalmon"}}>
              <span>eCommerce</span>
              <span className="number">1</span>
            </button>
            <button href="#!" className="category" style={{color: "#ff3e3e"}}>
              <span>Static</span>
              <span className="number">4</span>
            </button>
            <button href="#!" className="category" style={{color: "magenta"}}>
              <span>Games</span>
              <span className="number">1</span>
            </button>
          </div>
          
          <div className="projects-grid row">
            { !this.state.allProjects.length ? (
              <div className="m-auto my-5 d-flex flex-column align-items-center">
                <span className="loading-dots my-3" style={{fontSize: "14px"}}>Loading</span>
              </div>
            ) : this.state.allProjects.slice(0).reverse().map(project => (
                  <Project key={project.id} project={project} />
                )) 
            }
          </div>
        
        </div>
      </>
    )
  }
}

export default ProjectsEn
