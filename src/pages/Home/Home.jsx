import { lazy, useEffect, useState } from 'react'
import { trendingMovieApi } from 'services/moviesApi'
import { toast } from "react-hot-toast"
import { Loader } from 'components/Loader/Loader'
import css from '../Home/Home.module.css'


const MoviesList = lazy(() => import('components/MoviesList/MoviesList'))


export const Home = () => {
    const [movies, setMovies] = useState(null)
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
          <MoviesList 
            movies={movies}
          />
        {isLoading && <Loader />}
        </div>
      </>
    )
}