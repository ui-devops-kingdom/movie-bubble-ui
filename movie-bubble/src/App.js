import './App.css';
import SearchIcon from './search.svg'
import {useEffect, useState} from 'react';
//c9ce3514 api key

const API_URL = 'http://www.omdbapi.com?apikey=c9ce3514'

const App = ()=>{

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(()=>{
    searchMovies("Batman")
  },[])

  return (
      <div className="app">
        <h1>Movie Bubble</h1>
      </div>
  );
}

export default App;
