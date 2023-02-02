import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const MoviesList = ({ movies }) => {
    const location = useLocation()

    if (!movies) {
        return null
    }

    return (
      <div>
        <ul>
        {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
        ))}
        </ul>
      </div>
    )
}


MoviesList.propTypes = {
  movies: PropTypes.array,
}


export default MoviesList