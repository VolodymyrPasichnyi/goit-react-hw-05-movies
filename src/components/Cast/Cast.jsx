import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { castMovieApi } from 'services/moviesApi';


const Cast = () => {
    const { movieId } = useParams()
    const [cast, setCast] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const moviesCast = async () => {
            try {
                setIsLoading(true)
                const data = await castMovieApi(movieId)
                setCast(data.cast)
            } catch (error) {
                toast.error(`${error.message}`)
            } finally {
                setIsLoading(false)
            }
        }
        moviesCast()
    }, [movieId])

    if (!cast) {
        return null
    }

    return (
      <>
        {cast.length > 0 ?
        <ul>
            {cast.map(({ id, profile_path, original_name, character  }) => (
                <li key={id}>
                    <img 
                        src={ profile_path
                            ? `https://image.tmdb.org/t/p/w185/${profile_path}`
                            : 'Not found'
                        }
                        alt={original_name} 
                    />
                  <p>Name: {original_name}</p>
                  <p>Character: {character}</p>
                </li>
            ))} 
        </ul>
        : <p>Not Found</p>
        }
        {isLoading && <Loader />}
      </>
    )
}

export default Cast