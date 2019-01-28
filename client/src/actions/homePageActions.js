import axios from 'axios'
import store from '../store'


axios.defaults.baseURL = '/api'


export function getCategories() {
  var promise = new Promise((resolve, reject) => {
    axios.get('/categories').then(resp => {
      store.dispatch({
        type: 'GET_CATEGORIES', 
        payload: resp.data
      })
      resolve()
    })
  })

  return promise;
}


export function getCategory(slug) {
  if (store.getState().homePageReducer.categories.length === 0) {
    getCategories().then(() => getCat(slug))
  } else {
    getCat(slug)
  }
}

function getCat(slug) {
  axios.get('/listings/' + slug).then(resp => {
    store.dispatch({
      type: 'GET_CATEGORY', 
      payload: {
        slug: slug,
        listings: resp.data
      }
    })
  })
}

export function post(list) {
  axios.post('/listings', {
    listingName: list.listingName,
    coverphoto: list.coverphoto,
    text: list.text,
    cityId: list.cityId,
    categoryId: list.categoryId
  }).then(resp => {
    console.log('posting', resp)
  }) 
}