const initialState = {
  categories: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    // add actions here
    case 'GET_CATEGORIES':
      return {...state, categories: action.categories}
    default:
      return state
  }
}