import React,{useState , useEffect} from 'react'
import './Banner.css';
import instance from '../axios/axios';
import requests from '../axios/request';
function Banner() {
    const [movie , setMovie] = useState([]);


    useEffect(()=>{
      async function fetchdata(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ])
        return request;
      }

    
      fetchdata()
    },[]);

function truncate(str, n){
    return str?.length > n ? str.substr(0, n - 1) + "...": str;
}


  return (
    <header className='banner'  style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
    }}>
    <div className="banner_contents">
         <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>

         <div className="banner_button">
             <button className='btn'> play</button>
             <button className='btn'>my list</button>
         </div>
         <h1 className="description">
             {truncate(movie?.overview , 150)}
         </h1>
    </div>
    </header>
  )
}

export default Banner