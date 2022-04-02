import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../network/axiosConfig";
import MovieCard from "./../components/MovieCard";
import Pager from '../components/Pager'
import Search from "../components/Search";
import {_getSearchMovies} from "../network/moviesAPIs"
import { useDispatch, useSelector } from "react-redux";
import { getMovieList } from "../store/actions/actionsMovies";
import { LanguageContext } from "../context/language";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  let [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const moviesList = useSelector(state => state.movieList);
  
  const { langContext, setLangContext } = useContext(LanguageContext);
  useEffect(() => {
    // axiosInstance
    //   .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=def5e1ceb14524a4ee348997a1833042&language=en-US&page=${page}`, {
    //    
    //   })
    //   .then((data) => setMovies(data.data.results,console.log(data.data.results)))
    //   .catch((err) => console.log(err));
    // axiosInstance
    //   .get(`/movie/top_rated?language=en-US&page=${page}`, {
  
    //   })
    //   .then((data) => setMovies(data.data.results,console.log(data.data.results)))
    //   .catch((err) => console.log(err));
     dispatch(getMovieList(page, langContext))

  }, [page, langContext]);
  const getSearchMovies = searchText=>{_getSearchMovies(searchText)
    .then((data) => setMovies(data.data.results,console.log(data.data.results)))
    .catch((err) => console.log(err))}
  return (
    <>
    <Search getSearchMovies={getSearchMovies}/>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {Object.values(moviesList).map((movie) => {
          return (
              <>
            <div className="col mb-4" key={movie.id}>
              <MovieCard movie={movie} />
            </div>
            </>
          );
        })}
       <Pager page={page} setPage={setPage}/>

      </div>
    </>
  );
}

// 1- Create products list component
// 2- Define Route
// 3- Define Axios Request -> define path -> accept / reject
