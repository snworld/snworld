import axios from 'axios'

const url = 'https://sn-portfolio-server.herokuapp.com/projects'

export const fetchProjects = () => axios.get(url)
