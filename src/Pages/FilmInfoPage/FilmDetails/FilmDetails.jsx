import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './FilmsDetails.module.css'
import {

  Link,
} from 'react-router-dom';
const FilmDetails = ({ data }) => {
  const location = useLocation();
  const {
    genres,

    overview,
    release_date,
    production_countries,
    runtime,
    vote_average,
    title,
    tagline,
    poster_path,
  } = data;


  function timeConvert(time) {
    var duration = time;
    var hours = duration / 60;
    var roundedHours = Math.floor(hours);
    var minutes = (hours - roundedHours) * 60;
    var roundedMinutes = Math.round(minutes);
    let hoursText =
      roundedHours === 1
        ? `${roundedHours} hour `
        : `${roundedHours} hours `;
    let minutesText =
      roundedMinutes === 1
        ? `${roundedMinutes} minute`
        : `${roundedMinutes} minutes`;

    if (roundedHours === 0) {
      hoursText = '';
    }
    if (roundedMinutes === 0) {
      minutesText = '';
    }

    return hoursText + minutesText;
  }

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <img className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          width="350"
          height="400"
        />

        <div>
          <h2>{title}</h2>
          <p className={styles.tagline}>"{tagline}"</p>
          <ul className={styles.list}>
            <li className={styles.item}>User Score:<span className={styles.span}> {vote_average}</span></li>
            <li className={styles.item}>  Runtime: <span className={styles.span}>{timeConvert(runtime)}</span></li>
            <li className={styles.item}><ul className={styles.genres}> <span className={styles.spanGenres}> Genres:  </span>
            {genres.length > 0 ? (
              genres.map(({ id, name }, index) => (
                <li className={styles.genres__item} key={id}>
                  {(index ? ', ' : '') + name}
                </li>
              ))
            ) : (
              <p>Other</p>
            )}</ul></li>
            <li className={styles.item}>Release date: <span className={styles.span}>{new Date(release_date).toLocaleDateString()}</span></li>
            <li className={styles.item}>Countries: <span className={styles.span}>{production_countries.map(({name}) => name)}</span></li>
          </ul>
          
        <p>{overview}</p>
          
           
       
        </div>
      </div>
      <div>
        <Link to={'cast'}>Cast</Link>
        <Link to={'reviews'}>Reviews</Link>
      </div>
    </div>
  );
};

export default FilmDetails;
