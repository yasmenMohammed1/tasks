import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { addToFavourite, removeFromFavourite } from "../store/actions/actionFav";

export default function MovieCard({ movie }) {

  const dispatch = useDispatch();
  const favourite = useSelector(state => state.favourite);

  const addToFav =(item)=>{
   
    if(favourite[item.id] ) {
      dispatch(removeFromFavourite(item.id))
    } else {
      dispatch(addToFavourite(item))
    }

  }

  return (
    <div className="card h-100">

    <img src={`https://image.tmdb.org/t/p/w500/${movie && movie.poster_path}`} alt={movie && movie.title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.title} </h5>
        <Link to={`/movies/${movie.id}`} className="btn btn-primary">
          Details
        </Link>
        {
          favourite[movie.id] ?
          <span  onClick={() =>addToFav(movie)} className='fa fa-star fa-lg' style={{color: 'orange'}}></span> :
          <span  onClick={() =>addToFav(movie)} className='fa fa-star fa-lg'  ></span>
        }
      </div>
    </div>
  );
}
