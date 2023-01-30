import axios from 'axios'

const BASE_URL = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})
const API_KEY = '7538a12bfd6329905e8a92c7c8ea2673'
const trendingMovie = 'trending/movie/day'
const searchMovie = 'search/movie'


export const trendingMovieApi = async () => {  
    try {
      const { data } = await BASE_URL.get(trendingMovie, {
          params: {
            api_key: API_KEY,
          },
        })
        return data
    } catch (error) {
      console.error(error)
    }
}     

export const searchMovieApi = async () => {  
    try {
      const { data } = await BASE_URL.get(`/${searchMovie}`, {
          params: {
            api_key: API_KEY,
          },
        })
        return data
    } catch (error) {
      console.error(error)
    }
} 

export const detailsMovieApi = async (movie_id) => {  
    try {
      const { data } = await BASE_URL.get(`/movie/${movie_id}`, {
          params: {
            api_key: API_KEY,
          },
        })
        return data
    } catch (error) {
      console.error(error)
    }
} 

export const creditsgMovieApi = async (movie_id) => {  
    try {
      const { data } = await BASE_URL.get(`/movie/${movie_id}/credits`, {
          params: {
            api_key: API_KEY,
          },
        })
        return data
    } catch (error) {
      console.error(error)
    }
} 

export const reviewsMovieApi = async (movie_id) => {  
    try {
      const { data } = await BASE_URL.get(`/movie/${movie_id}/reviews`, {
          params: {
            api_key: API_KEY,
          },
        })
        return data
    } catch (error) {
      console.error(error)
    }
} 