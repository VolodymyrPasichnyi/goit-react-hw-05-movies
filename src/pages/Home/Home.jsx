import { useEffect } from 'react'
import { useState } from 'react'
import { trendingMovieApi } from 'services/moviesApi'
import { Link } from 'react-router-dom'


export const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
      const trendingMovie = async () => {
        try {  
          const data = await trendingMovieApi()
          setMovies([...data.results])
        } catch (error) {
          console.log(error)
        } 
      }
      trendingMovie()
    },[])

    return (
      <>
        <div>
          <h2>Trending Today:</h2>
          <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
        ))}
        </ul>
        </div>
      </>
    )
}