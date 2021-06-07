import Lang from './pages/Lang'
import AboutEn from './pages/en/AboutEn'
import SkillsEn from './pages/en/SkillsEn'
import ProjectsEn from './pages/en/ProjectsEn'
import ContactEn from './pages/en/ContactEn'
import ProjectPageEn from './pages/en/ProjectPageEn'

import AboutRu from './pages/ru/AboutRu'
import SkillsRu from './pages/ru/SkillsRu'
import ProjectsRu from './pages/ru/ProjectsRu'
import ContactRu from './pages/ru/ContactRu'
import ProjectPageRu from './pages/ru/ProjectPageRu'

import Video from './pages/Video'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import { ArrowBackCircleOutline } from 'react-ionicons'

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Lang} />
          <Route exact path="/en" component={AboutEn} />
          <Route exact path="/en/skills" component={SkillsEn} />
          <Route path="/en/projects" component={ProjectsEn} />
          <Route exact path="/en/contact" component={ContactEn} />
          <Route exact path="/video" component={Video} />
          <Route path="/en/project/:projectID" component={ProjectPageEn} />
          <Route exact path="/ru" component={AboutRu} />
          <Route exact path="/ru/skills" component={SkillsRu} />
          <Route path="/ru/projects" component={ProjectsRu} />
          <Route exact path="/ru/contact" component={ContactRu} />
          <Route path="/ru/project/:projectID" component={ProjectPageRu} />
          <Route>
            <div className="text-center text-white">
              <h1>404!</h1>
              <h6 className="my-3">Oops! Fage not found.</h6> 
              <h6>
                <Link to="/" className="text-decoration-none" style={{color: "#00ff40"}}>
                  <ArrowBackCircleOutline className="m-1 ionicon" color={'#00ff40'} style={{display: "inline-block", verticalAlign: "middle"}} />  
                  Back to Home
                </Link>
              </h6>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;