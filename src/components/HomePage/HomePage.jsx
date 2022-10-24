import { useEffect, useState } from "react"
import { fetchFilms } from "components/ServiceApi/ServiceApi";
import styles from "./HomePage.module.css"


export default function HomePage() {
const [films, setFilms] = useState([]);

useEffect(() => {
    fetchFilms().then((data)=> 
    setFilms(data))

  

}, [])


console.log(films)
    
  return (
   <>
   <div className={styles.container}>
<ul className={styles.list}>
{films.map((film)=> 
<li className={styles.item} key={film.id}>
<img  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} width='300' height='450' alt={film.title} />


</li>

)}
</ul>

   </div>
   
   </>
  )
}
