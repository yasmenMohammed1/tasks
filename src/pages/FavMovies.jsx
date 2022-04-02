import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

export default function FavMovies() {

   const favourites = useSelector((state) => state.favourite);
   let arrFav = Object.values(favourites);
   console.log(arrFav);
  return (
    <>
      <div className='favlenght'>FavMovies : {arrFav.length}</div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        arrFav.map((movie) => {
        return (
            <>
          <div className="col mb-4" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
          </>
        );
      })
      }
      </div>
    </>
  )
}
