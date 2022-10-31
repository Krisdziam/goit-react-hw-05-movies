import { Link } from 'react-router-dom';

const FilmDetails = ({ data }) => {
  const { title, tagline, poster_path } = data;
  return (
    <>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
        />

        <div>
          <h2>{title}</h2>
          <h3>{tagline}</h3>
        </div>
      </div>
      <div>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>
    </>
  );
};

export default FilmDetails;
