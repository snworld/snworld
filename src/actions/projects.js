import * as api from '../api/projects'

export const getProjects = () => async (dispatch) => {
  try {
    const response = await api.fetchProjects()
    dispatch({ type: 'FETCH_ALL', payload: response.data })
  } catch (error) {
    console.log(error.message)
  }
}
