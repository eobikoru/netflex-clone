import React,{useState,useEffect}from 'react'
import instance from '../axios/axios';
import requests from '../axios/request';
import './Rows.css'

const base_url = "http://image.tmdb.org/t/p/original/"
function Rows({title , fetchurl , isLargeRow}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData(){
       const request =  await instance.get(fetchurl);
       console.log(request.data.results)
       setMovies(request.data.results)
    }
    fetchData()
  }, [fetchurl])
  
  return (
    <div className='row'>
      <h1>{title}</h1>
<div className="row__posters">

        {movies.map((movie)=>(
           <img className={`row_poster ${isLargeRow && "row__posterLarge"}`} key={movie.id} src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      
</div>
      
    </div>
  )
}

export default Rows