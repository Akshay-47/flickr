// import fetchMovies from "../data/movies";
import axios from "axios";

const fetchMovies = async pageNum => {
  const baseUrl = "https://akrp-server.herokuapp.com/movies?p=" + pageNum;
  const res = await axios.get(baseUrl);
  return res.data;
};

const GET_INIT = "movies/GET_INIT";
const GET_DONE = "movies/GET_DONE";
const GET_ERROR = "movies/GET_ERROR";

export function getNextMoviesPage(force = false) {
  return async (dispatch, getState) => {
    const { movies } = getState();
    if (movies.isFetching || (!force && movies.list.length > 0)) return;

    dispatch({ type: GET_INIT });

    try {
      const moviesList = await fetchMovies(movies.pagesFetched + 1);
      dispatch({ type: GET_DONE, payload: moviesList });
    } catch (error) {
      dispatch({ type: GET_ERROR, payload: error });
    }
  };
}

// Implement async data from redux thunk
const movieReducer = (
  state = {
    pagesFetched: 0,
    fetchError: null,
    isFetching: 0,
    list: []
  },
  action
) => {
  switch (action.type) {
    case GET_INIT:
      return { ...state, isFetching: true, fetchError: null };
    case GET_DONE:
      const list = [...state.list, ...action.payload];
      const pagesFetched = state.pagesFetched + 1;
      return { ...state, isFetching: false, list, pagesFetched };
    case GET_ERROR:
      return { ...state, isFetching: false, fetchError: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
