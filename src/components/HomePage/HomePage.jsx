import { useEffect, useState } from "react"
import { fetchFilms } from "components/ServiceApi/ServiceApi";

export default function HomePage() {
const [films, setFilms] = useState([]);

useEffect(() => {
    fetchFilms().then((data)=> 
    setFilms(data))

  

}, [])


console.log(films)
    
  return (
   <>
   <div>
<ul>
{films.map((film)=> 
<li key={film.id}>
<img  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} alt="hi" />


</li>

)}
</ul>

   </div>
   
   </>
  )
}
