import { useEffect } from 'react'
import { useState } from 'react'
import { trendingMovieApi } from 'services/moviesApi'


export const Home = () => {
    const [trending, useTrending] = useState([])

    useEffect(() => {
        trendingMovieApi()
          .then(useTrending)
    }, [])

    if (!trending) {
        return 'Not Found'
      }

    return (
        <>
        <h2>Trending Today</h2>
        </>
    )
}