import React, { useEffect, useState } from "react";
import Moviebox from "./Moviebox";
import { Database, List, X } from "phosphor-react";

import "./App.css";

export default function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=f5cb4dda51c69ceacbc189760535304a";
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=f5cb4dda51c69ceacbc189760535304a&query";
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=f5cb4dda51c69ceacbc189760535304a&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <section id="header">
        <ul id="nav">
          <li>
            <a className="head" href="/home">
              Movie Database
            </a>
          </li>
          <li>
            <a href="/home">
              <Database size={40} color="gold" />
            </a>
          </li>
        </ul>
        <div>
          <ul id="nav-search-in">
            <li>
              <form onSubmit={searchMovie}>
                <input
                  type="search"
                  placeholder="Movie Search"
                  className="me-2"
                  name="query"
                  value={query}
                  onChange={changeHandler}
                />
                <button>Search</button>
              </form>
            </li>
          </ul>
        </div>
      </section>

      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <Moviebox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
      <footer>
        <div className="copyright">
          <p>&copy; Mayur Choudhari 2023 All Rights reserved</p>
        </div>
      </footer>


      
    </>
  );
 

}
