import { fetchInfo } from 'components/ServiceApi/ServiceApi';
import { useState, useEffect } from 'react';
import {
  useNavigate,
  useParams,
  useLocation,
  Outlet,
  Link,
} from 'react-router-dom';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { ButtonGoBackContainer, ButtonGoBack } from "./FilmInfoPage.styled";
import FilmDetails from './FilmDetails/FilmDetails';

export default function FilmInfoPage() {
  const [film, setFilm] = useState();
  const { id } = useParams();
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(
    location?.state?.from ?? '/'
  );

  useEffect(() => {
    fetchInfo(id)
      .then(data => {
        Loading.circle({
          svgColor: '#ff6b01',
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
      <ButtonGoBackContainer>
        <ButtonGoBack to={prevLocation}>
          Go back
        </ButtonGoBack>
      </ButtonGoBackContainer>
      {film && <FilmDetails data={film} />}
      <Outlet />
    </>
  );
}
