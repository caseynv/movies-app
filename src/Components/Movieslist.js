import React, { useState, useEffect } from 'react';

/*import { Icon } from '@iconify/react';*/
import axios from 'axios';


function Movieslist() {

  const [movie, setMovie] = useState([])
  const [movie1, setMovie1] = useState([])

    async function apiAdvice() {
        
        await axios.get('http://www.omdbapi.com/?s=Superman&apikey=3fb68cfd')
        .then((response) => {
            let resp = response.data.Search
            const movies = resp.filter(m => m.Type === 'series')
            const movies1 = resp.filter(m => m.Type === 'movie')
            console.log(movies1)
            setMovie1(movies1)
            console.log(movies)
            setMovie(movies)

        })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            
        })
    };
    
    useEffect(() => {apiAdvice()}, []);
    return (
      <>
      <div>
        <div>
          <p>Series</p>
          <div className='movieslist'>
            
            {movie.map((movi, i) => (
                <div className='movie-sect'>
                  {movi.Title}
                </div>
            ))}
          </div>
        </div>
        <div>
          <p>Movie</p>
          <div className='movieslist'>
            
            {movie1.map((movi1, i) => (
                <div className='movie-sect'>
                  {movi1.Title}
                </div>
            ))}
          </div>
        </div>
      </div>
      </>
    );
  }
  
  export default Movieslist;