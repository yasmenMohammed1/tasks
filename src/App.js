import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Movies from './pages/Movies';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MoviesDetails from './pages/MoviesDetails';
import FavMovies from './pages/FavMovies';
import { LanguageContext } from './context/language';
import { useState } from 'react';

function App() {

  const [langContext, setLangContext] = useState("en");
  return (
    <>
      <LanguageContext.Provider value={{ langContext, setLangContext }}>
        <Router>
        <Navbar />
        <div className="container my-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" component={MoviesDetails} />
            <Route path="/favMovies" component={FavMovies}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
      </LanguageContext.Provider>
    </>
  );
}

export default App;

