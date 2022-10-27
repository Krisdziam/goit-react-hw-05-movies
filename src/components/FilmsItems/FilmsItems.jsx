import React from 'react';
import { Link } from "react-router-dom";
import styles from './FilmsItems.module.css'
export default function FilmsItems({films}) {



    
    return (
        <div className={styles.container}>
        <ul className={styles.list}>
        {films.map((film)=> 
        <li className={styles.item} key={film.id}>
          <Link to={`/movies/${film.id}`}>
        <img  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} width='300' height='450' alt={film.title} />
        </Link>
        
        </li>
        
        )}
        </ul>
        
           </div>
    )
}
{/* <ul  >
{films.map(film =>
(<li key={film.id}>
    <img  src={
film.poster_path
  ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
  : `https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png`
}  width='300' height='450' alt={film.title} />
    {film.title};
</li>)
)}
</ul > */}