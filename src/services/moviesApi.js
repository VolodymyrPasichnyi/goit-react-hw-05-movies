import axios from 'axios'
import PropTypes from 'prop-types'

const BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = '7538a12bfd6329905e8a92c7c8ea2673'


export const trendingMovieApi = async () => {  
      const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        return data
}     

export const searchMovieApi = async (query) => {  
      const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`)
      return data
} 

export const detailsMovieApi = async (movie_id) => {  
      const { data } = await axios.get(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`)
      return data
} 

export const castMovieApi = async (movie_id) => {  
      const { data } = await axios.get(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`)
      return data
} 

export const reviewMovieApi = async (movie_id) => {  
      const { data } = await axios.get(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`)
      return data
} 


searchMovieApi.propTypes = {
      query: PropTypes.string.isRequired,
}

detailsMovieApi.propTypes = {
      movie_id: PropTypes.number.isRequired,
}

castMovieApi.propTypes = {
      movie_id: PropTypes.number.isRequired,
}

castMovieApi.propTypes = {
      movie_id: PropTypes.number.isRequired,
}

