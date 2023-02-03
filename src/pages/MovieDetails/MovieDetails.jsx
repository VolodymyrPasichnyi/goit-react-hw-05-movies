import { Loader } from "components/Loader/Loader"
import { Suspense, useEffect } from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { detailsMovieApi } from "services/moviesApi"



const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()
    const location = useLocation()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const movieDetails = async () =>{
            try {
                setIsLoading(true)
                const data = await detailsMovieApi(movieId)
                setMovie(data)
            } catch (error) {
                toast.error('Error!')
            } finally {
                setIsLoading(false)
            }
        }
        movieDetails()
    }, [movieId])

    if (!movie) {
        return null
    }

    const { genres, original_title, overview, poster_path } = movie

    return (
      <>
        <Link to={location.state?.from ?? '/'}>
            <button>Go Back</button>
        </Link>
        <div>
            <img 
                src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                alt={original_title} />
        </div>
        <div>
            <h3>{original_title}</h3>
            <p>Overview: {overview}</p>
            <p>Genres:
                {genres.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </p>
        </div>
        <div>
            <h3>Additional information</h3>
            <ul>
                <li>
                    <Link to='cast' state={{ from: location.state.from }}>Cast</Link>
                </li>
                <li>
                    <Link to='reviews' state={{ from: location.state.from }}>Reviews</Link>
                </li>
            </ul>
        </div>
        {isLoading && <Loader />}
        <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      </>
    )
}


export default MovieDetails