import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Single = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { postId } = useParams();
  async function getDescription() {
    const baseUrl = "https://akrp-server.herokuapp.com/movies/" + postId;
    try {
      setLoading(true);
      setIsError(false);
      const response = await getMovieData(baseUrl);
      setMovieData(response.data[0]);
    } catch (error) {
      setIsError(true);
    }
    setLoading(false);
  }
  const getMovieData = async url => {
    const response = await axios.get(url);
    return new Promise(resolve => setTimeout(() => resolve(response), 1000));
  };
  useEffect(() => {
    getDescription();
  }, []);

  const singleItemUi = () => {
    // function getGenres({ genres }) {
    //   console.log(genres);
    //   let _genres = [];
    //   genres.forEach(element => {
    //     _genres.push(element.name);
    //   });
    //   _genres.join(",");
    //   return _genres;
    // }
    return (
      <div className="single-item">
        <div className="main-title">
          <h1>{movieData.original_title}</h1>
          <span className="release-date">({movieData.release_date})</span>
          <span className="vote-average">
            <span>
              {movieData.vote_average}
              <span className="vote-count">{movieData.vote_count} votes</span>
            </span>
            /<small>10</small>
          </span>
        </div>
        <span className="back-button">
          <Link to={"/"}>
            <span className="back-arrow">&larr;</span> Back
          </Link>
        </span>
        <div className="heading"></div>
        <div className="secondary-info">
          {/* {JSON.parse(movieData.genres).map(e => {
            return <p>{e.name}</p>;
          })} */}
        </div>
        <div className="main-content">
          <div className="image-wrapper">
            <img
              className="main-image"
              src={`${imageBasePath}`}
              alt={movieData.title}
            />
          </div>
          <div className="right-section">
            <p>{movieData.overview}</p>
          </div>
        </div>
      </div>
    );
  };

  const statusUi = () => {
    if (isError) return <div>Something went wrong</div>;
    else if (loading)
      return (
        <div className="centered">
          <div className="lds-hourglass centered"></div>
        </div>
      );
  };

  const imageBasePath =
    "https://image.tmdb.org/t/p/original" + movieData.poster_path;
  return (
    <>
      {!loading && !isError && singleItemUi()}
      {statusUi()}
    </>
  );
};

export default Single;
