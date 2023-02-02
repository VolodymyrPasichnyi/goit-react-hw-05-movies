import { useEffect, useState } from 'react'
import { trendingMovieApi } from 'services/moviesApi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { toast } from "react-hot-toast"
import { Loader } from 'components/Loader/Loader'
import css from '../Home/Home.module.css'



export const Home = () => {
    const [movies, setMovies] = useState([])
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true);
      const trendingMovie = async () => {
        try {  
          const data = await trendingMovieApi()
          setMovies([...data.results])
        } catch (error) {
          return toast.error('')
        } finally {
          setIsLoading(false)
        }
      }
      trendingMovie()
    },[])

    return (
      <>
        <div className={css.main}>
          <h2>Trending Today:</h2>
          <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
        ))}
        </ul>
        {isLoading && <Loader />}
        </div>
      </>
    )
}