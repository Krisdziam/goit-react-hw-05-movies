import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { fetchCasts } from 'ServiceApi/ServiceApi';
import styles from './FilmsCast.module.css'

export default function FilmsCast() {
  const [film, setFilm] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchCasts(id)
      .then(data => {
        Loading.pulse({
          svgColor: '#32c682',
          svgSize: '100px',
          cssAnimationDuration: 800,
        });
        setFilm(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

  return (
    <>


<ul className={styles.castList}>
      {film.map(({ character, id, name, profile_path }) => (
        <li className={styles.castItem} key={id}>
          <div className={styles.castImg__wrapper}>{profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="150"
             
            />
          ) : (
            <img
              src={
                'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4='
              }
              alt={name}
              width="160"
        
            />
          )}</div>
          <div className={styles.castName__wrapper}>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.character}>{character}</p></div>
        </li>
      ))}</ul>
    </>
  );
}
