import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { fetchCasts } from 'components/ServiceApi/ServiceApi';

export default function FilmsCast() {
  const [film, setFilm] = useState([])
  const {id} = useParams()
  useEffect(() => {
    fetchCasts(id)
        .then((data) => {
        
          setFilm(data);
        })
      
    }, [id]);
  
  
  
 
  
      return (
        <>
        {film.map(({ character, id, name, profile_path }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="150px"
              />
            ) : (
              <img
                src={
                  'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4='
                }
                alt={name}
                width="150px"
              />
            )}
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}</>
      );
    
}
