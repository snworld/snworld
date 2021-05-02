import Navbar from './Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Video from './pages/Video'
import ProjectPage from './pages/ProjectPage'
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import { ArrowBackCircleOutline } from 'react-ionicons'

function App() {
  return (
    <Router>
      <div className="content">
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/video" component={Video} />
          <Route path="/project/:projectID" component={ProjectPage} />
          <Route>
            <div className="text-center text-white">
              <h1>404!</h1>
              <h6 className="my-3">Oops! Fage not found.</h6> 
              <h6><Link to="/" className="text-decoration-none" style={{color: "#00ff40"}}>
              <ArrowBackCircleOutline className="m-1 ionicon" color={'#00ff40'} style={{display: "inline-block", verticalAlign: "middle"}} />  
                Back to Home
              </Link></h6>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;