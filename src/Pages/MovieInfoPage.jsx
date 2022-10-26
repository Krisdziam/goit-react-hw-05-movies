import { fetchInfo } from "components/ServiceApi/ServiceApi"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Loading } from "notiflix/build/notiflix-loading-aio";



export default function MovieInfoPage() {
const [film, setFilm] = useState()
const {id} = useParams()


useEffect(() => {
    fetchInfo(id)
      .then((data) => {
        Loading.circle({
          svgColor: "#ff6b01",
          cssAnimationDuration: 800,
        });
        setFilm(data);
      })
      .finally(() => {
        Loading.remove();
      });
  }, [id]);

console.log(film);

  return (
    <div>

{film && film.title}


    </div>
  )
}
