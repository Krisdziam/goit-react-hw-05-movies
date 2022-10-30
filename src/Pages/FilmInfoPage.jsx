import { fetchInfo } from "components/ServiceApi/ServiceApi"
import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation, Outlet, Link } from "react-router-dom"
import { Loading } from "notiflix/build/notiflix-loading-aio";



export default function FilmInfoPage() {
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



  return (
    <div>
<button onClick={goBack} type="button">Go back</button>
{film && film.title}
<ul>
            <li>
              <Link state={{ from }} to="cast">
                Cast
              </Link>
            </li>
            <li>
          
              <Link state={{ from }} to="reviews">
                Reviews
              </Link>
            </li>
          </ul>

<Outlet />
    </div>
  )
}
