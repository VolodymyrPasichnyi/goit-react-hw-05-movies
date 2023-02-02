import { lazy, useState } from "react"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
import { useSearchParams } from "react-router-dom"
import { searchMovieApi } from "services/moviesApi"
import { Loader } from 'components/Loader/Loader'


const MoviesList = lazy(() => import('components/MoviesList/MoviesList'))
const SearchBar = lazy(() => import('components/SearchBar/SearchBar'))


const Movies = () => {
    const [recivedMovies, setRecivedMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('query') ?? ''
    const [isLoading, setIsLoading] = useState(false)
  
    const handleSearchQueryChange = value => {
      setSearchParams({ query: value })
    }
  
    useEffect(() => {
      if (searchQuery === '') {
        return
      }
    const seerchMovie = async () => {
        try {
          setIsLoading(true)
          const data = await searchMovieApi(searchQuery)
          setRecivedMovies(data.results)
          if (data.total_results === 0) {
            return toast.error('No found movies')
          }
        } catch (error) {
          toast.error(`${error.message}`)
        } finally {
          setIsLoading(false)
        }
    };
        seerchMovie()
    }, [searchQuery])
  
    return (
      <main>
        <SearchBar 
            formSubmit={handleSearchQueryChange}
        />
        <MoviesList 
            movies={recivedMovies} 
        />
        {isLoading && <Loader />}
      </main>
    )
 }


 export default Movies