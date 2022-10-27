import { fetchInfo } from "components/ServiceApi/ServiceApi"
import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { Loading } from "notiflix/build/notiflix-loading-aio";



export default function MovieInfoPage() {
const [film, setFilm] = useState()
const {id} = useParams()

const navigate = useNavigate();
const location = useLocation();

const from = location.state?.from || '/movies';

const goBack = () => {
  navigate(from);
};

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
<button onClick={goBack} type="button">Go back</button>
{film && film.title}


    </div>
  )
}
