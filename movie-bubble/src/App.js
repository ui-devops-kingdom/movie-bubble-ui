import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
//c9ce3514 api key

const API_URL = 'http://www.omdbapi.com?apikey=c9ce3514'

const App = () => {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies("Batman")
  }, [])


  return (

    <div className="app">
      <h1>Movie Bubble</h1>
      <div className='search'>
        <input
          placeholder='Search For Movies'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='searchIcon'
          onClick={() => searchMovies(search)}
        />
      </div>

      {
        movies?.length > 0
          ? (
          <div className='container'>
            {movies.map((movie)=>(
              <MovieCard movie={movie}/>
            ))}
          </div>
          )
          :
          (
            <div>
              <h2>No Movies Found</h2>
            </div>
          )
      }



    </div>
  );
}

export default App;
