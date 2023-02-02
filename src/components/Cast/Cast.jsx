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
                const data = await castMovieApi()
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
      <div>
        <ul>
            {cast.map({ id, poster_path, name, character  }) => (
                <li key={id}>
                    <img 
                        src=``
                        alt={name} 
                    />
                </li>
            )}
        </ul>
        {/* <ul>
          {cast.map(({ id, poster_path, name, character } => (
            <li key={id}>
                <img 
                    src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
                    alt={name}
                />
                <p>Name: {name}</p>
                <p>Character: {character}</p>
            </li>
            ))}
        </ul> */}
        {isLoading && <Loader />}
      </div>
    )
}

export default Cast