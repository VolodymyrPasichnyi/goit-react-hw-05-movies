import { useEffect } from 'react'
import { useState } from 'react'
import { trendingMovieApi } from 'services/moviesApi'
import { Link, Outlet } from 'react-router-dom'
import { Suspense } from 'react'


export const Home = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        trendingMovieApi()
          .then(response => {
            if (response.ok) {
              return response.json()
            }
            return Promise.reject(new Error('Not found'))
          })
          .then(data => setMovies(data.results))
          .catch(error => console.log(error))
    }, [])

    if (!movies) {
        return 
    }

    return (
      <>
        <div>
          <h2>Trending Today:</h2>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
        ))}
        </div>
        {/* <Suspense> */}
          <Outlet/>
        {/* </Suspense> */}
      </>
    )
}