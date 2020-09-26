import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-feb8e.firebaseio.com/'
})