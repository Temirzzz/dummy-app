import axios from "axios"

export const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 100
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

export const getPosts = ()   => async dispatch => {
  try {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch({
      type: 'GET_DATA',
      payload: response.data
    })
  } catch (error) {
    console.log(error);
  }
}

export const hidePosts = () => {
  return {
    type: 'HIDE_DATA',
    payload: null
  }
}