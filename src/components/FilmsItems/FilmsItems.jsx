import React from 'react';

export default function FilmsItems({films}) {



    
    return (
        <ul  >
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
        </ul >
    )
}
