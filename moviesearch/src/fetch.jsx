import { useEffect, useState } from "react"

 const Movies = ()=> {
    const [movies, setMovies]= useState([]);
    useEffect(()=>{fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b8431d9b")
        .then((response)=>response.json())
           .then((data) =>setMovies(data.results))
           .catch((error)=>console.error("Error fetching data",error));


    })
    return (
        <div>
            <h1>
                Movies
            </h1>
            <ul>{movies.map((movie)=>(
                <li key={movie.id}></li>
            )
            )}</ul>
            {/* <ul>{movies.map((movies))}</ul> */}
        </div>
     )
 };
 export default Movies;
 