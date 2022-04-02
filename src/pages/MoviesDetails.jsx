import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../context/language";
import { getMovieDetails } from "../network/moviesAPIs";

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { langContext, setLangContext } = useContext(LanguageContext);
  const params = useParams();
  useEffect(() => {
    getMovieDetails(params.id, langContext)
      .then((data) => setMovieDetails(data.data))
      .catch((err) => console.log(err));
  }, [langContext]);

  return (
    <>
      <h3>MovieDetails</h3>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails && movieDetails.poster_path}`} alt={movieDetails && movieDetails.title} />

          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h5 className="card-title">Title :{movieDetails.title}</h5>
              <h5 className="card-title">Original Title : {movieDetails.original_title}</h5>
              <h5>Description</h5>
              <p className="card-text">{movieDetails.overview}</p>
              <p className="card-text">released : {movieDetails.release_date} </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
