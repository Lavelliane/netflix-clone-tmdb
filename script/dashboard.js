const nav = document.getElementById("nav");
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "api_key=1014a27f01529fa1ccd17a193ae38df6";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;

const documentarySection = document.querySelector(".documentary");
const romanceSection = document.querySelector(".romance");
const horrorSection = document.querySelector(".horror");
const comedySection = document.querySelector(".comedy");
const actionSection = document.querySelector(".action");
const topRatedSection = document.querySelector(".top_rated");
const trendingSection = document.querySelector(".trending");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    nav.classList.add("nav__black");
  } else {
    nav.classList.remove("nav__black");
  }
});

const movieFunction = (data, parent) => {
  data.results.forEach((movie) => {
    if (movie.backdrop_path !== null) {
      const movieEl = document.createElement("img");
      movieEl.classList.add("row__poster");
      movieEl.src = IMAGE_URL + movie.backdrop_path;
      parent.appendChild(movieEl);
    }
  });
};

const getMoviesDocumentary = async () => {
  try {
    const response = await fetch(API_URL + "&with_genres=" + encodeURI("99"));
    const data = await response.json();
    movieFunction(data, documentarySection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesRomance = async () => {
  try {
    const response = await fetch(
      API_URL + "&with_genres=" + encodeURI("10749")
    );
    const data = await response.json();
    movieFunction(data, romanceSection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesHorror = async () => {
  try {
    const response = await fetch(API_URL + "&with_genres=" + encodeURI("27"));
    const data = await response.json();
    movieFunction(data, horrorSection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesComedy = async () => {
  try {
    const response = await fetch(API_URL + "&with_genres=" + encodeURI("35"));
    const data = await response.json();
    movieFunction(data, comedySection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesAction = async () => {
  try {
    const response = await fetch(API_URL + "&with_genres=" + encodeURI("28"));
    const data = await response.json();
    movieFunction(data, actionSection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesTopRated = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=1014a27f01529fa1ccd17a193ae38df6&language=en-US&page=1"
    );
    const data = await response.json();
    movieFunction(data, topRatedSection);
  } catch (error) {
    console.log(error);
  }
};
const getMoviesTrending = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=1014a27f01529fa1ccd17a193ae38df6"
    );
    const data = await response.json();
    movieFunction(data, trendingSection);
  } catch (error) {
    console.log(error);
  }
};
getMoviesDocumentary();
getMoviesRomance();
getMoviesHorror();
getMoviesComedy();
getMoviesAction();
getMoviesTopRated();
getMoviesTrending();
