import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getNextMoviesPage } from "../store/movies";
import { setScroll } from "../store/scroll";

const MovieGrid = ({ movies, getMovies, onPageScroll, scroll_ }) => {
  useEffect(() => {
    setPageScroll(scroll_);
    return () => {
      onPageScroll(window.pageYOffset);
    };
  }, [scroll_]);

  function setPageScroll(value) {
    window.scrollBy(0, value);
  }

  useEffect(() => {
    function onScroll(event) {
      const el = event.target.scrollingElement;
      const currentScrollTop = el.scrollTop;
      const maxScrollTop = el.scrollHeight - el.offsetHeight;
      if (maxScrollTop - currentScrollTop < 100) {
        getMovies(true);
      }
    }

    getMovies();

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line
  });

  function moviesUi() {
    return <div className="movie-grid">{renderMovieList(movies.list)}</div>;
  }

  function statusUi() {
    if (movies.isFetching) {
      return (
        <div className="centered">
          <div className="lds-hourglass centered"></div>
        </div>
      );
    } else if (movies.fetchError) {
      return <div>Failed to load movies.</div>;
    } else {
      return null;
    }
  }

  return (
    <div className="movies">
      <header>
        <h1>
          <Link to="/">Flick Picker</Link>
        </h1>
      </header>
      {moviesUi()}
      {statusUi()}
    </div>
  );
};

const imageBasePath = "https://image.tmdb.org/t/p/w500";

const renderMovieList = movies => {
  return movies.map((movie, index) => {
    return (
      <div key={index} className="movie-item">
        <article className="" key={index}>
          <Link to={`/view/${movie._id}`}>
            <div className="image-wrapper">
              <img src={`${imageBasePath}${movie.poster_path}`} alt="poster" />
            </div>
            <div className="movie-title">
              <h3>{movie.original_title}</h3>
            </div>
          </Link>
        </article>
      </div>
    );
  });
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    scroll_: state.scroll_
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: force => dispatch(getNextMoviesPage(force)),
    onPageScroll: position => dispatch(setScroll(position))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieGrid);
