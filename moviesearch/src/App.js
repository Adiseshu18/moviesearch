import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import Movies from "./fetch";
import "./App.css";
 
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=b8431d9b"; 
 
const App = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);
 
  useEffect(() => {

    searchMovies("Batman"); 

  }, []);
 
  const searchMovies = async (title) => {

    try {

      const response = await fetch(`${API_URL}&s=${title}`);

      const data = await response.json();

      if (data.Response === "True") {

        setMovies(data.Search);

      } else {

        setMovies([]);

      }

    } catch (error) {

      console.error("Error fetching movies:", error);

    }

  };
 
 return (
// {/* <div className="app">
// <h1>FilmFlix</h1>
 
//       <div className="search">
// <input

//           type="text"

//           value={searchTerm}

//           onChange={(e) => setSearchTerm(e.target.value)}

//           placeholder="Search for movies..."

//         />
// <button onClick={() => searchMovies(searchTerm)}>Search</button>
// </div>
 
//       {movies.length > 0 ? (
// <div className="container">

//           {movies.map((movie) => (
// <MovieCard key={movie.imdbID} movie={movie} />

//           ))}
// </div>

//       ) : (
// <div className="empty">
// <h2>No movies found</h2>
// </div>

//       )}
// </div>
<div>
<Movies/>
</div>
   );}




export default App;

 