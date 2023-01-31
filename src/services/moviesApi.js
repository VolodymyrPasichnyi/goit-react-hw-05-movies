import axios from 'axios'


const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = '7538a12bfd6329905e8a92c7c8ea2673'


export const trendingMovieApi = async () => {  
      const { data } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
        return data
}     

export const searchMovieApi = async () => {  
      const { data } = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}`)
      return data
} 

// export const detailsMovieApi = async (movie_id) => {  
//     try {
//       const { data } = await BASE_URL.get(`/movie/${movie_id}`, {
//           params: {
//             api_key: API_KEY,
//           },
//         })
//         return data
//     } catch (error) {
//       console.error(error)
//     }
// } 

// export const creditsgMovieApi = async (movie_id) => {  
//     try {
//       const { data } = await BASE_URL.get(`/movie/${movie_id}/credits`, {
//           params: {
//             api_key: API_KEY,
//           },
//         })
//         return data
//     } catch (error) {
//       console.error(error)
//     }
// } 

// export const reviewsMovieApi = async (movie_id) => {  
//     try {
//       const { data } = await BASE_URL.get(`/movie/${movie_id}/reviews`, {
//           params: {
//             api_key: API_KEY,
//           },
//         })
//         return data
//     } catch (error) {
//       console.error(error)
//     }
// } 