import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import styles from './FilmsDetails.module.css'
import { IoArrowBackOutline } from "react-icons/io5";

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
   <>
      <div className={styles.details}>
        <div className={styles.img__wrapper}>
        <img className={styles.img}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt="poster"
          width="350"
          height="400"
        />
    <Link className={styles.goBackBtn} to={location?.state?.from || '/'}><IoArrowBackOutline/></Link></div>

        <div className={styles.description}>
          <div className={styles.title__wrapper}>
          <h2 className={styles.title}>{title}</h2>
          {tagline !== "" ? <p className={styles.tagline}>"{tagline}"</p> : '' }
         </div>

          <ul className={styles.list}>
            <li className={styles.item}>User Score:<span className={styles.span}> {vote_average}</span></li>
            <li className={styles.item}>Runtime: <span className={styles.span}>{timeConvert(runtime)}</span></li>
            <li className={styles.item}>Release date: <span className={styles.span}>{new Date(release_date).toLocaleDateString()}</span></li>
            <li className={styles.item}>Genres: <ul className={styles.genres}>  
            {genres.length > 0 ? (
              genres.map(({ id, name }, index) => (
                <li className={styles.genres__item} key={id}>
                  {(index ? ', ' : '') + name}
                </li>
              ))
            ) : (
              <p className={styles.genres__item}>Other</p>
            )}</ul></li>
           
            <li className={styles.item}>Countries: <span className={styles.span}>{production_countries.map(({name}) => name)}</span></li>
          </ul>
          
        <p className={styles.overview}>{overview}</p>
          
           
       
        
     
      <div className={styles.moreInfo}>
        <Link className={styles.nextBtn} to={'cast'}>Cast</Link>
        <Link className={styles.nextBtn} to={'reviews'}>Reviews</Link></div>
      </div> </div>
      </>
  );
};

export default FilmDetails;
