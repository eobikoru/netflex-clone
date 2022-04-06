
import './App.css';
import Rows from './component/Rows';
import requests from './axios/request';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
     <Rows title="NetflixOriginals "  fetchurl={requests.fetchNetflixOriginals} isLargeRow/>
     <Rows title=" Trending"  fetchurl={requests.fetchTrending}/>
     <Rows title=" Top rated" fetchurl={requests.fetchTopRated} isLargeRow/>
     <Rows title=" Action Movies" fetchurl={requests.fetchActionMovies}/>
     <Rows title=" Comedy Movies" fetchurl={requests.fetchComedyMovies} isLargeRow/>
     <Rows title=" Horror Movies" fetchurl={requests.fetchHorroeMovies}/>
     <Rows title=" Documentaries" fetchurl={requests.fetchDocumentaries} isLargeRow/>
    </div>
  );
}

export default App;
