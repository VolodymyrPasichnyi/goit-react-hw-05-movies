import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { Link, useLocation, useParams } from "react-router-dom"
import { detailsMovieApi } from "services/moviesApi"


const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()
    const location = useLocation()

    useEffect(() => {
        const movieDetails = async () =>{
            try {
                const data = await detailsMovieApi(movieId)
                setMovie(data)
            } catch (error) {
                toast.error('Error!')
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
        <Link to={location.state?.from ?? '/movies'}>Go Back</Link>
        <div>
            <img src={poster_path} alt={original_title} />
        </div>
        <div>
            <h3>{original_title}</h3>
            <p>Overview: {overview}</p>
            <h3>Genres</h3>

        </div>

        </>
    )
}


export default MovieDetails