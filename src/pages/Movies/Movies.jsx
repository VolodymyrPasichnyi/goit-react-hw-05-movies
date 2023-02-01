import { MoviesList } from "components/MoviesList/MoviesList"
import { SearchBar } from "components/SearchBar/SearchBar"
import { useState } from "react"
import { useEffect } from "react"
import { toast } from "react-hot-toast"
import { useSearchParams } from "react-router-dom"
import { searchMovieApi } from "services/moviesApi"

export const Movies = () => {
    const [movies, setMovies] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchQuery = searchParams.get('query' ?? '')

    const handleChange = (value) => {
        setSearchParams({ query: value })
    }

    useEffect(() => {
        if (searchQuery === '') {
            return
        }
        const getMovies = async () => {
            try {
              const data = await searchMovieApi(searchQuery)
              setMovies(data.results)
              if (data.total_results === 0) {
                return toast.error('No find')
              }
            } catch (error) {
                toast.error('Error')
            }
        }
        getMovies()
    }, [searchQuery])

    return (
        <>
        <SearchBar 
            onSubmit={handleChange} 
            searchQuery={searchQuery}
        />
        <MoviesList movies={movies}/>
        </>
    )
}