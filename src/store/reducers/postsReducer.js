const initState = {
  posts: [],
  loading: true
}

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return {
        ...state, 
        data: action.payload,
        loading: false
      }
    case 'HIDE_DATA':
      return {
        ...state, 
        data: action.payload,
      }
    default:
      return state
  }

}