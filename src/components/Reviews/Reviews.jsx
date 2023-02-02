import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { reviewMovieApi } from 'services/moviesApi';

const Reviews = () => {
    const { movieId } = useParams()
    const [review, setReview] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const reviewMovie = async () => {
            try {
                setIsLoading(true)
                const data = await reviewMovieApi(movieId)
                setReview(data.results)
            } catch (error) {
                toast.error(`${error.message}`)
            } finally {
                setIsLoading(false)
            }
        }
        reviewMovie(false)
    }, [movieId])

    if (!review) {
        return null
    }

    return (
        <>
        {review.length > 0 ? 
          <ul>
            {review.map(({ id, content, author }) => (
                <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            ))}
          </ul>
          : 'Not found'
        }
          {isLoading && <Loader />}
        </>
    )

}

export default Reviews