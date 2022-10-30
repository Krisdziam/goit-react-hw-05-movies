import {
    ContainerFilmDetails,
    FilmContainer,
    Reviews,
    Cast,
    AdditionalInfo,
    Title,
    PreTitle,
    ContainerMeta,
    ImagePoster,
  } from "./FilmDetails.styled";

  const FilmDetails = ({ data }) => {
    const { title, tagline, poster_path } = data;
    return (
      <ContainerFilmDetails>
        <FilmContainer>
          <ImagePoster
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="poster"
          />
  
          <ContainerMeta>
            <Title>{title}</Title>
            <PreTitle>{tagline}</PreTitle>
           
          </ContainerMeta>
        </FilmContainer>
        <AdditionalInfo>
          <Cast to={"cast"}>Cast</Cast>
          <Reviews to={"reviews"}>Reviews</Reviews>
        </AdditionalInfo>
      </ContainerFilmDetails>
    );
  };
  
  export default FilmDetails;