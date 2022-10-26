import { useEffect, useState } from "react"
import { fetchFilms } from "components/ServiceApi/ServiceApi";
import styles from "./HomePage.module.css"
import { Link } from "react-router-dom";


export default function HomePage() {
const [films, setFilms] = useState([]);

useEffect(() => {
    fetchFilms().then((data)=> 
    setFilms(data))

  

}, [])



    
  return (
   <>
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
   
   </>
  )
}
