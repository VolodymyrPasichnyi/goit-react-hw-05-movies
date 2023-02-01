import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useParams } from "react-router-dom"
import { detailsMovieApi } from "services/moviesApi"


export const MovieDetails = () => {
    const [movie, setMovie] = useState(null)
    const { movieId } = useParams()

    useEffect(() => {
        const movieDetails = async () =>{
            try {
                const data = await detailsMovieApi(movieId)
                setMovie(data)
            } catch (error) {
                toast.error('Error')
            }
        }
        movieDetails()
    }, [movieId])

    if (!movie) {
        return null
    }

    // const { genres, original_title, overview, poster_path } = movie

    return (
        <>
        <div>
            <img src="" alt="" />
        </div>
        </>
    )
}