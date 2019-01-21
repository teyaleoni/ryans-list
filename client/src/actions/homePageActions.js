import axios from 'axios'
import store from '../store'

axios.defaults.baseURL = '/api'

export function getCategories() {
  axios.get('/categories').then(resp => {
    store.dispatch({
      type: 'GET_CATEGORIES', 
      categories: resp.data.categories
    })
  })
}